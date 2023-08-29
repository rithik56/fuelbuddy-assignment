import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBEktUamz7dJRr4EvoGK4cjmdhVrpJnSwE",
    authDomain: "fuelbuddy-assignment-e0325.firebaseapp.com",
    projectId: "fuelbuddy-assignment-e0325",
    storageBucket: "fuelbuddy-assignment-e0325.appspot.com",
    messagingSenderId: "386526887676",
    appId: "1:386526887676:web:8187838fda3181b3546179",
    measurementId: "G-EPY7RMNNJ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }