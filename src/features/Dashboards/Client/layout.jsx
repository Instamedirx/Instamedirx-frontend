import React, { useEffect, useRef, useState } from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Outlet } from 'react-router-dom';
import MobileNav from './components/MobileNav';

const ClientLayout = () => {
	const [headerHeight, setHeaderHeight] = useState(0);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const headerRef = useRef(null);

	const toggleMobileMenu = () => {
		setIsMobileOpen(prev => !prev);
	};
	const toggleSidebar = () => {
		setIsSidebarOpen(prev => !prev);
	};

	useEffect(() => {
		const updateDimensions = () => {
			if (headerRef.current) {
				setHeaderHeight(headerRef.current.offsetHeight);
			}
		};

		updateDimensions();

		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener(
				'resize',
				updateDimensions
			);
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsSidebarOpen(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='flex flex-col bg-white xs:bg-blue-95'>
			{/* TODO: TOP BAR */}
			<header
				className='bg-blue-99 xs:bg-white w-full rounded-b-2xl xs:rounded-none py-5 xs:py-8 flex flex-col lg:flex-row fixed top-0 z-50'
				ref={headerRef}
			>
				<div className='hidden xs:block absolute w-[96%] h-px bottom-0 left-[2%] bg-blue' />
				<TopBar
					toggleMobileMenu={toggleMobileMenu}
					toggleSidebar={toggleSidebar}
				/>
			</header>

			<div
				className={`relative flex bg-white xs:bg-blue-95`}
				style={{
					marginTop: `${headerHeight}px`,
					height: `calc(100vh - ${headerHeight}px)`,
				}}
			>
				<aside
					className={`absolute md:relative bg-white shadow-xl shadow-blue-95 transition-transform duration-300 z-40 w-fit scrollbar-webkit md:translate-x-0 ${
						isSidebarOpen
							? `xs:block xs:fixed xs:left-0 md:h-auto translate-x-0`
							: '-translate-x-full'
					}`}
					style={{
						height:
							window.innerWidth < 768
								? `calc(100vh - ${headerHeight}px)`
								: 'auto',
						backgroundColor:
							window.innerWidth <= 768 &&
							isSidebarOpen &&
							'rgba(255, 255, 255, 0.2)',
						backdropFilter:
							window.innerWidth <= 768 &&
							isSidebarOpen &&
							'blur(4px)',
					}}
				>
					<SideBar
						isSidebarOpen={isSidebarOpen}
						toggleSidebar={toggleSidebar}
					/>
				</aside>
				<div
					className={`fixed top-0 left-0 flex items-center px-5 w-3/5 h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 z-50 transition-transform duration-300 ${
						isMobileOpen
							? 'translate-x-0'
							: '-translate-x-full'
					} `}
				>
					{/* */}
					<MobileNav toggleMobileMenu={toggleMobileMenu} />
				</div>

				<main
					className={`overflow-y-auto scrollbar-webkit w-full`}
					onClick={() => {
						setIsSidebarOpen(false);
						setIsMobileOpen(false);
					}}
				>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default ClientLayout;
