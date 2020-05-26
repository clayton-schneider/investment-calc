import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmxfRUfdW6w_sxjIb1sRb3LXLkl6Xrpso",
    authDomain: "estate-tracker-dev.firebaseapp.com",
    databaseURL: "https://estate-tracker-dev.firebaseio.com",
    projectId: "estate-tracker-dev",
    storageBucket: "estate-tracker-dev.appspot.com",
    messagingSenderId: "787957486361",
    appId: "1:787957486361:web:f800b2ad52c222ba95ab88"
});

export default firebaseApp.firestore()