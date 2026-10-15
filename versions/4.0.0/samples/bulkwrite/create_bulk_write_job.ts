import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateBulkWriteJob {
    static async createBulkWriteJob(moduleAPIName: string, fileId: string): Promise<void> {
        const bulkWriteOperations = new ZOHOCRMSDK.BulkWrite.BulkWriteOperations();
        
        const requestWrapper = new ZOHOCRMSDK.BulkWrite.RequestWrapper();
        
        // Set up callback configuration (optional)
        const callback = new ZOHOCRMSDK.BulkWrite.CallBack();
        callback.setUrl("https://www.example.com/callback");
        callback.setMethod(new ZOHOCRMSDK.Choice("post"));
        requestWrapper.setCallback(callback);
        
        // Set operation type
        requestWrapper.setOperation(new ZOHOCRMSDK.Choice("insert")); // Options: insert, update, upsert
        
        // Set up resource configuration
        const resource = [];
        const resourceItem = new ZOHOCRMSDK.BulkWrite.Resource();
        
        // Set resource type
        resourceItem.setType(new ZOHOCRMSDK.Choice("data"));
        
        // Set module
        const module = new ZOHOCRMSDK.Modules.MinifiedModule();
        module.setAPIName(moduleAPIName);
        resourceItem.setModule(module);
        
        // Set file ID from upload
        resourceItem.setFileId(fileId);
        
        // Set up field mappings
        const fieldMappings = [];
        
        // Example field mapping for First Name
        const fieldMapping1 = new ZOHOCRMSDK.BulkWrite.FieldMapping();
        fieldMapping1.setAPIName("First_Name");
        fieldMapping1.setIndex(0); // Column index in CSV file
        fieldMappings.push(fieldMapping1);
        
        // Example field mapping for Last Name
        const fieldMapping2 = new ZOHOCRMSDK.BulkWrite.FieldMapping();
        fieldMapping2.setAPIName("Last_Name");
        fieldMapping2.setIndex(1);
        fieldMappings.push(fieldMapping2);
        
        // Example field mapping for Email
        const fieldMapping3 = new ZOHOCRMSDK.BulkWrite.FieldMapping();
        fieldMapping3.setAPIName("Email");
        fieldMapping3.setIndex(2);
        fieldMappings.push(fieldMapping3);
        
        // Example field mapping for Phone
        const fieldMapping4 = new ZOHOCRMSDK.BulkWrite.FieldMapping();
        fieldMapping4.setAPIName("Phone");
        fieldMapping4.setIndex(3);
        fieldMappings.push(fieldMapping4);
        
        resourceItem.setFieldMappings(fieldMappings);
        
        // Set find by field for update/upsert operations (optional)
        // resourceItem.setFindBy("Email");
        
        resource.push(resourceItem);
        requestWrapper.setResource(resource);
        
        const response = await bulkWriteOperations.createBulkWriteJob(requestWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionResponse = response.getObject();

            if (actionResponse instanceof ZOHOCRMSDK.BulkWrite.SuccessResponse) {
                const successResponse = actionResponse;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                
                const details = successResponse.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                    
                    // Extract job ID for future reference
                    if (details.has("id")) {
                        console.log("Bulk Write Job ID: " + details.get("id"));
                    }
                }
                
                console.log("Message: " + successResponse.getMessage());
            }
            else if (actionResponse instanceof ZOHOCRMSDK.BulkWrite.APIException) {
                const exception = actionResponse;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                }
                
                console.log("Message: " + exception.getMessage());
            }
        }
    }

    public static async initializeAndCall() {
        let environment = ZOHOCRMSDK.INDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        let moduleAPIName = "Leads";
        let fileId = "1055806000028641013"; // File ID from upload operation
        await CreateBulkWriteJob.createBulkWriteJob(moduleAPIName, fileId);
    }
}

CreateBulkWriteJob.initializeAndCall();