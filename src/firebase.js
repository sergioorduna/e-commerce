import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrn5cFQXseXz0RQ8nWSxtppLTnIeyWscU",
  authDomain: "e-commerce-diademas.firebaseapp.com",
  projectId: "e-commerce-diademas",
  storageBucket: "e-commerce-diademas.appspot.com",
  messagingSenderId: "774363633909",
  appId: "1:774363633909:web:86497247d125b784498dbc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
