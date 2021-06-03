const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likes: "15" },
    { id: 1, message: "It's my first post", likes: "200" },
    { id: 2, message: "Haha", likes: "2000" },
    { id: 3, message: "Писец", likes: "2000" },
  ],
  newPostText: "tttttttt",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";

      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;

      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});

export default profileReducer;
