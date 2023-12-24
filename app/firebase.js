import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDYvJPgjVP-2JKdQbctRl_0XZ7k55FEGWI",
  authDomain: "intellifyauth.firebaseapp.com",
  projectId: "intellifyauth",
  storageBucket: "intellifyauth.appspot.com",
  messagingSenderId: "876780327353",
  appId: "1:876780327353:web:3a401cfd9f11d3868ae668",
  measurementId: "G-9V0TM31SF3",
  databaseURL: "https://intellifyauth-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;