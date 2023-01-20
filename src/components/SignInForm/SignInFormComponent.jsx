import { useState } from 'react';
import FormInput from '../FormInput/FormInputComponent';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/ButtonComponent';
import { SignInContainer, ButtonsContainer } from './SignInFormStyles.js';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/Firebase/FirebaseUtils';

// grouping the form fields into a single object(becos they are related to each other and use same logic) instead of individual states
const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
		//createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('No user associated with this email');
					break;
				default:
					console.log('Something went wrong');
			}
		}
	};
	//end of handleSubmit

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						buttonType={BUTTON_TYPE_CLASSES.google}
						type='button'
						onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
