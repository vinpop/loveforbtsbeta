import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzf0c_Onkmagxff2SThyrq9G4BzIDToOk",
  authDomain: "love-letter-f44d9.firebaseapp.com",
  projectId: "love-letter-f44d9",
  storageBucket: "love-letter-f44d9.firebasestorage.app",
  messagingSenderId: "752356654986",
  appId: "1:752356654986:web:338bd0f9763cad049cd273"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
