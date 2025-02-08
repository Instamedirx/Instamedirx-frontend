import { IoMdNotificationsOutline } from 'react-icons/io';
import {
	MdOutlineShoppingCart,
	MdOutlineSpa,
	MdOutlineMedicalServices,
	MdOutlineSettingsSuggest,
} from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { BiBook } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi2';
import { PiChatCircleText } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';

import { TbVideo } from 'react-icons/tb';

export const topBarIcons = [
	{
		Icon: IoMdNotificationsOutline,
		label: 'Notification',
	},
	{
		Icon: MdOutlineShoppingCart,
		label: 'Card',
	},
	{
		Icon: PiChatCircleText,
		label: 'Message',
	},
	{
		Icon: RxHamburgerMenu,
		label: 'Menu',
	},
];

export const sidebarLinks = [
	{
		label: 'Dashboard',
		icon: GoHome,
		path: '/dashboard',
	},
	{
		label: 'Bookings',
		icon: BiBook,
		path: '/dashboard/bookings',
	},
	{
		label: 'Pharmacy',
		icon: MdOutlineSpa,
		path: '/dashboard/pharmacy',
	},
	{
		label: 'Services',
		icon: MdOutlineMedicalServices,
		path: '/dashboard/services',
	},
	{
		label: 'Messages',
		icon: PiChatCircleText,
		path: '/dashboard/messages',
	},
	{
		label: 'Settings',
		icon: MdOutlineSettingsSuggest,
		path: '/dashboard/settings',
	},
	{
		label: 'Accounts',
		icon: HiOutlineUser,
		path: '/dashboard/accounts',
	},
];

export const mobileNavLinks = [
	{
		title: 'Dashboard',
		path: '/dashboard',
	},
	{
		title: 'Cart',
		path: '/dashboard/cart',
	},
	{
		title: 'Messages',
		path: '/dashboard/messages',
	},
	{
		title: 'Pharmacy',
		path: '/dashboard/pharmacy',
	},
	{
		title: 'Appointments',
		path: '/dashboard/appointments',
	},
	{
		title: 'Services',
		path: '/dashboard/services',
	},
	{
		title: 'Settings',
		path: '/dashboard/settings',
	},
	{
		title: 'Support',
		path: '/dashboard/support',
	},
];

export const profileIcons = [
	{
		label: 'Message',
		icon: PiChatCircleText,
		// path: '/dashboard/messages/:id',
	},
	{
		label: 'Call',
		icon: TbVideo,
		// path: '/dashboard/messages/:id',
	},
];
