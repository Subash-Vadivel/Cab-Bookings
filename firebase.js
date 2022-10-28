// Import the functions you need from the SDKs you need
// import fire from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';



import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyDz0OuhxDtWvT9XrxYXrY7E2XOo7UgE6Ww",
  authDomain: "drive-3d71e.firebaseapp.com",
  databaseURL: "https://drive-3d71e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "drive-3d71e",
  storageBucket: "drive-3d71e.appspot.com",
  messagingSenderId: "853529338505",
  appId: "1:853529338505:web:c0bc6c60f488f5afda5c58",
  measurementId: "G-W31M1YC0TQ"
};
let app;
if(firebase.apps.length===0)
{
   app=firebase.initializeApp(firebaseConfig);
}
else
{
    app=firebase.app();
}
export const db=app.firestore();
const auth=firebase.auth();

export {auth};
