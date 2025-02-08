import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

const PhoneNumberInput = ({
	name,
	labelName,
	validationRules = {},
	register,
	errors,
	setValue,
	trigger,
	watch,
	required,
}) => {
	const error = errors?.[name];

	const [selectedCountry, setSelectedCountry] =
		useState('ng');

	const handlePhoneChange = phone => {
		const formattedPhoneNumber = phone.startsWith('+')
			? phone
			: `+${phone}`;
		setValue(name, formattedPhoneNumber, {
			shouldValidate: true,
		});
		trigger(name);
	};

	const validateNumber = value => {
		const digitsOnly = value
			.replace(/^\+\d{1,4}/, '')
			.trim();

		if (!digitsOnly) return 'Phone number is required';

		return (
			/^\d{9}$/.test(digitsOnly) ||
			'Phone number must be 10 digits'
		);
	};

	return (
		<div>
			<label
				htmlFor={name}
				className={`text-sm ${
					required &&
					"after:content-['*'] after:ml-0.5 after:text-red-500"
				}`}
			>
				{labelName}
			</label>
			<div
				className={`border-2 rounded-xl px-1 focus-within:border-blue-500 w-full ${
					error ? 'border-red-500' : 'border-blue'
				}`}
			>
				<PhoneInput
					country={selectedCountry}
					value={watch(name)}
					onChange={handlePhoneChange}
					onCountryChange={country =>
						setSelectedCountry(country)
					}
					enableSearch
					// countryCodeEditable={false}
					inputProps={{
						name,
						ref: register(name, {
							required: 'Phone number is required',
							validate: validateNumber,
							...validationRules,
						}).ref,
					}}
					inputStyle={{
						width: '100%',
						border: 'none',
						outline: 'none',
						borderRadius: '8px',
					}}
					buttonStyle={{
						border: 'none',
						background: 'transparent',
            pointerEvents: 'all',
            outline: 'none',
					}}
				/>
			</div>
			{error && (
				<p className='text-red-500 text-sm'>
					{error.message}
				</p>
			)}
		</div>
	);
};

export default PhoneNumberInput;
