import React from 'react';

const Select = React.forwardRef(
	({ name, label, register, errors, required }, ref) => (
		<div className='flex flex-col gap-1.5'>
			<label htmlFor={name}>
				{label}
				{required && (
					<span className='text-red-500 ml-0.5'>*</span>
				)}
			</label>
			<select
				id={name}
				{...register(name, {
					required:
						required === true && `${label} is required`,
				})}
				className={`py-1 bg-transparent border-2 border-blue rounded-full px-2 w-2/3 outline-none text-sm text-center cursor-pointer ${
					errors[name] ? 'border-red-500' : 'border-blue'
				}`}
			>
				<option value=''>Select {label}</option>
				{/* {selectData.map(data => (
					<option></option>
				))} */}
			</select>
			{errors[name] && (
				<p className='text-red-500 text-sm mt-1'>
					{errors[name]?.message}
				</p>
			)}
		</div>
	)
);

export default Select;
