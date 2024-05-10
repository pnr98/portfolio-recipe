import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApbWbTrm0yBQgsaKd-LXTS1GD61r8uPTg",
    authDomain: "my-recipe-f421e.firebaseapp.com",
    projectId: "my-recipe-f421e",
    storageBucket: "my-recipe-f421e.appspot.com",
    messagingSenderId: "51477939559",
    appId: "1:51477939559:web:789d972de146ac5cef1bc2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);