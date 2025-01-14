import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

import userImage from 'assets/user.png';
import SearchBar from 'features/Dashboards/components/SearchBar';
import ProfileImage from 'features/Dashboards/components/ProfileImage';

const TopBar = () => {
	const topBarIcons = [
		{
			Icon: IoMdNotificationsOutline,
			label: 'Notification',
		},
	];

	return (
		<header className='border border-red-500 flex justify-between items-center w-full container mx-auto'>
			<div className='flex items-center gap-3'>
				<ProfileImage
					src={userImage}
					width={40}
					height={40}
					styles='rounded-full border-1.5 border-blue'
				/>
				<p className='text-blue font-inter text-sm font-semibold'>
					Name
				</p>
			</div>
			<SearchBar />
			<div>Content 3</div>
		</header>
	);
};

export default TopBar;
