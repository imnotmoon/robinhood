import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDaDZ-_xpIJETuTpXWLuHqyGrsTfCmLc14",
    authDomain: "robinhood-64a9a.firebaseapp.com",
    projectId: "robinhood-64a9a",
    storageBucket: "robinhood-64a9a.appspot.com",
    messagingSenderId: "240015485090",
    appId: "1:240015485090:web:0e24885a24d7068ce1cffb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export { db }