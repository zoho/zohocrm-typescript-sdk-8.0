import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetCurrency {
    static async getCurrency(): Promise<void> {
        const currencyId = BigInt("1055806000007368016");
        
        const currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        
        const response = await currenciesOperations.getCurrency(currencyId);
        
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
                        console.log("Currency IsActive: " + currency.getIsActive());
                        console.log("Currency IsBase: " + currency.getIsBase());
                        
                        const format = currency.getFormat();
                        if (format != null) {
                            console.log("Currency Format - DecimalSeparator: " + format.getDecimalSeparator());
                            console.log("Currency Format - ThousandSeparator: " + format.getThousandSeparator());
                            console.log("Currency Format - DecimalPlaces: " + format.getDecimalPlaces());
                        }
                        
                        const createdBy = currency.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Currency Created By - ID: " + createdBy.getId());
                            console.log("Currency Created By - Name: " + createdBy.getName());
                            console.log("Currency Created By - Email: " + createdBy.getEmail());
                        }
                        
                        const modifiedBy = currency.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Currency Modified By - ID: " + modifiedBy.getId());
                            console.log("Currency Modified By - Name: " + modifiedBy.getName());
                            console.log("Currency Modified By - Email: " + modifiedBy.getEmail());
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
        await GetCurrency.getCurrency();
    }
}

GetCurrency.initializeAndCall();