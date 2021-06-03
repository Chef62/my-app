import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/message-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messageReducer;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messageReducer={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
