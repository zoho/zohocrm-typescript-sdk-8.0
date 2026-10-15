import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";
export class GetNote {
    public static async getNote(noteId: bigint) {
        //example
        //let noteId = 3409643549003n
        let notesOperations: ZOHOCRMSDK.Notes.NotesOperations = new ZOHOCRMSDK.Notes.NotesOperations();
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get Note */
        // await paramInstance.add(ZOHOCRMSDK.Notes.GetNoteParam.FIELDS, "id,Note_Content")
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();
        /* Possible headers for Get Note */
        await headerInstance.add(ZOHOCRMSDK.Notes.GetNotesHeader.IF_MODIFIED_SINCE, new Date("2019-06-01T00:00:00+05:30"));
        //Call getNote method that takes noteId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notes.ResponseHandler.MasterModel> = await notesOperations.getNote(noteId, paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject: ZOHOCRMSDK.Notes.ResponseHandler.MasterModel = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notes.ResponseWrapper) {
                    let notes: ZOHOCRMSDK.Notes.Note[] = responseObject.getData();
                    notes.forEach(note => {
                        let owner: ZOHOCRMSDK.Users.MinifiedUser = note.getOwner();
                        if (owner != null && owner !== undefined) {
                            console.log("Note Owner User-Name: " + owner.getName());
                            console.log("Note Owner User-ID: " + owner.getId());
                            console.log("Note Owner Email: " + owner.getEmail());
                        }
                        console.log("Note ModifiedTime: " + note.getModifiedTime());
                        let attachments: ZOHOCRMSDK.Attachments.Attachment[] = note.getAttachments();
                        if (attachments != null && attachments != undefined) {
                            attachments.forEach(attachment => {
                                this.printAttachment(attachment);
                            });
                        }
                        console.log("Note CreatedTime: " + note.getCreatedTime());
                        let parentId: ZOHOCRMSDK.Notes.ParentId = note.getParentId();
                        if (parentId != null && parentId != undefined) {
                            console.log("Note parent record Name: " + parentId.getName())
                            console.log("Note parent record ID: " + parentId.getId());
                        }
                        console.log("Note Editable: " + note.getEditable());
                        console.log("Note IsSharedToClient: " + note.getIsSharedToClient());
                        let modifiedBy: ZOHOCRMSDK.Users.MinifiedUser = note.getModifiedBy();
                        if (modifiedBy != null && modifiedBy != undefined) {
                            console.log("Note Modified By User-Name: " + modifiedBy.getName());
                            console.log("Note Modified By User-ID: " + modifiedBy.getId());
                            console.log("Note Modified By User-Email: " + modifiedBy.getEmail());
                        }
                        console.log("Note Size: " + note.getSize());
                        console.log("Note State: " + note.getState());
                        console.log("Note VoiceNote: " + note.getVoiceNote());
                        console.log("Note Id: " + note.getId());
                        let createdBy: ZOHOCRMSDK.Users.MinifiedUser = note.getCreatedBy();
                        if (createdBy != null && createdBy != undefined) {
                            console.log("Note Created By User-Name: " + createdBy.getName());
                            console.log("Note Created By User-ID: " + createdBy.getId());
                            console.log("Note Created By User-Email: " + createdBy.getEmail());
                        }
                        console.log("Note NoteTitle: " + note.getNoteTitle());
                        console.log("Note NoteContent: " + note.getNoteContent());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Notes.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
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
    private static async printAttachment(attachment: ZOHOCRMSDK.Attachments.Attachment) {
        let owner: ZOHOCRMSDK.Users.MinifiedUser = attachment.getOwner();
        if (owner != null) {
            console.log("Note Attachment Owner User-Name: " + owner.getName());
            console.log("Note Attachment Owner User-ID: " + owner.getId());
            console.log("Note Attachment Owner User-Email: " + owner.getEmail());
        }
        console.log("Note Attachment Modified Time: " + attachment.getModifiedTime().toString());
        console.log("Note Attachment File Name: " + attachment.getFileName());
        console.log("Note Attachment Created Time: " + attachment.getCreatedTime().toString());
        console.log("Note Attachment File Size: " + attachment.getSize().toString());
        let parentId: ZOHOCRMSDK.Attachments.ParentId = attachment.getParentId();
        if (parentId != null) {
            console.log("Note Attachment parent record Name: " + parentId.getName());
            console.log("Note Attachment parent record ID: " + parentId.getId());
        }
        console.log("Note Attachment is Editable: " + attachment.getEditable().toString());
        console.log("Note Attachment File ID: " + attachment.getFileId());
        console.log("Note Attachment File Type: " + attachment.getType());
        console.log("Note Attachment seModule: " + attachment.getSeModule());
        let modifiedBy: ZOHOCRMSDK.Users.MinifiedUser = attachment.getModifiedBy();
        if (modifiedBy != null) {
            console.log("Note Attachment Modified By User-Name: " + modifiedBy.getName());
            console.log("Note Attachment Modified By User-ID: " + modifiedBy.getId());
            console.log("Note Attachment Modified By User-Email: " + modifiedBy.getEmail());
        }
        console.log("Note Attachment State: " + attachment.getState());
        console.log("Note Attachment ID: " + attachment.getId());
        let createdBy: ZOHOCRMSDK.Users.MinifiedUser = attachment.getCreatedBy();
        if (createdBy != null) {
            console.log("Note Attachment Created By User-Name: " + createdBy.getName());
            console.log("Note Attachment Created By User-ID: " + createdBy.getId());
            console.log("Note Attachment Created By User-Email: " + createdBy.getEmail());
        }
        console.log("Note Attachment LinkUrl: " + attachment.getLinkUrl());
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
        await GetNote.getNote(BigInt("34770315001"));
    }
}
GetNote.initializeAndCall();