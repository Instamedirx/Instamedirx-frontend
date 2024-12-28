import { useEffect, useState } from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { Button, Card } from '../../../components';
import { FormInput, Select } from '../components/form';
import { useForm } from 'react-hook-form';
import { specializations } from '../../../utils/data';
import BackgroundColor from '../components/BackgroundColor';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../app/store';
import { setRegistrationDetails } from '../../../app/features/signupSlice';

const RegistrationDetails = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { selectedAccountType, registrationDetails } =
		useSelector(state => state.signup);

	const [ethnicity, setEthnicity] = useState('');
	const [languages, setLanguages] = useState([]);

	const [
		selectedSpecialization,
		setSelectedSpecialization,
	] = useState(registrationDetails.specialization || null);

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		// fill up form details with previously populated data if the back button on the qualifications page is clicked
		if (registrationDetails) {
			Object.keys(registrationDetails).forEach(key => {
				console.log(key, registrationDetails[key]);
				setValue(key, registrationDetails[key]);
			});
			if (registrationDetails.specialization) {
				setSelectedSpecialization(
					registrationDetails.specialization
				);
			}
		}
	}, [registrationDetails, setValue]);

	const onSubmit = data => {
		if (
			selectedAccountType === 'doctor' &&
			!selectedSpecialization
		) {
			setError('specialization', {
				type: 'manual',
				message: 'Specialization is required',
			});
			return;
		}

		const formData = {
			...data,
			...(selectedAccountType === 'doctor' && {
				specialization: selectedSpecialization,
			}),
		};

		dispatch(setRegistrationDetails(formData));
		console.log(setRegistrationDetails(formData));

		const updatedState =
			store.getState().signup.registrationDetails;
		console.log('formData: ', updatedState);

		navigate(
			`/signup/${selectedAccountType}/qualification`
		);
	};

	return (
		<section className='min-h-screen flex items-center sm:justify-center px-6 lg:px-8 py-10 border border-red-500 relative'>
			<Card styles='max-w-3xl w-3/4 pt-14 pb-8 px-7 w-full'>
				<div className='mb-10 space-y-2'>
					<h1 className='text-2xl font-semibold text-gray-800'>
						Registration details
					</h1>
					<p className='text-gray-500 text-sm'>
						Fill in the registration details requested
					</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-col sm:grid sm:grid-cols-2 gap-6 justify-between'>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'pharmacy_name'
									: 'hospital_name'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'Pharmacy Name'
									: 'Clinic/Hospital Name(optional)'
							}
							errors={errors}
							register={register}
						/>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'pharmacy_address'
									: 'hospital_address'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'Pharmacy Address'
									: 'Clinic/Hospital Address(optional)'
							}
							errors={errors}
							register={register}
						/>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'city'
									: 'zip_code'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'City'
									: 'Zip Code'
							}
							errors={errors}
							register={register}
							required={
								selectedAccountType === 'pharmacist'
									? false
									: true
							}
						/>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'zip_code'
									: 'city'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'Zip Code'
									: 'City'
							}
							errors={errors}
							register={register}
							required={
								selectedAccountType === 'pharmacist'
									? false
									: true
							}
						/>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'state'
									: 'country'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'State/Province'
									: 'Country'
							}
							errors={errors}
							register={register}
							required={
								selectedAccountType === 'pharmacist'
									? false
									: true
							}
						/>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'country'
									: 'state'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'Country'
									: 'State/Province'
							}
							errors={errors}
							register={register}
							required={
								selectedAccountType === 'pharmacist'
									? false
									: true
							}
						/>

						{/* TODO: Create the select inputs for ethnicity and spoken languages */}
						<Select
							name='ethnicity'
							label='Ethnicity'
							register={register}
							errors={errors}
							// required={
							// 	selectedAccountType === 'pharmacist' ? false : true
							// }
						/>
						<Select
							name='spoken_languages'
							label='Spoken Languages'
							register={register}
							// required={
							// 	selectedAccountType === 'pharmacist' ? false : true
							// }
							errors={errors}
						/>

						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'years_of_experience'
									: 'license_number'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'Years of Experience'
									: 'Medical License Number'
							}
							errors={errors}
							register={register}
						/>
						<FormInput
							name={
								selectedAccountType === 'pharmacist'
									? 'license_number'
									: 'years_of_experience'
							}
							inputType='text'
							labelName={
								selectedAccountType === 'pharmacist'
									? 'Pharmacy License Number'
									: 'Years of Experience'
							}
							errors={errors}
							register={register}
						/>
					</div>

					{selectedAccountType !== 'pharmacist' && (
						<div className={`my-12 space-y-8`}>
							<p
								className={`${
									errors.specialization && 'text-red-500'
								}`}
							>
								Specialization
								<span className='text-red-500'>*</span>
							</p>

							<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8'>
								{specializations.map(specialization => (
									<div
										key={specialization}
										className={`text-center rounded-full py-0.5 hover:bg-light-blue hover:text-white hover:border-none hover:py-0.5 cursor-pointer ${
											selectedSpecialization ===
											specialization
												? 'border-none bg-blue text-white'
												: 'border-2 border-blue'
										}`}
										// {...register('specialization', {
										// 	required: {
										// 		value: true,
										// 		message:
										// 			'Specialization is required',
										// 	},
										// })}
										onClick={e => {
											setSelectedSpecialization(
												specialization
											);
											clearErrors('specialization');
										}}
									>
										{specialization}
									</div>
								))}
							</div>
							{errors.specialization && (
								<p className='text-red-500'>
									{errors.specialization.message}
								</p>
							)}
						</div>
					)}

					<div className='flex justify-between gap-12 xs:gap-0 xs:px-12 mt-6 font-inter'>
						<Button
							type='button'
							onClick={() => navigate('/logout')}
							styles='max-w-[120px]'
						>
							Log out
						</Button>
						<Button
							type='submit'
							styles='max-w-[120px]'
						>
							Next
						</Button>
					</div>
				</form>
			</Card>
			<BackgroundColor />
		</section>
	);
};

export default RegistrationDetails;
