
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxxjAkhL8OiXxHwlda1eTBcoUa_VstBto",
  authDomain: "anikchat1.firebaseapp.com",
  projectId: "anikchat1",
  storageBucket: "anikchat1.appspot.com",
  messagingSenderId: "5713654185",
  appId: "1:5713654185:web:290874c7f9257a1a2594b8"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAjPxkSw3UBPEA7vVtIzZx3dY5kf8uEUPU",
//     authDomain: "chat-73b12.firebaseapp.com",
//     projectId: "chat-73b12",
//     storageBucket: "chat-73b12.appspot.com",
//     messagingSenderId: "408832038041",
//     appId: "1:408832038041:web:25d101177828ae44189408"
//   };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);