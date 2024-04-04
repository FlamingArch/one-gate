import { create } from "zustand";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBGPGaQn5LHujUGIqm2qm0D4JUleXsGEN8",
  authDomain: "flamingarch-onegate.firebaseapp.com",
  projectId: "flamingarch-onegate",
  storageBucket: "flamingarch-onegate.appspot.com",
  messagingSenderId: "1091591924478",
  appId: "1:1091591924478:web:76c80d226a0ade2855d3af"
};

type AppStoreType = {
  firebaseApp: FirebaseApp,
  firebaseAuth: Auth
}

const app = initializeApp(firebaseConfig);

const useAppStore = create<AppStoreType>(set => ({
  firebaseApp: app,
  firebaseAuth: getAuth(app),
}))

export default useAppStore
