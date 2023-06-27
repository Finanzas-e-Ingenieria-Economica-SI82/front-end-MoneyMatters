import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configura la información de tu proyecto de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCf4JMwDPm2MjH5VCpHFUhwpuW_fca_1fk",
    authDomain: "moneymatters01-82fc7.firebaseapp.com",
    projectId: "moneymatters01-82fc7",
    storageBucket: "moneymatters01-82fc7.appspot.com",
    messagingSenderId: "60896521908",
    appId: "1:60896521908:web:a73ef8a7337c2acd9cb1e1",
    measurementId: "G-1W7VQG0YVG"
  };
// Inicializa tu aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export { db };