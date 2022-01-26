import React from "react";
import app from "../config/firebase";
import firebase, { auth } from "firebase";
import createUser from "../config/createUser";

const Login = () => {
  if (localStorage.getItem("user")) {
    window.location.href = "/";
  }
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    app
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        app
          .firestore()
          .collection("users")
          .doc(app.auth().currentUser.uid)
          .get()
          .then((docRef) => {
            if (docRef.exists) {
              localStorage.setItem(
                "user",
                JSON.stringify({
                  displayName: auth().currentUser.displayName,
                  email: auth().currentUser.email,
                  profilePicture: auth().currentUser.photoURL,
                  id: docRef.id,
                })
              );
              localStorage.setItem(
                "items",
                JSON.stringify(docRef.data().items)
              );
              localStorage.setItem(
                "liked",
                JSON.stringify(docRef.data().liked)
              );
              window.location.href = "/";
            } else {
              createUser().then(() => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    displayName: auth().currentUser.displayName,
                    email: auth().currentUser.email,
                    profilePicture: auth().currentUser.photoURL,
                    id: auth().currentUser.uid,
                  })
                );
                localStorage.setItem("items", JSON.stringify([]));
                localStorage.setItem("liked", JSON.stringify([]));
                window.location.href = "/";
              });
            }
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 login-div">
      <header class="max-w-lg mx-auto">
        <a href="/">
          <h1 class="text-4xl font-bold text-white text-center">Vector</h1>
        </a>
      </header>

      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 class="font-bold text-2xl">Welcome to Vector</h3>
          <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
          <form class="flex flex-col">
            <div class="mb-6 pt-3 rounded">
              <button
                class="bg-blue-600 px-20 py-6 font-semibold text-white inline-flex items-center space-x-2 rounded"
                onClick={(e) => handleGoogleSignIn(e)}
              >
                <i className="bx bxl-google text-3xl"></i>
                <span>Sign In With Google</span>
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
