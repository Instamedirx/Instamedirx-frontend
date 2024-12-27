import React from 'react';

const Button = ({
	children,
	size,
	styles,
	type,
	onClick,
	disabled,
}) => {
	let buttonWidth =
		size === 's'
			? 'w-1/4'
			: size === 'm'
			? 'w-1/2'
			: 'w-full';

	return (
		<button
			className={`text-white font-bold py-1.5 rounded-xl ${
				disabled ? 'bg-gray-300' : 'bg-blue'
			} ${buttonWidth} ${styles}`}
			type={type}
			onClick={onClick && onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
