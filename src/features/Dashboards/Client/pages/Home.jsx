import Card from 'components/Card';
import React from 'react';

const Home = () => {
	return (
		<section className='flex flex-col gap-4 font-inter'>
			<Card
				styles='rounded-none px-4 py-9 space-y-8 shadow-none'
			>
				<div className='flex flex-col gap-1'>
					<h1 className='text-blue-40 text-2xl font-semibold'>
						Welcome Name
					</h1>
					<p className='text-gray-30 text-sm'>
						How do you feel today? Start by booking a doctor
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold text-blue-40'>
						Stories
					</p>
				</div>
			</Card>
		</section>
	);
};

export default Home;
