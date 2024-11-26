import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import SideImage from '../../../assets/login/side_image.svg';

import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import {  Button } from '../../../components';


const Login = () => {
	return (
		<section className='flex justify-center items-center gap-10'>
			<div className='flex w-full h-full md:w-2/4 flex-col px-3 py-4 md:py-0'>
				<div className='flex flex-col items-center gap-3'>
					<img
						src={Logo}
						alt='Logo'
						width={100}
						height={100}
					/>
					<h2 className='font-inria-serif font-bold text-4xl'>Login</h2>
				</div>
				<div className='mx-auto w-full max-w-[450px]'>
					<form className='mt-6 space-y-4 mb-2 px-3'>
						<div className='flex flex-col gap-2 w-full'>
							<label
								htmlFor='email'
								className='font-inria-serif font-bold ml-2'
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
								className='font-inria-serif font-bold ml-2'
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
						<Link
							to=''
							className='w-full pr-2 block text-end text-blue text-sm font-medium'
						>
							Forgotten password?
						</Link>
						<Button>Login</Button>
					</form>
					<div className='flex justify-center items-center px-7 gap-2'>
						<div className='flex-grow border border-gray-300' />
						<p className='text-gray-400 text-[14px] text-center'>
							or login with
						</p>
						<div className='flex-grow border border-gray-300' />
					</div>
					<div className='flex justify-center items-center space-x-16 my-4'>
						<FcGoogle size={35} />
						<FaFacebook
							size={35}
							className='text-blue'
						/>
						<FaApple
							size={32}
							className='invert dark:bg-white rounded-md'
						/>
					</div>
					<p className='font-inter text-xs text-center px-8'>
						By continuing, you agree to InstamediRX's{' '}
						<a
							href=''
							className='text-blue font-semibold'
						>
							Privacy policy and Terms of service
						</a>
					</p>
					<p className='text-center text-xs mt-10 font-inter'>
						Don't have an account?{' '}
						<Link
							to='/signup'
							className='font-bold text-blue'
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
			<div className='login-img hidden md:flex w-2/4'>
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
