import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBBKgnVuWa21CAFHw4Gj-XJ_YS2hnXxbdU",
    authDomain: "marsbpoapp.firebaseapp.com",
    projectId: "marsbpoapp",
    storageBucket: "marsbpoapp.appspot.com",
    messagingSenderId: "363054034196",
    appId: "1:363054034196:web:52faa3aae6e0fd11106601",
    measurementId: "G-6161NWRD5Y"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);
