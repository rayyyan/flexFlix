import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBO6bjdc-jvuVANayoEO34ZfWTaMaIhUgg",
  authDomain: "flixflex-7804f.firebaseapp.com",
  projectId: "flixflex-7804f",
  storageBucket: "flixflex-7804f.appspot.com",
  messagingSenderId: "40829040274",
  appId: "1:40829040274:web:42dd2eee7ad07aa6ead84b",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const database = getFirestore()
export { auth, app }
