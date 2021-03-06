const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "1111" },
    { id: 2, name: "1111" },
    { id: 3, name: "1111" },
    { id: 4, name: "1111" },
    { id: 5, name: "1111" },
    { id: 6, name: "33333" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Hi" },
  ],
  newMessageBody: "",
};

const messageReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messageReducer;
