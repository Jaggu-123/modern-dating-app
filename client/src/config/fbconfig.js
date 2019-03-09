import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBZARAFhqT7CXDnEOSH0qhedoztXaEuyTA",
  authDomain: "moderndatingapp.firebaseapp.com",
  databaseURL: "https://moderndatingapp.firebaseio.com",
  projectId: "moderndatingapp",
  storageBucket: "moderndatingapp.appspot.com",
  messagingSenderId: "989148150506"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
//export default firebase.storage().ref();
