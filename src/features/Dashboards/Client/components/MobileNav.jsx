import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { mobileNavLinks } from 'utils/menuIcons';

const MobileNav = ({ toggleMobileMenu }) => {
	return (
		<div className='flex flex-col gap-8 font-semibold font-inter text-blue w-full'>
      <div className='flex justify-between'>
        <MdClose size={24} onClick={() => toggleMobileMenu()} />
        <button>Log Out</button>
      </div>
			{mobileNavLinks.map((item, index) => {
				const isActive = location.pathname === item.path;
				return (
					<Link
						to={item.path}
						key={index}
            onClick={toggleMobileMenu}
					>
						{item.title}
					</Link>
				);
			})}
		</div>
	);
};

export default MobileNav;
