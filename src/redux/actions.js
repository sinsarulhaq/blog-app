import db, { auth, provider, storage } from "../firebsae";
import * as types from "./actionType";

const setUser = (user) => ({
  type: types.LOGIN_USER,
  payload: user,
});

export const setLoading = (status) => ({
  type: types.SET_LOADING,
  payload: status,
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

export const LogoutAPI = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(setUser(null));
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
    dispatch(setLoading(true));
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
        dispatch(setLoading(false));
      }
    );
  };
};

export const getPostArticle = () => {
  return (dispatch) => {
    db.collection("posts").onSnapshot((snapshot) => {
      const article = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(getArticle(article));
    });
  };
};
