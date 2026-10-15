import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetNotifications {
    static async getNotifications(): Promise<void> {
        const notificationsOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        // await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.PAGE, 1);
        // await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.PER_PAGE, 200);
        // await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.CHANNEL_ID, BigInt("1055806000000087001"));
        // await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.MODULE, "Leads");
        
        const response = await notificationsOperations.getNotifications(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Notifications.ResponseWrapper) {
                const notifications = responseHandler.getWatch();
                if (notifications != null) {
                    for (let notification of notifications) {
                        console.log("Notification Channel ID: " + notification.getChannelId());
                        console.log("Notification Channel Expiry: " + notification.getChannelExpiry());
                        console.log("Notification Resource ID: " + notification.getResourceId());
                        console.log("Notification Resource URI: " + notification.getResourceUri());
                        console.log("Notification Token: " + notification.getToken());
                        
                        const notifyUrl = notification.getNotifyUrl();
                        if (notifyUrl != null) {
                            console.log("Notification Notify URL: " + notifyUrl);
                        }
                        
                        const events = notification.getEvents();
                        if (events != null && events.length > 0) {
                            console.log("Notification Events:");
                            for (let event of events) {
                                console.log("  Event: " + event);
                            }
                        }
                        
                        console.log("--------------------");
                    }
                }
                
                const info = responseHandler.getInfo();
                if (info != null) {
                    console.log("Info Count: " + info.getCount());
                    console.log("Info Page: " + info.getPage());
                    console.log("Info Per Page: " + info.getPerPage());
                    console.log("Info More Records: " + info.getMoreRecords());
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Notifications.APIException) {
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
        await GetNotifications.getNotifications();
    }
}

GetNotifications.initializeAndCall();