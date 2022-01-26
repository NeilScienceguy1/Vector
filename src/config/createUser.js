import app from "./firebase";

const createUser = () => {
  return new Promise((resolve, reject) => {
    const user = app.auth().currentUser;
    const data = {
      displayName: user.displayName,
      email: user.email,
      items: [],
      profilePicture: user.photoURL,
      liked: [],
    };

    app
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(data)
      .catch((err) => console.log(err)).then(() => {
        resolve();
      })

  });
};

export default createUser;
