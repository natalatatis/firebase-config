import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRm5kOb0jHMCaNYY-_rM2Ul_5jYy8cg4s",
  authDomain: "auth-config-202a5.firebaseapp.com",
  projectId: "auth-config-202a5",
  storageBucket: "auth-config-202a5.appspot.com",
  messagingSenderId: "812894475710",
  appId: "1:812894475710:web:5cc34826c833b83e9655ef",
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);

//probando con otro proyecto de firebase pq no hay modo que me funcione
/*apiKey: "AIzaSyAlfJVYJgJ8ykAXH2bWc0KcW87HDOVy1zQ",
authDomain: "auth-config-c66e5.firebaseapp.com",
projectId: "auth-config-c66e5",
storageBucket: "auth-config-c66e5.firebasestorage.app",
messagingSenderId: "25269188961",
appId: "1:25269188961:web:269c5bbf2d6d8f2546ad20",*/
