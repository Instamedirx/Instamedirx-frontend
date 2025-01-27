import React from 'react'
import { MdFilterList, MdSearch } from 'react-icons/md';

const SearchBar = () => {
  return (
		<div className='flex items-center w-full gap-2 xxs:gap-4 max-w-lg px-3 xxs:px-4 py-3 border-1.5 border-blue rounded-3xl'>
			{/* Filter Icon */}
			<MdFilterList size={20} className='text-blue' />

			{/* Input Field */}
			<input
				type='text'
				placeholder='Browse doctors, pharmacies and medications'
				className='flex-grow bg-transparent border-l-1.5 font-inter text-sm border-l-blue px-2 py-0.5 outline-none text-black placeholder-gray-500'
			/>

			{/* Search Icon */}
			<MdSearch
				className='text-blue ml-2'
				size={20}
			/>
		</div>
	);
}

export default SearchBar
