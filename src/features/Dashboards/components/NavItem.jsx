import React from 'react';
import Icons from './Icons';

const NavItem = ({ item, iconStyles, labelStyles, iconColor }) => {
	return (
		<>
			<Icons
				Icon={item.icon}
				styles={iconStyles}
        color={iconColor}
			/>
			{item.label && (
				<span className={labelStyles}>{item.label}</span>
			)}
		</>
	);
};

export default NavItem;
