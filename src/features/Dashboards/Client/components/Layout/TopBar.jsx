import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { PiChatCircleText } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';

import userImage from 'assets/user.png';
import SearchBar from 'features/Dashboards/components/SearchBar';
import Image from 'features/Dashboards/components/Image';
import Icons from 'features/Dashboards/components/Icons';
import { topBarIcons } from 'utils/menuIcons';

const TopBar = ({ toggleMobileMenu, toggleSidebar }) => {
	return (
		<>
			{/* DESKTOP/TABLET VIEW */}
			<div
				className={`hidden xs:flex justify-between md:justify-evenly md:gap-10 lg:justify-between items-center w-full px-5 md:px-7 lg:px-8`}
			>
				<div className='flex items-center gap-3'>
					<Image
						src={userImage}
						width={40}
						height={40}
						styles='rounded-full border-1.5 border-blue'
						description='Profile image'
					/>
					<p className='text-blue-40 font-inter text-sm font-semibold xs:hidden md:block'>
						Ubah Chukwuemeka
					</p>
				</div>
				<div className='w-2/3 max-w-lg'>
					<SearchBar />
				</div>
				<div className='xs:flex md:hidden gap-10'>
					{topBarIcons.map(
						(icon, index) =>
							icon.label === 'Menu' && (
								<Icons
									key={icon.label}
									Icon={icon.Icon}
									onClick={toggleSidebar}
								/>
							)
					)}
				</div>
				<div className='xs:hidden lg:flex gap-10'>
					{topBarIcons.slice(0, 3).map((icon, index) => (
						<div
							className='flex items-center justify-center bg-blue-99 gap-4 border border-blue-95 p-2 rounded-full'
							key={index}
						>
							<Icons Icon={icon.Icon} />
						</div>
					))}
				</div>
			</div>

			{/* MOBILE VIEW */}
			<div className='flex flex-col gap-10 xs:hidden w-full px-2 xxs:px-6'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2'>
						<span className='px-1.5 py-1.5 bg-white rounded-full'>
							{topBarIcons.map(
								icon =>
									icon.label === 'Menu' && (
										<Icons
											Icon={icon.Icon}
											size={22}
											key={icon.label}
											onClick={toggleMobileMenu}
										/>
									)
							)}
						</span>
						<span className='px-1.5 py-1.5 h-fit bg-white rounded-full'>
							{topBarIcons.map(
								icon =>
									icon.label === 'Notification' && (
										<Icons
											Icon={icon.Icon}
											size={22}
											key={icon.label}
										/>
									)
							)}
						</span>
					</div>
					<Image
						src={userImage}
						width={35}
						height={35}
						styles='rounded-full border-1.5 border-blue'
						description='Profile image'
					/>
				</div>
				<div className='space-y-3'>
					<p className='text-blue font-inter text-sm font-semibold'>
						Welcome, Name
					</p>
					<SearchBar />
				</div>
			</div>
		</>
	);
};

export default TopBar;
