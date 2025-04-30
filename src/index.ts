const HELP_COMMAND_ID = 1;
const SAVE_COMMAND_ID = 2;

/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {object} event The event object.
 * @param {object} event.message The message object.
 * @param {string} event.message.text The message text.
 * @param {object} event.message.slashCommand The slash command object.
 * @param {number} event.message.slashCommand.commandId The slash command ID.
 * @param {string} event.user User who sent the message.
 * @param {object} event.message.sender The sender object.
 * @param {string} event.message.sender.displayName The sender's display name.
 * @param {string} event.message.sender.avatarUrl The sender's avatar URL.
 * @returns {object} The response object.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onMessage(event: {
    message: {
        text: string;
        slashCommand?: { commandId: number };
        sender: { displayName: string; avatarUrl: string };
    };
    user: string;
}): object {
    console.log(event);
    if (event.message.slashCommand) {
        switch (event.message.slashCommand.commandId) {
            case HELP_COMMAND_ID:
                return {
                    privateMessageViewer: event.user,
                    text: 'To be implemented: An actually helpful Help text.',
                };
            case SAVE_COMMAND_ID:
                return {
                    privateMessageViewer: event.user,
                    text: 'To be implemented: Save the Chat history to Firebase.',
                };
        }
    }

    return {
        text: 'To be implemented: Return the result of having Gemini look through the Chat history.',
    };
}
