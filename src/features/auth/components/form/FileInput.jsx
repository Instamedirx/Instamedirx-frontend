import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { MdOutlineCloudUpload } from 'react-icons/md';

const FileInput = ({
	name,
	label,
	errors,
	control,
	value,
	required,
}) => {
	const [fileName, setFileName] = useState('');

	const handleFileChange = e => {
		const file = e.target.files[0];
		setFileName(file ? file.name : '');
		value(name, file);
	};

	return (
		<>
			<div className='flex gap-4'>
				<p className='block mb-1'>
					{label}
					{required && (
						<span className='text-red-500 ml-0.5'>*</span>
					)}
				</p>
				<label
					htmlFor={name}
					className={`w-56 border-2 text-gray-400 cursor-pointer rounded-2xl py-2 text-center flex flex-col ${
						errors ? 'border-red-500' : 'border-blue'
					}`}
				>
					<span>Click to upload file</span>
					<span className='flex justify-center items-start text-5xl'>
						<MdOutlineCloudUpload className='fill-gray-400' />
					</span>
					<span className='text-xs'>
						Accepted Format(doc,pdf,jpg,jpeg)
					</span>
					{fileName && (
						<span className='truncate text-xs mt-4'>
							{fileName}
						</span>
					)}
				</label>
				<Controller
					name={name}
					control={control}
					rules={{
						required: 'Document is required',
						validate: {
							fileSize: value =>
								!value ||
								value.size < 5 * 1024 * 1024 ||
								'File should be less than 5MB',
						},
					}}
					render={({ field }) => (
						<input
							type='file'
							className='hidden'
							id={name}
							accept='.doc, .docx, .pdf, .jpg, .jpeg'
							onChange={handleFileChange}
						/>
					)}
				/>
			</div>
				{errors && (
					<p className='text-red-500 text-sm mt-1'>
						{errors?.message}
					</p>
				)}
		</>
	);
};

export default FileInput;

{
	/* <div className='flex gap-4'>
	<label className='block mb-2 text-gray-700'>
		{label}
	</label>
	<input
		type='file'
		{...register(name, {
			validate: value =>
				value.length > 0 || 'File is required',
		})}
		className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-blue file:cursor-pointer'
	/>
</div>; */
}
