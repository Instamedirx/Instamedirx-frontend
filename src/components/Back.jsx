import React from 'react';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Back = ({ styles, onClick }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		onClick ? onClick() : navigate(-1);
	};
	return (
		<p
			className={`text-blue flex items-center gap-2 hover:cursor-pointer ${styles}`}
			onClick={handleClick}
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
