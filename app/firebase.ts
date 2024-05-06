// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASmYoukKKZpKjGnXF5Vtrj3iELE76_cjc",
  authDomain: "myapp-45bf8.firebaseapp.com",
  projectId: "myapp-45bf8",
  storageBucket: "myapp-45bf8.appspot.com",
  messagingSenderId: "100761237180",
  appId: "1:100761237180:web:fea1a0537ff11a18c682b9"
};

const apps = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(apps);
export { auth , apps};

