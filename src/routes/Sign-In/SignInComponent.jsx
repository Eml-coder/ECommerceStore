import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/Firebase/FirebaseUtils';

import SignUpForm from '../../components/SignUpForm/SignUpFormComponent';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In With Google Popup</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;

// Path: src\utils\Firebase\FirebaseUtils.js
