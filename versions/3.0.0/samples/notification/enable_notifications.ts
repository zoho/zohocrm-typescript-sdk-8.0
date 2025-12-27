import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class EnableNotifications {
    static async enableNotifications(): Promise<void> {
        const notificationsOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        
        const request = new ZOHOCRMSDK.Notifications.BodyWrapper();
        const notifications = [];
        
        // Create first notification
        const notification = new ZOHOCRMSDK.Notifications.Notification();		
        notification.setChannelId("106800211");
		notification.setNotifyOnRelatedAction(false);
		let events = [];
		events.push("Deals.all");
		notification.setEvents(events);
		notification.setChannelExpiry(new Date("2024-12-31T23:59:59Z"));
		notification.setToken("TOKEN_FOR_VERIFICATION_OF_1068002");
		notification.setNotifyUrl("https://www.zohoapis.com");
		notifications.push(notification);
		const notification2 = new ZOHOCRMSDK.Notifications.Notification();
		notification2.setChannelId("106800211");
		notification2.setNotifyOnRelatedAction(false);
		let events2 = [];
		events2.push("Accounts.all");
		notification2.setEvents(events2);
		notification2.setChannelExpiry(new Date("2024-12-31T23:59:59Z"));
		notification2.setToken("TOKEN_FOR_VERIFICATION_OF_1068002");
		notification2.setNotifyUrl("https://www.zohoapis.com");
		notifications.push(notification2);
		request.setWatch(notifications);
        const response = await notificationsOperations.enableNotifications(request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                const actionResponses = actionHandler.getWatch();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            
                            const details = successResponse.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
                            const exception = actionResponse;
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Notifications.APIException) {
                const exception = actionHandler;
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
        await EnableNotifications.enableNotifications();
    }
}

EnableNotifications.initializeAndCall();