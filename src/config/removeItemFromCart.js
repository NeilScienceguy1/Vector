import app from "./firebase";
import { firestore } from "firebase";

const removeItem = (id) => {
  app
    .firestore()
    .collection("users")
    .doc(app.auth().currentUser.uid)
    .get()
    .then((ref) => {
      if (ref.exists) {
        console.log(ref.data().items.filter((item) => item.id !== id));
        app
          .firestore()
          .collection("users")
          .doc(app.auth().currentUser.uid)
          .update({
            items: ref.data().items.filter((item) => item.id !== id),
          })
          .catch((err) => console.log(err))
          .then(() => {
            app
              .firestore()
              .doc("users/" + app.auth().currentUser.uid)
              .get()
              .then((ref) => {
                localStorage.setItem("items", JSON.stringify(ref.data().items));
              });
          });
      }
    });
};

export default removeItem;
