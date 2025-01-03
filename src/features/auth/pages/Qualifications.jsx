import {
	FormProvider,
	useFieldArray,
	useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Back, Button, Card } from '../../../components';
import BackgroundColor from '../components/BackgroundColor';
import {
	addCertification,
	addDegree,
} from '../../../app/features/signupSlice';
import QualificationForm from '../components/form/QualificationForm';

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
		watch,
		setValue,
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
		console.log(data.degree);
		const certifications = await Promise.all(
			data.certifications.map(async certification => {
				const base64Document =
					certification.document instanceof File
						? await convertFileToBase64(
								certification.document
						)
						: certification.document;
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
				const base64Document =
					degree.document instanceof File
						? await convertFileToBase64(degree.document)
						: degree.document;
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
								<QualificationForm
									key={certification.id}
									index={index}
									type='certification'
									registerElement={register}
									setValue={setValue}
									errors={errors}
									remove={removeCertification}
									formControl={control}
								/>
							)
						)}
						<button
							type='button'
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

						{degreeFields.map((degree, index) => (
							<QualificationForm
								key={degree.id}
								index={index}
								type='degree'
								registerElement={register}
								setValue={setValue}
								errors={errors}
								remove={removeDegree}
								formControl={control}
							/>
						))}
						<button
							type='button'
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
