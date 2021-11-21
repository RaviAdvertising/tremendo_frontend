import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjtr5UbOtW_5hGVCNvVRPT_txoZlOAcPg",
  authDomain: "tremendodev.firebaseapp.com",
  databaseURL: "https://tremendodev-default-rtdb.firebaseio.com",
  projectId: "tremendodev",
  storageBucket: "tremendodev.appspot.com",
  messagingSenderId: "127773024099",
  appId: "1:127773024099:web:837a772c2791d2f310bd56"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
