import React from 'react';

const FormInput = ({
	labelName,
	inputType,
	inputId,
	register,
	errors,
}) => {
	return (
		<div className='flex flex-col gap-1.5'>
			<label htmlFor={inputId}>
				{labelName} <span className='text-red-500'>*</span>{' '}
			</label>
			<input
				type={inputType}
				id={inputId}
				className={`border-2 border-blue rounded-xl py-0.5 px-3 focus:outline-none ${
					errors[inputId] ? 'border-red-500' : 'border-blue'
				}`}
				{...register(inputId, {
					required: `${labelName} is required`,
					pattern:
						inputType === 'tel'
							? {
									value:
										'/^(+234|0)(7[0-9]|8[0-9]|9[0-9])[0-9]{7}$/',
									message: 'Invalid phone number format',
							  }
							: inputType === 'email'
							? {
									value: /^\S+@\S+$/i,
									message: 'Invalid email format',
							  }
							: undefined,
					minLength:
						inputType === 'password'
							? { value: 8, message: 'Minimum of 8 characters' }
							: undefined,
				})}
			/>
			{errors[inputId] && (
				<p className='text-red-500 text-sm'>
					{errors[inputId].message}
				</p>
			)}
		</div>
	);
};

export default FormInput;
