import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetCurrencies {
    static async getCurrencies(): Promise<void> {
        const currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        
        const response = await currenciesOperations.getCurrencies();
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Currencies.ResponseWrapper) {
                const currencies = responseHandler.getCurrencies();
                if (currencies != null) {
                    for (let currency of currencies) {
                        console.log("Currency ID: " + currency.getId());
                        console.log("Currency Name: " + currency.getIsoCode());
                        console.log("Currency Symbol: " + currency.getSymbol());
                        console.log("Currency CreatedTime: " + currency.getCreatedTime());
                        console.log("Currency ModifiedTime: " + currency.getModifiedTime());
                        console.log("Currency ExchangeRate: " + currency.getExchangeRate());
                        console.log("Currency Format: " + JSON.stringify(currency.getFormat()));
                        console.log("Currency IsActive: " + currency.getIsActive());
                        console.log("Currency IsBase: " + currency.getIsBase());
                        
                        const createdBy = currency.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Currency Created By - ID: " + createdBy.getId());
                            console.log("Currency Created By - Name: " + createdBy.getName());
                        }
                        
                        const modifiedBy = currency.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Currency Modified By - ID: " + modifiedBy.getId());
                            console.log("Currency Modified By - Name: " + modifiedBy.getName());
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Currencies.APIException) {
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
        await GetCurrencies.getCurrencies();
    }
}

GetCurrencies.initializeAndCall();