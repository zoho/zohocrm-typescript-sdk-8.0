import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from "fs"
class DownloadExportAuditLogResult{


    public static async initializeAndCall() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        let id = BigInt("727225599001")
        let downloadUrl = "https://download-accl.zoho.com/v2/crm/xxxxx/auditlog/3477725001/AuditLog.csv";
        let destinationFolder = "/Users/user_name/Documents";
        await DownloadExportAuditLogResult.downloadExportAuditLogResult(downloadUrl, destinationFolder);
    }


    public static async downloadExportAuditLogResult(downloadUrl: string, destinationFolder: string) {
        const auditLogExportOperations = new ZOHOCRMSDK.AuditLogExport.AuditLogExportOperations();

        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.AuditLogExport.ResponseHandler.MasterModel> = await auditLogExportOperations.downloadExportAuditLogResult(downloadUrl);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
             const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.AuditLogExport.FileBodyWrapper) {
                const fileBodyWrapper = responseHandler as ZOHOCRMSDK.AuditLogExport.FileBodyWrapper;
                const streamWrapper: ZOHOCRMSDK.StreamWrapper = fileBodyWrapper.getFile();
                const filePath = `${destinationFolder}/${streamWrapper.getName()}`;
                const fileStream = fs.createWriteStream(filePath);

                if (streamWrapper.getStream()) {
                    const inputStream = streamWrapper.getStream();

                    inputStream.on("data", (chunk) => fileStream.write(chunk));
                    inputStream.on("end", () => {
                        fileStream.end();
                        console.log(`File downloaded to: ${filePath}`);
                    });
                    inputStream.on("error", (err) => {
                        console.error("Error reading stream: ", err);
                        fileStream.close();
                    });
                } else {
                    console.error("Stream is null.");
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
                const exception = responseHandler as ZOHOCRMSDK.AuditLogExport.APIException;
                if (exception.getStatus()) {
                    console.log("Status: " + exception.getStatus().getValue());
                }
                if (exception.getCode()) {
                    console.log("Code: " + exception.getCode().getValue());
                }
                if (exception.getDetails()) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(exception.getDetails())) {
                        console.log(`${key}: ${value}`);
                    }
                }
                if (exception.getMessage()) {
                    console.log("Message: " + exception.getMessage());
                }
            }
        }
    }
}

DownloadExportAuditLogResult.initializeAndCall();