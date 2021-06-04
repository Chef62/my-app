import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return { messageReducer: state.messageReducer };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(updateNewMessageBodyCreator());
    },
    sendMessage: (body) => {
      dispatch(sendMessageCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
