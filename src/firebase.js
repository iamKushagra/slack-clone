// For Firebase JS SDK v7.20.0 and later, measurementId is optional'
import firebase from "firebase";
require('dotenv').config('../.env');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJ_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

if (!firebaseConfig.apiKey) throw new Error("Mising Firebase field: apiKey");
if (!firebaseConfig.authDomain) throw new Error("Mising Firebase field: authDomain");
if (!firebaseConfig.projectId) throw new Error("Mising Firebase field: projectId");
if (!firebaseConfig.storageBucket) throw new Error("Mising Firebase field: storageBucket");
if (!firebaseConfig.messagingSenderId) throw new Error("Mising Firebase field: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Mising Firebase field: appId");

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;