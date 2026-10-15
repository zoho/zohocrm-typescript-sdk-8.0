import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";
export class GetAssociatedGroups
{
    static async getAssociatedGroups(userId: bigint)
    {
        let usersOperations : ZOHOCRMSDK.Users.UsersOperations= new ZOHOCRMSDK.Users.UsersOperations();
        let response : ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ResponseHandler.MasterModel>=await usersOperations.getAssociatedGroups(userId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler : ZOHOCRMSDK.Users.ResponseHandler.MasterModel= response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Users.AssociatedGroupsWrapper)
            {
                let userGroups :  ZOHOCRMSDK.Users.AssociatedGroup[] = responseHandler.getUserGroups();
                if (userGroups != null)
                {
                    userGroups.forEach(userGroup => {
                        console.log("AssociateGroup ID : " + userGroup.getId());
                        console.log("AssociateGroup Name : " + userGroup.getName());
                        console.log("AssociateGroup Description : " + userGroup.getDescription());
                        console.log("AssociateGroup CreatedTime : " + userGroup.getCreatedTime());
                        console.log("AssociateGroup ModifiedTime : " + userGroup.getModifiedTime());
                        let createdBy :  ZOHOCRMSDK.Users.MinifiedUser = userGroup.getCreatedBy();
                        if (createdBy != null)
                        {
                            console.log("AssociateGroup CreatedBy ID : " + createdBy.getId());
                            console.log("AssociateGroup CreatedBy Name : " + createdBy.getName());
                            console.log("AssociateGroup CreatedBy Email : " + createdBy.getEmail());
                        }
                        let modifiedBy :  ZOHOCRMSDK.Users.MinifiedUser = userGroup.getModifiedBy();
                        if (modifiedBy != null)
                        {
                            console.log("AssociateGroup modifiedBy ID : " + modifiedBy.getId());
                            console.log("AssociateGroup modifiedBy Name : " + modifiedBy.getName());
                            console.log("AssociateGroup modifiedBy Email : " + modifiedBy.getEmail());
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Users.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details : Map<string, any> = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
    static async initializeAndCall()
    {
        let environment: ZOHOCRMSDK.Environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token : ZOHOCRMSDK.OAuthToken = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await GetAssociatedGroups.getAssociatedGroups(BigInt("440280254001"));
    }
}
GetAssociatedGroups.initializeAndCall();
