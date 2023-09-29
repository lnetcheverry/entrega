import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA_DViLcMnAhx0Yc1JQeG6im9uKLo_oPoE",
  authDomain: "backendecommerce-515be.firebaseapp.com",
  projectId: "backendecommerce-515be",
  storageBucket: "backendecommerce-515be.appspot.com",
  messagingSenderId: "809886932867",
  appId: "1:809886932867:web:f6260ce0fe89a1122460b6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)