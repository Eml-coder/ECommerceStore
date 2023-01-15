//created user document and stored data from google auth to firestore.
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

//store data frm google auth to firestore
export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	// console.log(userDocRef);
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
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	//if userSnapshot Data exists then return userDocRef
	return userDocRef;
};
//path: src\utils\Firebase\FirebaseUtils.js

/* Here is the explanation for the code above:
1. Firebase App Initialization
We need to initialize our Firebase App to be able to use it. To do so, we need to import initializeApp from the firebase/app module and pass our Firebase config object to it.

2. Firebase Sign-In with Google
We need to import GoogleAuthProvider from the firebase/auth module and instantiate it. Then, we need to call setCustomParameters on the provider object and pass the prompt property with value select_account to it.

3. Firebase Authentication
We need to import getAuth from the firebase/auth module and call it to get our Firebase Auth instance. After that, we need to import signInWithPopup from the firebase/auth module and pass our Firebase Auth instance and our GoogleAuthProvider object to it. This function will return a Promise that will resolve to the user's credential.

4. Firebase Firestore
We need to import getFirestore from the firebase/firestore module and call it to get our Firestore instance. After that, we need to import doc and setDoc from the firebase/firestore module and pass our Firestore instance and the path to our user collection to it. This function will return a DocumentReference object that we can use to set the user data in our Firestore database.

5. Storing User Data
We need to import getDoc from the firebase/firestore module and pass our Firestore instance and the path to our user collection to it. This function will return a DocumentReference object that we can use to set the user data in our Firestore database. */