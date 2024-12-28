import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { MdOutlineCloudUpload } from 'react-icons/md';
import FormInput from './FormInput';
import FileInput from './FileInput';

const CertificationForm = ({
	index,
	certification,
	registerElement,
	setValue,
	errors,
	remove,
	formControl,
}) => {
	// console.log(errors);
	return (
		<>
			<div
				key={certification.id}
				className='mb-6'
			>
				<h2 className='text-base font-medium'>
					Certifications/Licenses
				</h2>
				<div className='mt-7 space-y-6'>
					<FormInput
						name={`certifications.${index}.title`}
						inputType='text'
						labelName='Title'
						errorKey={`certifications.${index}.title`}
						errors={errors}
						register={registerElement}
						required
					/>
					<FormInput
						name={`certifications.${index}.licenseNumber`}
						inputType='text'
						labelName='License Number'
						errorKey={`certifications.${index}.licenseNumber`}
						errors={errors}
						register={registerElement}
						required
					/>
					<FormInput
						name={`certifications.${index}.issueDate`}
						inputType='date'
						labelName='Issue Date'
						placeholder='Select Date'
						errorKey={`certifications.${index}.issueDate`}
						errors={errors}
						register={registerElement}
						required
					/>
					<FormInput
						name={`certifications.${index}.expirationDate`}
						inputType='date'
						labelName='Expiration Date'
						placeholder='Select Date'
						errorKey={`certifications.${index}.expirationDate`}
						errors={errors}
						register={registerElement}
						required
					/>

					<FileInput
						name={`certifications.${index}.document`}
						label='Upload Document'
						register={registerElement}
						errors={
							errors?.certifications?.[index].document
						}
						value={setValue}
						control={formControl}
						required
					/>
				</div>
				{index > 0 && (
					<button
						type='button'
						onClick={() => remove(index)}
						className='text-red-500 hover:underline mt-6'
					>
						Remove Certification
					</button>
				)}
			</div>
		</>
	);
};

export default CertificationForm;
