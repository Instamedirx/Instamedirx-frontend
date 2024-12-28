import { useEffect, useState } from 'react';
import {
	FormProvider,
	useFieldArray,
	useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Back, Button, Card } from '../../../components';
import { FileInput, FormInput } from '../components/form';
import BackgroundColor from '../components/BackgroundColor';
import {
	addCertification,
	addDegree,
	removeCertification,
	removeDegree,
	setQualifications,
} from '../../../app/features/signupSlice';

const Qualifications = () => {
	const methods = useForm({
		defaultValues: {
			certifications: [
				{
					title: '',
					licenseNumber: '',
					issueDate: '',
					expirationDate: '',
					document: '',
				},
			],
			degrees: [
				{
					title: '',
					institution: '',
					year: '',
					document: '',
				},
			],
		},
	});

	const { accountType } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = methods;

	const {
		fields: certificationFields,
		append: appendCertification,
		remove: removeCertification,
	} = useFieldArray({
		control,
		name: 'certifications',
	});

	const {
		fields: degreeFields,
		append: appendDegree,
		remove: removeDegree,
	} = useFieldArray({
		control,
		name: 'degrees',
	});

	const agreeToVerification = watch(
		'agreeToVerification',
		false
	);

	const convertFileToBase64 = file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	};

	const onSubmit = async data => {
		console.log(data);
		const certifications = await Promise.all(
			data.certifications.map(async certification => {
				const base64Document = await convertFileToBase64(
					certification.document[0]
				);
				return {
					...certification,
					document: base64Document,
				};
			})
		);
		certifications.forEach(certification =>
			dispatch(addCertification(certification))
		);

		const degrees = await Promise.all(
			data.degrees.map(async degree => {
				const base64Document = await convertFileToBase64(
					degree.document[0]
				);
				return {
					...degree,
					document: base64Document,
				};
			})
		);
		degrees.forEach(degree => dispatch(addDegree(degree)));
	};

	return (
		<section className='min-h-screen flex items-center sm:justify-center px-6 lg:px-8 py-10 border border-red-500 relative'>
			<Card styles='w-3/4 pt-14 pb-8 px-7 w-full lg:w-5/6 sm:w-4/5 pt-3 px-7 pb-7 max-w-xl w-3/4 font-inria-serif'>
				<Back
					onClick={() => {
						navigate(`/signup/${accountType}/registration`);
					}}
				/>
				<h1 className='text-xl font-normal my-8'>
					{accountType === 'pharmacist'
						? 'Submit your qualifications(optional)'
						: 'Submit your qualifications'}
				</h1>

				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						{certificationFields.map(
							(certification, index) => (
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
											onClick={() =>
												removeCertification(index)
											}
											className='text-red-500 hover:underline mt-6'
										>
											Remove Certification
										</button>
									)}
								</div>
							)
						)}
						<button
							onClick={() =>
								appendCertification({
									title: '',
									licenseNumber: '',
									issueDate: '',
									expirationDate: '',
									document: null,
								})
							}
							className='text-blue mb-6 text-sm font-semibold hover:underline'
						>
							+ Add more certifications
						</button>

						{/* Degrees/Diploma Section */}
						{degreeFields.map((degree, index) => (
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
								{index > 0 && (
									<button
										type='button'
										onClick={() => removeDegree(index)}
										className='text-red-500 hover:underline mt-6'
									>
										Remove Degree
									</button>
								)}
							</div>
						))}
						<button
							onClick={() =>
								appendDegree({
									title: '',
									institution: '',
									year: '',
									document: null,
								})
							}
							className='text-blue mb-6 text-sm font-semibold hover:underline'
						>
							+ Add more degrees
						</button>

						{/* Agreement Checkbox */}
						<div className='mb-6'>
							<label className='flex items-center space-x-2'>
								<input
									type='checkbox'
									className='form-checkbox h-5 w-5 text-blue rounded'
									{...register('agreeToVerification')}
								/>
								<span className='text-gray-700 text-sm'>
									I agree to the verification process.
								</span>
							</label>
						</div>

						{/* Submit Button */}
						<div className='text-center mt-16'>
							<Button
								size='m'
								disabled={!agreeToVerification}
								type='submit'
								styles='max-w-[300px]'
								onclick={onSubmit}
							>
								Submit
							</Button>
						</div>
					</form>
				</FormProvider>
			</Card>
			<BackgroundColor />
		</section>
	);
};

export default Qualifications;
