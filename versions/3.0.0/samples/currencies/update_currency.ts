import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateCurrency {
    static async updateCurrency(): Promise<void> {
        const currencyId = BigInt("1055806000007368016");
        
        const currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        
        const request = new ZOHOCRMSDK.Currencies.BodyWrapper();
        const currencies = [];
        
        const currency = new ZOHOCRMSDK.Currencies.Currency();
        currency.setPrefixSymbol(true);
        currency.setName("Algerian Dinar - DZD");
        currency.setIsoCode("DZD");
        currency.setSymbol("DA");
        currency.setExchangeRate("20.0");
        currency.setIsActive(true);
        let format = new ZOHOCRMSDK.Currencies.Format();
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));
        currency.setFormat(format);
        currencies.push(currency);
        request.setCurrencies(currencies);
        
        const response = await currenciesOperations.updateCurrency(currencyId, request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Currencies.ActionWrapper) {
                const actionResponses = actionHandler.getCurrencies();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
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
                            
                            console.log("Message: " + successResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                            
                            console.log("Message: " + exception.getMessage().getValue());
                        }
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                
                console.log("Message: " + exception.getMessage().getValue());
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
        await UpdateCurrency.updateCurrency();
    }
}

UpdateCurrency.initializeAndCall();