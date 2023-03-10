import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAWu0MmKvZQb-SG15lCuonvFqQpbG9veQs",
    authDomain: "lab-firebase-315db.firebaseapp.com",
    projectId: "lab-firebase-315db",
    storageBucket: "lab-firebase-315db.appspot.com",
    messagingSenderId: "248453001120",
    appId: "1:248453001120:web:2ebb57cfafc5ab46aefec5",
    measurementId: "G-EPRYLZP7PJ"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }