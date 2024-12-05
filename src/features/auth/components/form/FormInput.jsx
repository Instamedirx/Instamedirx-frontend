import React from 'react';

const FormInput = ({
	labelName,
	inputType,
	inputId,
	placeholder,
	required,
	validationRules = {},
	register,
	errors,
	handleChange,
}) => {
	return (
		<div className='flex flex-col gap-1.5'>
			<label
				htmlFor={inputId}
				className='text-sm'
			>
				{labelName}
				{required && (
					<span className='text-red-500 ml-0.5'>*</span>
				)}
			</label>
			<input
				type={inputType}
				id={inputId}
				onChange={handleChange}
				className={`border-2 border-blue rounded-xl py-0.5 px-3 focus:outline-none ${
					errors[inputId] ? 'border-red-500' : 'border-blue'
				}`}
				placeholder={placeholder}
				{...register(inputId, {
					required: required && `${labelName} is required`,
					...validationRules,
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
