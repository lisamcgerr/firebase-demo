import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBnIJeEhy18x9MeejKfMvqoUjgwp4eLVQ",
    authDomain: "firestore-demo-dbc9d.firebaseapp.com",
    projectId: "firestore-demo-dbc9d",
    storageBucket: "firestore-demo-dbc9d.appspot.com",
    messagingSenderId: "735117378205",
    appId: "1:735117378205:web:06227f6394cc11bbd70a74"
}

firebase.initializeApp(firebaseConfig)

export default firebase

