import './FormInputStyles.scss';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className='group'>
			<input
				className='form-input'
				{...otherProps}
			/>
			{label && ( // if label is not null or undefined (i.e. if it exists then render the label)
				<label
					className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
