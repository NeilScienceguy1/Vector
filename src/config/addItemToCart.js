import { firestore } from "firebase";
import app from "./firebase";

const addProduct = (id) => {
  app
    .firestore()
    .collection("users")
    .doc(app.auth().currentUser.uid)
    .get()
    .then((ref) => {
      const doc = ref.data();
      const itemQ =
        doc.items.length > 0
          ? doc.items.find((item) => item.id === id)
            ? doc.items.find((item) => item.id === id).quantity
            : 0
          : 0;
      const quantity = itemQ + 1;
      addProductToCart(
        id,
        quantity,
        doc,
        doc.items.find((item) => item.id === id)
      );
    });
};

const addProductToCart = (id, quantity, doc, exists) => {
  if (exists) {
    app
      .firestore()
      .collection("users")
      .doc(app.auth().currentUser.uid)
      .update({
        items: doc.items.filter((pr) => pr.id !== id),
      });
  }
  app.firestore().collection("products").doc(id).get().then(ref => {
    app
      .firestore()
      .collection("users")
      .doc(app.auth().currentUser.uid)
      .update({
        items: firestore.FieldValue.arrayUnion({
          id: id,
          quantity: quantity,
          title: ref.data().name,
          price:ref.data().originalPrice,
          inStock: ref.data().inStock,
          image: ref.data().picture
        }),
      }).then(() => {
        app.firestore().doc("users/"+app.auth().currentUser.uid).get().then(ref => {
          localStorage.setItem("items", JSON.stringify(ref.data().items));
        })
      })
    
    
  })
  
};

export default addProduct;
