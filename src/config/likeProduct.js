import { firestore } from "firebase";
import app from "./firebase";

export const likeProduct = (id) => {
  app
    .firestore()
    .collection("users")
    .doc(app.auth().currentUser.uid)
    .update({
      liked: firestore.FieldValue.arrayUnion(id),
    })
    .then(() => {
      app
        .firestore()
        .doc("users/" + app.auth().currentUser.uid)
        .get()
        .then((ref) => {
          localStorage.setItem("liked", JSON.stringify(ref.data().liked));
        });
    });
};

export const unlikeProduct = (id) => {
  app
    .firestore()
    .collection("users")
    .doc(app.auth().currentUser.uid)
    .update({
      liked: firestore.FieldValue.arrayRemove(id),
    })
    .then(() => {
      app
        .firestore()
        .doc("users/" + app.auth().currentUser.uid)
        .get()
        .then((ref) => {
          localStorage.setItem("liked", JSON.stringify(ref.data().liked));
        });
    });
};
