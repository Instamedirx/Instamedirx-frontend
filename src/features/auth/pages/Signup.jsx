import React, { useEffect, useRef, useState } from 'react';
import {
	Form,
	useNavigate,
	useParams,
} from 'react-router-dom';

import { Back, Button, Card } from '../../../components';
import ClientImage from '../../../assets/client_signup_image.svg';
import { FormInput } from '../components/form';
import { useForm } from 'react-hook-form';

const Signup = () => {
	const { accountType } = useParams();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(`Form Data ${JSON.stringify(data)}`);
		accountType === 'client'
			? navigate(`/signup/${accountType}/verification`)
			: navigate(`/signup/${accountType}/registration`);
	};

	const accountTitles = {
		doctor: 'Doctor',
		client: 'Client',
		pharmacist: 'Pharmacist',
	};

	const clientPageStyles =
		accountType === 'client' && 'px-10 gap-8';

	return (
		<section
			className={`relative py-5 flex justify-center ${clientPageStyles}`}
		>
			<div className='max-w-3xl lg:w-1/2 sm:w-2/3 flex justify-center items-center'>
				<Card styles='lg:w-5/6 sm:w-4/5 pt-2 px-5 pb-7 font-inria-serif'>
					<Back />
					<div className='my-6 space-y-3.5'>
						<h1 className='text-3xl font-bold'>
							Register as a {accountTitles[accountType]}
						</h1>
						<p className='text-base'>
							Fill in the registration details requested
						</p>
					</div>
					<Form
						className='space-y-5'
						onSubmit={handleSubmit(onSubmit)}
					>
						<FormInput
							inputId='first_name'
							inputType='text'
							labelName='First Name'
							register={register}
							errors={errors}
						/>
						<FormInput
							inputId='last_name'
							inputType='text'
							labelName='Last Name'
							register={register}
							errors={errors}
						/>
						<FormInput
							inputId='email'
							inputType='email'
							labelName='Email Address'
							register={register}
							errors={errors}
						/>
						<FormInput
							inputId='phone'
							inputType='tel'
							labelName='Phone Number'
							register={register}
							errors={errors}
						/>
						<FormInput
							inputId='password'
							inputType='password'
							labelName='Password'
							register={register}
							errors={errors}
						/>
						<FormInput
							inputId='confirm_password'
							inputType='password'
							labelName='Confirm Password'
							register={register}
							errors={errors}
						/>
						<div className='text-center'>
							<Button
								size='m'
								styles='mt-4 font-inter'
								type='submit'
							>
								{accountType === 'client'
									? 'Submit'
									: 'Next'}
							</Button>
						</div>
					</Form>
				</Card>
			</div>
			{accountType === 'client' && (
				<div className='hidden md:flex md:w-1/2 flex-1 justify-center items-center'>
					<img
						src={ClientImage}
						alt=''
						width={500}
						height={500}
					/>
				</div>
			)}
			{accountType !== 'client' && (
				<>
					<div className='absolute bg-blue w-[200px] h-[200px] sm:w-[550px] sm:h-[500px] rounded-full bottom-0 lg:bottom-10 left-0 -z-20 blur-xl' />
					<div className='absolute bg-black w-[200px] h-[200px] sm:w-[550px] sm:h-[500px] sm:overflow-x-hidden rounded-full right-0 top-0 lg:-top-10 -z-20 blur-xl' />
				</>
			)}
		</section>
	);
};

export default Signup;
