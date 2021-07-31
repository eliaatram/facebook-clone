import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB-hKBu9hSOqGZO_0PnrU5RKlz-h4EHF3M",
    authDomain: "fb-clone-5fed2.firebaseapp.com",
    projectId: "fb-clone-5fed2",
    storageBucket: "fb-clone-5fed2.appspot.com",
    messagingSenderId: "644392403899",
    appId: "1:644392403899:web:b7adf09e33dee20017fa9e"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider }
export default db;