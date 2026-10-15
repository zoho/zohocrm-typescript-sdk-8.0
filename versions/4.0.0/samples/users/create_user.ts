import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";
export class CreateUser
{
    public static async createUser() {
        let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        let request: ZOHOCRMSDK.Users.BodyWrapper = new ZOHOCRMSDK.Users.BodyWrapper();
        //Array to hold User instances
        let userArray: ZOHOCRMSDK.Users.Users[] = [];
        let user: ZOHOCRMSDK.Users.Users = new ZOHOCRMSDK.Users.Users();
        let role: ZOHOCRMSDK.Users.Role = new ZOHOCRMSDK.Users.Role();
        role.setId(BigInt("440280031151"));
        user.setRole(role);
        user.setCountryLocale("en_US");
        user.setFirstName("Test");
        user.setLastName("User");
        user.setEmail("testuser123456@zoho.com");
        let profile: ZOHOCRMSDK.Users.Profile = new ZOHOCRMSDK.Users.Profile();
        profile.setId(BigInt("440280031160"));
        user.setProfile(profile);
        //Add the User instance to array
        userArray.push(user);
        request.setUsers(userArray);
        //Call createUser method that takes ZOHOCRMSDK.Users.RequestWrapper class instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ActionHandler.MasterModel> = await usersOperations.createUsers(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject: ZOHOCRMSDK.Users.ActionHandler.MasterModel = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Users.ActionWrapper) {
                    let actionResponses: ZOHOCRMSDK.Users.ActionResponse.MasterModel[] = responseObject.getUsers();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Users.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details: Map<string, any> = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Users.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details: Map<string, any> = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details: Map<string, any> = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
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
        await CreateUser.createUser();
    }
}
CreateUser.initializeAndCall();
