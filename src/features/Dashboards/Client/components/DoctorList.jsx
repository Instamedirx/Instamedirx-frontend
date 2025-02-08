import { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import { doctorsData } from 'utils/data';
import { Card } from '@mantine/core';
import { useSelector } from 'react-redux';

const DoctorsList = ({ setShowAllDoctors }) => {
	const [visibleDoctors] = useState(
		doctorsData.slice(0, 2)
	);

	const isCollapsed = useSelector(
		state => state.sidebar.isCollapsed
	);

	return (
		<>
			<div className='mt-2 flex justify-between items-center mb-4'>
				<h2 className='font-semibold text-blue-50'>
					Doctors For You
				</h2>
				<button
					className='px-4 py-2 text-xs text-blue-50 rounded-lg focus:outline-none'
					onClick={() => setShowAllDoctors(true)}
				>
					View All
				</button>
			</div>
			<div
				className={`flex flex-col sm:flex-row xlg:flex-row gap-8 sm:gap-10 xlg:gap-16 justify-evenly items-center ${
					isCollapsed ? 'md:flex-row' : 'md:flex-col'
				}`}
			>
				{visibleDoctors.map(doctor => (
					<DoctorCard
						key={doctor.id}
						doctor={doctor}
					/>
				))}
			</div>
		</>
	);
};

export default DoctorsList;
