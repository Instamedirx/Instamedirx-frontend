import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	FaAnglesLeft,
	FaAnglesRight,
} from 'react-icons/fa6';

import NavItem from 'features/Dashboards/components/NavItem';
import {
	mobileNavLinks,
	sidebarLinks,
} from 'utils/menuIcons';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
	const location = useLocation();

	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<nav
			className={`hidden xs:flex h-full overflow-y-auto transform transition-transform duration-300 scrollbar-webkit ${
				isSidebarOpen
					? 'translate-x-0'
					: '-translate-x-full'
			} md:translate-x-0 md:block ${
				isCollapsed ? 'w-fit py-6' : 'w-52'
			}`}
			style={{
				backgroundColor:
					window.innerWidth <= 768 &&
					isSidebarOpen &&
					'rgba(255, 255, 255, 0.2)',
				backdropFilter:
					window.innerWidth <= 768 &&
					isSidebarOpen &&
					'blur(2px)',
			}}
		>
			<button
				className='absolute top-4 right-6 p-1 z-10 text-blue-40'
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed ? (
					<FaAnglesRight size={19} />
				) : (
					<FaAnglesLeft size={19} />
				)}
			</button>
			{/* Menu Items */}
			<div
				className={`flex flex-col pt-14 px-2 gap-5 ${
					isCollapsed && 'items-center pt-8 px-2 gap-2'
				}`}
			>
				{sidebarLinks.map((item, index) => {
					const isActive = location.pathname === item.path;
					return (
						<Link
							to={item.path}
							key={index}
							className={`flex w-fit items-center gap-1 px-1.5 py-2 rounded-lg transition-all duration-300 origin-left relative ${
								isActive &&
								"after:content-[''] after:absolute after:bg-yellow-500 after:w-16 after:scale-x-100 after:h-0.5 after:bottom-1 after:left-2"
							} ${
								isCollapsed
									? 'flex-col text-[10px] gap-1 py-0 after:hidden'
									: 'flex-row'
							} ${
								isCollapsed && isActive
									? 'border-none bg-blue-95'
									: ''
							}`}
							onClick={() => {
								if (
									window.innerWidth >= 520 &&
									window.innerWidth <= 768
								) {
									toggleSidebar();
								}
							}}
						>
							<NavItem
								item={item}
								iconStyles={`${
									isActive ? 'text-blue-20' : 'text-blue'
								}`}
								labelStyles={`font-inria-sans font-semibold ${
									isActive ? 'text-blue-20' : 'text-blue'
								} ${
									isCollapsed && isActive ? 'text-blue' : ''
								}`}
							/>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default SideBar;
