import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetProfiles {
    static async getProfiles(): Promise<void> {
        const profilesOperations = new ZOHOCRMSDK.Profiles.ProfilesOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Profiles.GetProfilesParam.INCLUDE_LITE_PROFILE, true);
        const response = await profilesOperations.getProfiles(paramInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Profiles.ResponseWrapper) {
                const profiles = responseHandler.getProfiles();
                if (profiles != null) {
                    for (let profile of profiles) {
                        console.log("Profile ID: " + profile.getId());
                        console.log("Profile Name: " + profile.getName());
                        console.log("Profile Category: " + profile.getCategory());
                        console.log("Profile Description: " + profile.getDescription());
                        console.log("Profile CreatedTime: " + profile.getCreatedTime());
                        console.log("Profile ModifiedTime: " + profile.getModifiedTime());
                        console.log("Profile Default: " + profile.getDefault());
                        
                        const createdBy = profile.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Profile Created By ID: " + createdBy.getId());
                            console.log("Profile Created By Name: " + createdBy.getName());
                            console.log("Profile Created By Email: " + createdBy.getEmail());
                        }
                        
                        const modifiedBy = profile.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Profile Modified By ID: " + modifiedBy.getId());
                            console.log("Profile Modified By Name: " + modifiedBy.getName());
                            console.log("Profile Modified By Email: " + modifiedBy.getEmail());
                        }
                        
                        const permissionType = profile.getPermissionType();
                        if (permissionType != null) {
                            console.log("Profile Permission Type: " + permissionType);
                        }
                        
                        const sections = profile.getSections();
                        if (sections != null) {
                            console.log("Profile Sections:");
                            for (let section of sections) {
                                console.log("  Section Name: " + section.getName());
                                console.log("  Section Categories: " + section.getCategories());
                            }
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Profiles.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
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
        await GetProfiles.getProfiles();
    }
}

GetProfiles.initializeAndCall();