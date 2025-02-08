import { FaLongArrowAltLeft } from 'react-icons/fa';

import { doctorsData } from 'utils/data';
import DoctorCard from './DoctorCard';
import { useSelector } from 'react-redux';

const AllDoctors = ({ onBack }) => {
	const isCollapsed = useSelector(
		state => state.sidebar.isCollapsed
	);
	return (
		<div className='border border-red-500 w-full p-4 flex flex-col gap-8'>
			<button
				onClick={onBack}
				className='flex items-center gap-3 text-sm font-semibold text-blue-50'
			>
				<span>
					<FaLongArrowAltLeft />
				</span>
				<span>Doctors For You</span>
			</button>
			<div
				className={`grid sm:grid-cols-2 xlg:grid-cols-2 sm:gap-8 items-center justify-items-center gap-y-12 ${
					isCollapsed ? 'md:grid-cols-2' : 'md:grid-cols-1'
				}`}
			>
				{doctorsData.map(doctor => (
					<DoctorCard
						key={doctor.id}
						doctor={doctor}
					/>
				))}
			</div>
		</div>
	);
};

export default AllDoctors;
