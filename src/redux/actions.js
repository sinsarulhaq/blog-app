import db, { auth, provider, storage } from "../firebsae";
import * as types from "./actionType";

const setUser = (user) => ({
  type: types.LOGIN_USER,
  payload: user,
});

const getArticle = (article) => ({
  type: types.GET_ARTICLE,
  payload: article,
});

export const LoginAPI = () => {
  return (dispatch) => {
    auth.signInWithPopup(provider).then((payload) => {
      dispatch(setUser(payload.user));
    });
  };
};

export const getAuthUser = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

export const postArticle = (payload) => {
  return (dispatch) => {
    const upload = storage
      .ref(`images/${payload.image.name}`)
      .put(payload.image);
    upload.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`progress: ${progress}%`);
        if (snapshot.state === "RUNNING") {
          console.log(`progress: ${progress}%`);
        }
      },
      (error) => console.log(error.code),
      async () => {
        const downloadURL = await upload.snapshot.ref.getDownloadURL();
        db.collection("posts").add({
          user: {
            email: payload.user.email,
            name: payload.user.displayName,
            photo: payload.user.photoURL,
            time: payload.timestamp,
          },
          image: downloadURL,
          title: payload.title,
          body: payload.body,
        });
      }
    );
  };
};

export const getPostArticle = () => {
    return (dispatch) => {
        db.collection("posts").onSnapshot((snapshot) => {
            const article = snapshot.docs.map((doc) => doc.data())
            // console.log(article);
            dispatch(getArticle(article))
        })
    }
}