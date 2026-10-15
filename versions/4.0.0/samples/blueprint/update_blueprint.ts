import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateBlueprint {
    static async updateBlueprint(recordId: string, moduleAPIName: string): Promise<void> {
        const blueprintOperations = new ZOHOCRMSDK.Blueprint.BlueprintOperations(recordId, moduleAPIName);
        
        const bodyWrapper = new ZOHOCRMSDK.Blueprint.BodyWrapper();
        let bluePrintList = [];
        const blueprint = new ZOHOCRMSDK.Blueprint.BluePrint();
        blueprint.setTransitionId("1055806000000173099"); // Replace with actual transition ID
        
		let data = new ZOHOCRMSDK.Record.Record();
		let lookup = new Map();
		lookup.set("Phone", "8940372937");
		lookup.set("id", "8940372937");
		data.addKeyValue("Phone", "8940372937");
		data.addKeyValue("Notes", "Updated via blueprint");
		let attachments = new Map();
		let fileIds = [];
		fileIds.push("blojtd2d13b5f044e4041a3315793fb21ef");
		attachments.set("file_id", fileIds);
		attachments.set("link_url", "ww.zoho.com");
		// data.addKeyValue("Attachments", attachments);
		let listings = [];
		let interested_listings = new Map();
		interested_listings.set("id", 36523971978005);
		listings.push(interested_listings);
		// data.addKeyValue("Listings", listings);
		let multiuser = [];
		let multi_user = new Map();
		multi_user.set("name", "givenname");
		multi_user.set("id", 3652397186017);
		multiuser.push(multi_user);
		// data.addKeyValue("Multi_user", multiuser);
		let processinfo = new  ZOHOCRMSDK.Blueprint.ProcessInfo();
		processinfo.setAPIName("apiname");
		processinfo.setColumnName("columnname");
		processinfo.setContinuous(false);
		processinfo.setFieldId(BigInt("323243"));
		processinfo.setFieldLabel("fieldlabel");
		processinfo.setFieldName("field_name");
		processinfo.setId("329993200132223");
		processinfo.setIsContinuous(false);
		processinfo.setName("name");
		let escalation = new ZOHOCRMSDK.Blueprint.Escalation();
		escalation.setDays(1);
		escalation.setStatus("overdue");
		processinfo.setEscalation(escalation);
		// blueprint.setProcessInfo(processinfo);
		let transitions = [];
		let transition = new ZOHOCRMSDK.Blueprint.Transition();
		transition.setType("manual");
		let nextTransitions = [];
		let nexttransition = new ZOHOCRMSDK.Blueprint.NextTransition();
		nexttransition.setId("36523973921103");
		nexttransition.setName("call later");
		nexttransition.setType("manual");
		nexttransition.setCriteriaMatched(false);
		nextTransitions.push(nexttransition);
		transition.setNextTransitions(nextTransitions);
		transitions.push(transition);
		// blueprint.setTransitions(transitions);
		let checkLists = [];
		let checkListItem = new Map();
		checkListItem.set("list 1", true);
		checkLists.push(checkListItem);
		checkListItem = new Map();
		checkListItem.set("list 2", true);
		checkLists.push(checkListItem);
		checkListItem = new Map();
		checkListItem.set("list 3", true);
		checkLists.push(checkListItem);
		// data.addKeyValue("CheckLists", checkLists);
		let tasks = new Map();
		tasks.set("Subject", "Event");
		// data.addKeyValue("Tasks", tasks);
		blueprint.setData(data);
		bluePrintList.push(blueprint);
		bodyWrapper.setBlueprint(bluePrintList);
        
        const response = await blueprintOperations.updateBlueprint(bodyWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Blueprint.SuccessResponse) {
                const successResponse = actionHandler;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                
                const details = successResponse.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                }
                
                console.log("Message: " + successResponse.getMessage().getValue());
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Blueprint.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                }
                
                console.log("Message: " + exception.getMessage().getValue());
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Blueprint.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getBlueprint();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Blueprint.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        
                        const details = successResponse.getDetails();
                        if (details !== null) {
                            console.log("Details: ");
                            for (const [key, value] of Object.entries(details)) {
                                console.log(`${key}: ${value}`);
                            }
                        }
                        
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Blueprint.APIException) {
                        const exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        
                        const details = exception.getDetails();
                        if (details !== null) {
                            console.log("Details: ");
                            for (const [key, value] of Object.entries(details)) {
                                console.log(`${key}: ${value}`);
                            }
                        }
                        
                        console.log("Message: " + exception.getMessage().getValue());
                    }
                }
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
        let recordId = "1055806000028562118";
        let moduleAPIName = "Leads";
        await UpdateBlueprint.updateBlueprint(recordId, moduleAPIName);
    }
}

UpdateBlueprint.initializeAndCall();