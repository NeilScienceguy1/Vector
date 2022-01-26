import app from "./firebase";
import data from "./products.json";

const addProducts = () => {
  const batch = app.firestore().batch();

  data.products.forEach((product) => {
    var docRef = app.firestore().collection("products").doc();
    batch.set(docRef, product);
  });

  batch.commit();
};

export default addProducts