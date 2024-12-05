import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Back, Button, Card } from '../../../components';
import { FileInput, FormInput } from '../components/form';
import {
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { MdOutlineCloudUpload } from 'react-icons/md';
import BackgroundColor from '../components/BackgroundColor';

const Qualifications = () => {
	const { accountType } = useParams();
	const navigate = useNavigate();
	const { state } = useLocation();

	const {
		register,
		handleSubmit,
		control,
		getValues,
		formState: { errors },
	} = useForm();

	const {
		fields: certifications,
		append: addCertification,
		remove: removeCertification,
	} = useFieldArray({
		control,
		name: 'certifications',
	});

	const {
		fields: degrees,
		append: addDegree,
		remove: removeDegree,
	} = useFieldArray({
		control,
		name: 'degrees',
	});

	useEffect(() => {
		console.log(certifications);
		console.log(degrees);
		console.log(state?.registrationData);
		if (
			certifications.length === 0 &&
			degrees.length === 0
		) {
			addCertification();
			addDegree();
		}
	}, [certifications.length, degrees.length]);

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<section className='min-h-screen flex items-center sm:justify-center px-6 lg:px-8 py-10 border border-red-500 relative'>
			<Card styles='w-3/4 pt-14 pb-8 px-7 w-full lg:w-5/6 sm:w-4/5 pt-3 px-7 pb-7 max-w-xl w-3/4 font-inria-serif'>
				<Back
					onClick={() => {
						navigate(
							`/signup/${accountType}/registration`,
							{
								state: {
									registrationData: state?.registrationData,
								},
							}
						);
					}}
				/>
				<h1 className='text-xl font-normal my-8'>
					{accountType === 'pharmacist'
						? 'Submit your qualifications(optional)'
						: 'Submit your qualifications'}
				</h1>

				{/* Certifications/Licenses Section */}
				<form onSubmit={handleSubmit(onSubmit)}>
					{certifications.map((certification, index) => (
						<div
							key={certification.id}
							className='mb-6'
						>
							<h2 className='text-base font-medium'>
								Certifications/Licenses
							</h2>
							<div className='mt-7 space-y-6'>
								<FormInput
									inputId={`certifications[${index}].title`}
									inputType='text'
									labelName='Title'
									errors={errors}
									register={register}
								/>
								<FormInput
									inputId={`certifications[${index}].licenseNumber`}
									inputType='text'
									labelName='License Number'
									errors={errors}
									register={register}
								/>
								<FormInput
									inputId={`certifications[${index}].issueDate`}
									inputType='date'
									labelName='Issue Date'
									placeholder='Select Date'
									errors={errors}
									register={register}
								/>
								<FormInput
									inputId={`certifications[${index}].expirationDate`}
									inputType='date'
									labelName='Expiration Date'
									placeholder='Select Date'
									errors={errors}
									register={register}
								/>
								<FileInput
									name={`certifications.${index}.document`}
									label='Upload Document'
									register={register}
									errors={errors}
								/>
							</div>
							{index > 0 && (
								<button
									type='button'
									onClick={() => removeCertification(index)}
									className='text-red-500 hover:underline'
								>
									Remove Certification
								</button>
							)}
						</div>
					))}
					<button
						onClick={() => addCertification({})}
						className='text-blue mb-6 text-sm font-semibold hover:underline'
					>
						+ Add more certifications
					</button>

					{/* Degrees/Diploma Section */}
					{degrees.map((degree, index) => (
						<div
							key={degree.id}
							className='mb-6'
						>
							<h2 className='text-lg font-medium'>
								Degrees/Diploma
							</h2>
							<div className='mt-4 space-y-6'>
								<FormInput
									inputId={`degrees[${index}].title`}
									inputType='text'
									labelName='Title'
									errors={errors}
									register={register}
								/>
								<FormInput
									inputId={`degrees[${index}].institution`}
									inputType='text'
									labelName='Institution'
									errors={errors}
									register={register}
								/>
								<FormInput
									inputId={`degrees[${index}].year`}
									inputType='text'
									labelName='Year'
									errors={errors}
									register={register}
								/>
								<FileInput
									name={`degrees.${index}.document`}
									label='Upload Document'
									register={register}
									errors={errors}
								/>
							</div>
						</div>
					))}
					<button
						onClick={addDegree}
						className='text-blue mb-6 text-sm hover:underline'
					>
						+ Add more degrees
					</button>

					{/* Agreement Checkbox */}
					<div className='mb-6'>
						<label className='flex items-center space-x-2'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-blue rounded'
							/>
							<span className='text-gray-700 text-sm'>
								I agree to the verification process.
							</span>
						</label>
					</div>

					{/* Submit Button */}
					<div className='text-center mt-16'>
						<Button
							styles=''
							size='m'
						>
							Submit
						</Button>
					</div>
				</form>
			</Card>
			<BackgroundColor />
		</section>
	);
};

export default Qualifications;
