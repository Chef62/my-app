import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hi, how are you?", likes: "15" },
        { id: 1, message: "It's my first post", likes: "200" },
        { id: 2, message: "Haha", likes: "2000" },
        { id: 3, message: "Писец", likes: "2000" },
      ],
      newPostText: "tttttttt",
    },
    messagePage: {
      dialogs: [
        { id: 1, name: "1111" },
        { id: 2, name: "1111" },
        { id: 3, name: "1111" },
        { id: 4, name: "1111" },
        { id: 5, name: "1111" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Hi" },
        { id: 4, message: "Hi" },
        { id: 5, message: "Hi" },
      ],
      newMessageBody: "",
    },
  },

  _callSubscriber() {
    console.log("Statee change");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);

    this._callSubscriber(this.state);
  },
};

export default store;
window.store = store;
