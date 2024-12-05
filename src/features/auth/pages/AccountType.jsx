import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Back, Card } from '../../../components';
import Logo from '../../../assets/logo.svg';
import SideImage from '../../../assets/account_selection/side_image.svg';
import Client from '../../../assets/account_selection/client.svg';
import Doctor from '../../../assets/account_selection/doctor.svg';
import Pharmacist from '../../../assets/account_selection/pharmacist.svg';

const AccountType = () => {
	const accountTypes = [
		{
			image: Client,
			route: '/signup/client',
			name: 'Client',
		},
		{
			image: Doctor,
			route: '/signup/doctor',
			name: 'Doctor',
		},
		{
			image: Pharmacist,
			route: '/signup/pharmacist',
			name: 'Pharmacist',
		},
	];

	const [selectedType, setSelectedType] = useState('');
	const navigate = useNavigate();

	const handleClick = type => {
		setSelectedType(type.name);
		navigate(type.route);
	};

	return (
		<div className='min-h-screen flex flex-col justify-center items-center lg:flex-row gap-8 px-0 sm:px-6 lg:px-6'>
			<div className='w-full md:w-5/6 lg:w-1/2 p-6'>
				<div className='flex justify-center xs:justify-normal xs:space-x-36 mb-4 md:mb-8'>
					<Back styles='hidden xs:flex xs:text-xl' />
					<img
						src={Logo}
						alt='Logo'
						className='xs:w-16'
					/>
				</div>
				<div className='space-y-4'>
					<h1 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-2'>
						Account Type
					</h1>
					<p className='text-gray-500'>
						Select preferred account type
					</p>
				</div>

				<div className='my-14 grid grid-cols-2 lg:flex max-w-2xl md:gap-8 md:justify-center place-items-center gap-y-8 gap-x-6'>
					{accountTypes.map((accountType, index) => (
						<div
							key={index}
							onClick={() => handleClick(accountType)}
							className={`flex flex-col gap-4 justify-center items-center w-full max-w-[200px] py-6 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] rounded-3xl bg-[#FFFCFC] cursor-pointer transition duration-300 ${
								selectedType === accountType.name
									? 'bg-blue-100 shadow-md'
									: 'bg-blue-50 hover:shadow-md hover:bg-blue-100'
							} ${
								index === accountTypes.length - 1 &&
								accountTypes.length % 2 !== 0
									? 'col-span-2 mx-auto lg:mx-0'
									: ''
							}`}
							aria-label={`Select ${accountType.name} Account Type`}
						>
							<div className='bg-blue relative w-24 h-24 rounded-full'>
								<img
									src={accountType.image}
									alt=''
									className='absolute -top-2 -left-4'
									width={40}
									height={40}
								/>
							</div>
							<p className='font-bold text-xl'>{accountType.name}</p>
						</div>
					))}
				</div>

				<div className='mt-6 text-center'>
					<p className='text-sm font-inter'>
						Already have an account?{' '}
						<Link
							to='/'
							className='text-blue font-semibold hover:underline'
						>
							LOGIN
						</Link>
					</p>
				</div>
			</div>

			<div className='hidden w-1/2 lg:flex lg:justify-center'>
				<img
					src={SideImage}
					alt=''
					className='w-3/4'
				/>
			</div>
		</div>
	);
};

export default AccountType;
