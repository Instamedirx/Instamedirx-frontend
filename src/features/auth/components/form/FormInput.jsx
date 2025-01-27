import React from 'react';

const FormInput = ({
	labelName,
	inputType,
	name,
	placeholder,
	required,
	validationRules = {},
	register,
	errors,
	errorKey,
}) => {
	const error =
		errors?.[name] ||
		errorKey
			?.split('.')
			.reduce((acc, key) => acc?.[key], errors);
	return (
		<div className='flex flex-col gap-1.5'>
			<label
				htmlFor={name}
				className={`text-sm ${
					required && "after:content-['*'] after:ml-0.5 after:text-red-500"
				}`}
			>
				{labelName}
			</label>
			<input
				type={inputType}
				id={name}
				className={`border-2 border-blue rounded-xl py-0.5 px-3 focus:outline-none ${
					error ? 'border-red-500' : 'border-blue'
				}`}
				placeholder={placeholder}
				{...register(name, {
					required: required && `${labelName} is required`,
					...validationRules,
				})}
			/>
			{error && (
				<p className='text-red-500 text-sm'>
					{error.message}
				</p>
			)}
		</div>
	);
};

export default FormInput;
