import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavItem from 'features/Dashboards/components/NavItem';
import {
	mobileNavLinks,
	sidebarLinks,
} from 'utils/menuIcons';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
	const location = useLocation();

	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		const collapsedRoutes = [
			'/dashboard/bookings',
			'/dashboard/pharmacy',
		];
		setIsCollapsed(
			collapsedRoutes.includes(location.pathname)
		);
	}, [location.pathname]);

	return (
		<nav
			className={`hidden xs:flex h-full overflow-y-auto transform transition-transform duration-300 pb-3 scrollbar-webkit ${
				isSidebarOpen
					? 'translate-x-0'
					: '-translate-x-full'
			} md:translate-x-0 md:block ${
				isCollapsed ? 'w-fit' : 'w-52'
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
								if(window.innerWidth >= 520 && window.innerWidth <= 768) {
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
