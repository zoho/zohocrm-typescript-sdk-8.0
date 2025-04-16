import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";
export class GetUser
{
    public static async getuser(userId: bigint) {
        //example
        //let userId = 3409643302031n;
        let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();
        /* Possible parameters for Get User operation */
        await headerInstance.add(ZOHOCRMSDK.Users.GetUserHeader.IF_MODIFIED_SINCE, new Date("2019-12-12T12:12:12+05:30"));
        //Call getUser method that takes headerInstance and userId as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ResponseHandler.MasterModel> = await usersOperations.getUser(userId, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject: ZOHOCRMSDK.Users.ResponseHandler.MasterModel = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Users.ResponseWrapper) {
                    let users: ZOHOCRMSDK.Users.Users[] = responseObject.getUsers();
                    users.forEach(user => {
                        console.log("User Country: " + user.getCountry());
                        let customizeInfo: ZOHOCRMSDK.Users.CustomizeInfo = user.getCustomizeInfo();
                        if (customizeInfo != null) {
                            if (customizeInfo.getNotesDesc() != null) {
                                console.log("User CustomizeInfo NotesDesc: " + customizeInfo.getNotesDesc().toString());
                            }
                            if (customizeInfo.getShowRightPanel() != null) {
                                console.log("User CustomizeInfo ShowRightPanel: " + customizeInfo.getShowRightPanel().toString());
                            }
                            if (customizeInfo.getBcView() != null) {
                                console.log("User CustomizeInfo BcView: " + customizeInfo.getBcView().toString());
                            }
                            if (customizeInfo.getShowHome() != null) {
                                console.log("User CustomizeInfo ShowHome: " + customizeInfo.getShowHome().toString());
                            }
                            if (customizeInfo.getShowDetailView() != null) {
                                console.log("User CustomizeInfo ShowDetailView: " + customizeInfo.getShowDetailView().toString());
                            }
                            if (customizeInfo.getUnpinRecentItem() != null) {
                                console.log("User CustomizeInfo UnpinRecentItem: " + customizeInfo.getUnpinRecentItem().toString());
                            }
                        }
                        let role: ZOHOCRMSDK.Users.Role = user.getRole();
                        if (role != null) {
                            console.log("User Role Name: " + role.getName());
                            console.log("User Role ID: " + role.getId());
                        }
                        console.log("User Signature: " + user.getSignature());
                        console.log("User City: " + user.getCity());
                        console.log("User Language: " + user.getLanguage());
                        console.log("User Locale: " + user.getLocale());
                        console.log("User Microsoft: " + user.getMicrosoft().toString());
                        if (user.getPersonalAccount() != null) {
                            console.log("User PersonalAccount: " + user.getPersonalAccount().toString());
                        }
                        console.log("User DefaultTabGroup: " + user.getDefaultTabGroup());
                        console.log("User Isonline: " + user.getIsonline().toString());
                        let modifiedBy: ZOHOCRMSDK.Users.MinifiedUser = user.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("User Modified By User-Name: " + modifiedBy.getName());
                            console.log("User Modified By User-ID: " + modifiedBy.getId());
                        }
                        console.log("User Street: " + user.getStreet());
                        console.log("User Currency: " + user.getCurrency());
                        console.log("User Alias: " + user.getAlias());
                        let theme: ZOHOCRMSDK.Users.Theme = user.getTheme();
                        if (theme != null) {
                            let normalTab: ZOHOCRMSDK.Users.Tab = theme.getNormalTab();
                            if (normalTab != null) {
                                console.log("User Theme NormalTab FontColor: " + normalTab.getFontColor());
                                console.log("User Theme NormalTab Name: " + normalTab.getBackground());
                            }
                            let selectedTab: ZOHOCRMSDK.Users.Tab = theme.getSelectedTab();
                            if (selectedTab != null) {
                                console.log("User Theme SelectedTab FontColor: " + selectedTab.getFontColor());
                                console.log("User Theme SelectedTab Name: " + selectedTab.getBackground());
                            }
                            console.log("User Theme NewBackground: " + theme.getNewBackground());
                            console.log("User Theme Background: " + theme.getBackground());
                            console.log("User Theme Screen: " + theme.getScreen());
                            console.log("User Theme Type: " + theme.getType());
                        }
                        console.log("User ID: " + user.getId());
                        console.log("User State: " + user.getState());
                        console.log("User Fax: " + user.getFax());
                        console.log("User CountryLocale: " + user.getCountryLocale());
                        console.log("User FirstName: " + user.getFirstName());
                        console.log("User Email: " + user.getEmail());
                        let reportingTo: ZOHOCRMSDK.Users.MinifiedUser = user.getReportingTo();
                        if (reportingTo != null) {
                            console.log("User ReportingTo Name: " + reportingTo.getName());
                            console.log("User ReportingTo ID: " + reportingTo.getId());
                        }
                        console.log("User DecimalSeparator: " + user.getDecimalSeparator());
                        console.log("User Zip: " + user.getZip());
                        console.log("User CreatedTime: " + user.getCreatedTime());
                        console.log("User Website: " + user.getWebsite());
                        console.log("User ModifiedTime: " + user.getModifiedTime());
                        console.log("User TimeFormat: " + user.getTimeFormat());
                        console.log("User Offset: " + user.getOffset().toString());
                        let profile: ZOHOCRMSDK.Users.Profile = user.getProfile();
                        if (profile != null) {
                            console.log("User Profile Name: " + profile.getName());
                            console.log("User Profile ID: " + profile.getId());
                        }
                        console.log("User Mobile: " + user.getMobile());
                        console.log("User LastName: " + user.getLastName());
                        console.log("User TimeZone: " + user.getTimeZone()!.name);
                        console.log("Custom Field: " + user.getKeyValue("Custom_Field"));
                        let createdBy: ZOHOCRMSDK.Users.MinifiedUser = user.getCreatedBy();
                        if (createdBy != null) {
                            console.log("User Created By User-Name: " + createdBy.getName());
                            console.log("User Created By User-ID: " + createdBy.getId());
                        }
                        console.log("User Zuid: " + user.getZuid());
                        console.log("User Confirm: " + user.getConfirm().toString());
                        console.log("User FullName: " + user.getFullName());
                        console.log("User Phone: " + user.getPhone());
                        console.log("User DOB: " + user.getDob());
                        console.log("User DateFormat: " + user.getDateFormat());
                        console.log("User Status: " + user.getStatus());
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
        await GetUser.getuser(BigInt("34767065"));
    }
}
GetUser.initializeAndCall()
