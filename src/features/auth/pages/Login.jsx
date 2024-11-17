import React from 'react';

import Logo from '../../../assets/logo.svg';
import SideImage from '../../../assets/login/side_image.svg';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '../../../components';

const Login = () => {
	return (
		<section className='flex justify-center py-4 gap-10'>
			<div className='flex w-2/4 flex-col px-6'>
				<div className='flex flex-col items-center gap-3'>
					<img
						src={Logo}
						alt='Logo'
						width={100}
						height={100}
					/>
					<h2 className='font-inria text-4xl'>Login</h2>
				</div>
				<form className='my-6 px-12'>
					<div className='mx-auto flex flex-col items-center gap-4'>
						<div className='flex flex-col gap-2 w-full'>
							<label
								htmlFor='email'
								className='font-inria font-semibold ml-2'
							>
								Email
								<span className='text-red-500 ml-1'>*</span>
							</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Enter your email address'
								required
								className='border-2 border-blue rounded-2xl py-2 px-3 placeholder:text-sm focus:border-blue-700 focus:outline-none'
							/>
						</div>
						<div className='flex flex-col gap-2 w-full'>
							<label
								htmlFor='password'
								className='font-inria font-semibold ml-2'
							>
								Password
								<span className='text-red-500 ml-1'>*</span>
							</label>
							<input
								type='password'
								name='password'
								id='password'
								placeholder='Enter your password'
								required
								className='border-2 border-blue rounded-2xl py-2 px-3 placeholder:text-sm focus:outline-none'
							/>
						</div>
						<a
							href=''
							className='w-full text-end text-blue text-sm mr-3'
						>
							Forgotten password?
						</a>
						<Button>Login</Button>
					</div>
				</form>
				<div className='relative'>
					<div className='absolute -top-2 left-20 w-1/4 border border-gray-300' />
					<p className='absolute text-gray-400 -top-5 left-60 text-[16px] text-center'>
						or login with
					</p>
					<div className='absolute -top-2 right-20 w-1/4 border border-gray-300' />
				</div>
				<div className='socials flex justify-center items-center gap-14 my-4'>
					<FcGoogle size={35} />
					<FaFacebook
						size={35}
						className='text-blue'
					/>
					<FaApple
						size={32}
						className='bg-white fill-black rounded-md dark:bg-black dark:fill-white'
					/>
				</div>
				<p className='font-inter text-xs self-center w-96'>
					By continuing, you agree to InstamediRX's{' '}
					<a
						href=''
						className='text-blue font-semibold'
					>
						Privacy policy and Terms of service
					</a>
				</p>
				<p className='text-center mt-12 font-inter'>Don't have an account? <a href='' className='font-bold text-blue'>Sign up</a></p>
			</div>
			<div className='login-img flex w-2/4'>
				<img
					src={SideImage}
					alt='Side image'
					width={600}
					height={600}
				/>
			</div>
		</section>
	);
};

export default Login;
