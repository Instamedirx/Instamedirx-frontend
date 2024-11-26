import React from 'react';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Back = ({styles}) => {
	const navigate = useNavigate();
	return (
		<p
			className={`text-blue flex items-center gap-2 hover:cursor-pointer ${styles}`}
			onClick={() => navigate(-1)}
		>
			<HiOutlineArrowLongLeft
				size={30}
				className='text-blue'
			/>
			<span className='font-inria-sans font-semibold'>
				Back
			</span>
		</p>
	);
};

export default Back;
