import SignUpForm from '../../components/SignUpForm/SignUpFormComponent';
import SignInForm from '../../components/SignInForm/SignInFormComponent';
import './AuthenticationStyles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;

// Path: src\utils\Firebase\FirebaseUtils.js
