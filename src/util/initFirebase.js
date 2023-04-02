import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgPdngjB7-3EkCEwddkQTiPRcVY-4fqBM",
  authDomain: "bucket-list-32426.firebaseapp.com",
  databaseURL: "https://bucket-list-32426-default-rtdb.firebaseio.com/",
  projectId: "bucket-list-32426",
  storageBucket: "bucket-list-32426.appspot.com",
  messagingSenderId: "243516391995",
  appId: "1:243516391995:web:cacd0aa888eb0c5aa9d21e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
export const auth = getAuth(app);
