import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyC939rReIIQfN9E_AD9GBISG962kFgZotc",
  authDomain: "apiproject-c7e7a.firebaseapp.com",
  databaseURL: "https://apiproject-c7e7a-default-rtdb.firebaseio.com",
  projectId: "apiproject-c7e7a",
  storageBucket: "apiproject-c7e7a.appspot.com",
  messagingSenderId: "466752874949",
  appId: "1:466752874949:web:56fee1bdc3c44361f1c3ac",
};

// Inicialización de Firebase
firebase.initializeApp(firebaseConfig);

// Exportación de la instancia de la base de datos de Firebase
const database = firebase.database();

export default database;
