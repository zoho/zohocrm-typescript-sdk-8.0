import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateNotification {
    static async updateNotification(): Promise<void> {
        const notificationsOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        
        const request = new ZOHOCRMSDK.Notifications.BodyWrapper();
        const notificationsArray = [];
        
        // Single notification update with complete configuration
        const notification = new ZOHOCRMSDK.Notifications.Notification();
        
        // Set notification details
        notification.setChannelId("1055806000000087001");
        notification.setNotifyUrl("https://www.example.com/single-notification-update");
        notification.setChannelExpiry(new Date("2025-12-31T23:59:59Z"));
        notification.setToken("single_update_token_123");
        
        // Configure comprehensive event watching for multiple modules
        const events = [];
        events.push("Leads.create");
        events.push("Leads.edit");
        events.push("Leads.delete");
        events.push("Leads.convert");
        events.push("Contacts.create");
        events.push("Contacts.edit");
        events.push("Contacts.delete");
        events.push("Accounts.create");
        events.push("Accounts.edit");
        events.push("Deals.create");
        events.push("Deals.edit");
        notification.setEvents(events);
        
        notificationsArray.push(notification);
        request.setWatch(notificationsArray);
        
        const response = await notificationsOperations.updateNotification(request);
        
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
        await UpdateNotification.updateNotification();
    }
}

UpdateNotification.initializeAndCall();