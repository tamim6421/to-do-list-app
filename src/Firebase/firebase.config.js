
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDs6PrERu_QN66MBQlIn-V6ATS1hs9tHaw",
  authDomain: "to-do-list-fc64a.firebaseapp.com",
  projectId: "to-do-list-fc64a",
  storageBucket: "to-do-list-fc64a.appspot.com",
  messagingSenderId: "232754710145",
  appId: "1:232754710145:web:070e37ad2ef72d524f2f80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);