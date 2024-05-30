import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0A5BEardAHThcOdhyt_ZJ_C-JV4UffX4",
  authDomain: "galeria-4c6d9.firebaseapp.com",
  projectId: "galeria-4c6d9",
  storageBucket: "galeria-4c6d9.appspot.com",
  messagingSenderId: "1094494081057",
  appId: "1:1094494081057:web:f8d3535e2fc592a1675360",
};
console.log(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
