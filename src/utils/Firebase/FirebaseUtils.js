//created user document and stored data from google auth to firestore.
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//store data frm google auth to firestore
export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	//protection layer
	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	//if userSnapshot Data does not exits, create it in d database
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	//if userSnapshot Data exists then return userDocRef
	return userDocRef;
};
// protecting code incase somthing goes wrong/changes with google firebase setup.
//will only need to change code in this file and not in other files(imported in signupformcomponent).
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

//path: src\utils\Firebase\FirebaseUtils.js
