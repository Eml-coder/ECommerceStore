import { useState } from 'react';
//import { async} from '@firebase/util'
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/Firebase/FirebaseUtils';

// grouping the form fields into a single object(becos they are related to each other and use same logic) instead of individual states
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			//setFormFields(defaultFormFields);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Email already in use');
			} else {
				console.log('error while creating user', error);
			}
		}
	};
	//end of handleSubmit

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign Up Form</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<label>Email</label>
				<input
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<label>Password</label>
				<input
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<label>Confirm Password</label>
				<input
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
