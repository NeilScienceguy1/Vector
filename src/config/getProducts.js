import app from "./firebase";

function splitArrayIntoChunksOfLen(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

const getProducts = () => {
  return new Promise((resolve, reject) => {
    app
      .firestore()
      .collection("products")
      .get()
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.docs.forEach((doc) => {
          products.push({
            ...doc.data(),
            id:doc.id
          });
        });
        const productList = splitArrayIntoChunksOfLen(products, 4);
        resolve(productList)
      });
  });
};

export default getProducts;
