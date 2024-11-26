import React from 'react';

const Button = ({ children, size, styles, type }) => {
	let buttonWidth =
		size === 's'
			? 'w-1/5'
			: size === 'm'
			? 'w-1/2'
			: 'w-full';

	return (
		<button
			className={`bg-blue text-white font-bold py-1.5 rounded-xl ${buttonWidth} ${styles}`}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
