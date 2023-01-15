// we have 3 different buttons in our app. so we will create reusable button component and pass the children as props. (default, google, inverted)
import './ButtonStyles.scss';

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
//path: src\components\Button\ButtonComponent.jsx
