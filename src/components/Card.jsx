import React from 'react';

const Card = ({ children, styles }) => {
	return (
		<div
			className={`shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] rounded-3xl bg-[#FFFCFC] ${styles}`}
		>
			{children}
		</div>
	);
};

export default Card;
