import React from 'react';
import { IconContext } from 'react-icons';

const Icons = ({
	Icon,
	size = 24,
	styles,
	onClick,
}) => {
	return (
		<IconContext.Provider
			value={{
				size,
			}}
		>
			<Icon
				className={`text-blue ${styles}`}
				onClick={onClick && onClick}
			/>
		</IconContext.Provider>
	);
};

export default Icons;
