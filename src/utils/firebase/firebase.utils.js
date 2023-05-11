import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC3_5A0qb4upLQ1W41Hx7lgAL22c3XD3NM",
    authDomain: "crown-cloth-5be31.firebaseapp.com",
    projectId: "crown-cloth-5be31",
    storageBucket: "crown-cloth-5be31.appspot.com",
    messagingSenderId: "981796178078",
    appId: "1:981796178078:web:7cf1d5ae73fb068a53938f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
