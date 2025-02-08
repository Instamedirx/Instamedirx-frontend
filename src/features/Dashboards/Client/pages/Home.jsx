// import Card from 'components/Card';
import React, { useState } from 'react';
import Stories from '../components/Home/Stories';
import DoctorsList from '../components/DoctorList';
import { Card } from '@mantine/core';
import AllDoctors from '../components/AllDoctors';

const Home = () => {
	const [showAllDoctors, setShowAllDoctors] =
		useState(false);

	return (
		<section className='flex flex-col gap-2 font-inter'>
			{showAllDoctors ? (
				<Card className='bg-white flex'>
					<AllDoctors
						onBack={() => setShowAllDoctors(false)}
					/>
				</Card>
			) : (
				<>
					<Card className='bg-white rounded-none px-5 py-9 space-y-8 shadow-sm shadow-blue-99'>
						<div className='flex flex-col gap-1'>
							<h1 className='text-blue-40 text-2xl font-semibold'>
								Welcome Name
							</h1>
							<p className='text-gray-30 text-sm'>
								How do you feel today? Start by booking a
								doctor
							</p>
						</div>
						<div className='flex flex-col gap-4'>
							<p className='font-semibold text-blue-40'>
								Stories
							</p>
							<Stories />
						</div>
					</Card>
					<Card className='rounded-none px-4 py-9 space-y-8 shadow-sm shadow-blue-99 bg-white'>
						<DoctorsList
							setShowAllDoctors={setShowAllDoctors}
						/>
					</Card>
				</>
			)}
		</section>
	);
};

export default Home;
