import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB_ihr9OdD5b8Y3q8GKWbNL1JjADATjdJs',
	authDomain: 'eml-clothing-db.firebaseapp.com',
	projectId: 'eml-clothing-db',
	storageBucket: 'eml-clothing-db.appspot.com',
	messagingSenderId: '875816561147',
	appId: '1:875816561147:web:238796ae60254a8392835e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
     prompt: 'select_account' 
    });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
