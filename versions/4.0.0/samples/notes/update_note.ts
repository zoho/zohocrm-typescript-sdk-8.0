import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";
export class UpdateNote {
    public static async updateNote(noteId: bigint) {
        //example
        //let noteId = 3409643549003n
        let notesOperations: ZOHOCRMSDK.Notes.NotesOperations = new ZOHOCRMSDK.Notes.NotesOperations();
        let request: ZOHOCRMSDK.Notes.BodyWrapper = new ZOHOCRMSDK.Notes.BodyWrapper();
        //Array to hold Note instances
        let notesArray: ZOHOCRMSDK.Notes.Note[] = [];
        let note: ZOHOCRMSDK.Notes.Note = new ZOHOCRMSDK.Notes.Note();
        note.setNoteTitle("Contacted12");
        note.setNoteContent("Need to do further tracking12");
        //Add Note instance to the list
        notesArray.push(note);
        request.setData(notesArray);
        //Call updateNote method that takes BodyWrapper instance and noteId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notes.ActionHandler.MasterModel> = await notesOperations.updateNote(noteId, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject: ZOHOCRMSDK.Notes.ActionHandler.MasterModel = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notes.ActionWrapper) {
                    let actionResponses: ZOHOCRMSDK.Notes.ActionResponse.MasterModel[] = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Notes.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details: Map<string, any> = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Notes.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details: Map<string, any> = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Notes.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details: Map<string, any> = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    static async initializeAndCall() {
        let environment: ZOHOCRMSDK.Environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token: ZOHOCRMSDK.OAuthToken = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await UpdateNote.updateNote(BigInt("34770110"));
    }
}
UpdateNote.initializeAndCall();