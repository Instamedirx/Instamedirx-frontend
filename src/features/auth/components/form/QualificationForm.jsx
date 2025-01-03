import React from 'react';
import FormInput from './FormInput';
import FileInput from './FileInput';

const QualificationForm = ({
	index,
	registerElement,
	setValue,
	errors,
	remove,
	formControl,
	type,
}) => {
	// console.log(errors);
	return (
		<>
			<div
				key={`${type}-${index}`}
				className='mb-6'
			>
				<h2 className='text-base font-medium'>
					{type === 'certification'
						? 'Certifications/Licenses'
						: 'Degrees/Diploma'}
				</h2>
				<div className='mt-7 space-y-6'>
					<FormInput
						name={
							type === 'certification'
								? `certifications.${index}.title`
								: `degrees.${index}.title`
						}
						inputType='text'
						labelName='Title'
						errorKey={
							type === 'certification'
								? `certifications.${index}.title`
								: `degrees.${index}.title`
						}
						errors={errors}
						register={registerElement}
						required
					/>
					<FormInput
						name={
							type === 'certification'
								? `certifications.${index}.licenseNumber`
								: `degrees.${index}.institution`
						}
						inputType='text'
						labelName={
							type === 'certification'
								? 'License Number'
								: 'Institution'
						}
						errorKey={
							type === 'certification'
								? `certifications.${index}.licenseNumber`
								: `degrees.${index}.institution`
						}
						errors={errors}
						register={registerElement}
						required
					/>
					{type === 'certification' ? (
						<>
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
						</>
					) : (
						<FormInput
							name={`degree.${index}.year`}
							inputType='text'
							labelName='Year'
							errorKey={`degree.${index}.year`}
							errors={errors}
							register={registerElement}
							required
						/>
					)}

					<FileInput
						name={
							type === 'certification'
								? `certifications.${index}.document`
								: `degrees.${index}.document`
						}
						label='Upload Document'
						register={registerElement}
						errors={
							type === 'certification'
								? errors?.certifications?.[index].document
								: errors?.degrees?.[index].document
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
						{type === 'certification'
							? 'Remove Certification'
							: 'Remove Degree'}
					</button>
				)}
			</div>
		</>
	);
};

export default QualificationForm;
