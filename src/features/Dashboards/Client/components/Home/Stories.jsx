import React, { useEffect, useRef, useState } from 'react';

import { Carousel } from '@mantine/carousel';
import Stories from 'react-insta-stories';

import { storyData } from 'utils/data';

const StoriesCarousel = () => {
	const [currentStoryIndex, setCurrentStoryIndex] =
		useState(null);
	const [isStoryOpen, setIsStoryOpen] = useState(false);

	const carouselRef = useRef();

	const handleOpenStories = index => {
		setCurrentStoryIndex(index);
		setIsStoryOpen(true);
	};

	const handleNextUser = () => {
		if (currentStoryIndex < storyData.length - 1) {
			setCurrentStoryIndex(currentStoryIndex + 1);
		} else {
			setIsStoryOpen(false);
		}
	};

	const handlePrevUser = () => {
		if (currentIndex > 0) {
			setCurrentStoryIndex(currentStoryIndex - 1);
		}
	};

	return (
		<div className='w-full'>
			<Carousel
				slideSize='auto'
				align='start'
				dragFree
				withControls
				controlSize={20}
				containScroll='keepSnaps'
				styles={{
					controls: {
						position: 'absolute',
						top: '50%',
						left: -5,
						right: -5,
						transform: 'translateY(-50%)',
						zIndex: 10,
					},
					control: {
						backgroundColor: 'white',
						color: '#0866FF',
						borderRadius: '50%',
						border: 'none',
						width: '20px',
						height: '20px',
					},
				}}
				classNames='flex items-center space-x-3 sm:space-x-4 md:space-x-5'
			>
				{storyData.map((user, index) => {
					return (
						<Carousel.Slide
							key={index}
							className='flex justify-center'
						>
							<div
								className='relative w-28 gap-1 rounded-lg cursor-pointer flex flex-col items-center group'
								onClick={() => handleOpenStories(index)}
							>
								<img
									src={user.avatar}
									alt={user.username}
									className='w-16 h-16 rounded-full object-cover border-1.5 border-blue-50 p-0.5'
								/>
								<p className='text-[10px] font-semibold text-blue-20'>
									{user.role === 'doctor'
										? `Dr. ${user.username}`
										: `${user.username}`}
								</p>
							</div>
						</Carousel.Slide>
					);
				})}
			</Carousel>

			{isStoryOpen && currentStoryIndex !== null && (
				<div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
					<div className='w-full max-w-md'>
						<Stories
							stories={storyData[currentStoryIndex].stories}
							defaultInterval={5000}
							onAllStoriesEnd={handleNextUser}
							onClose={() => setIsStoryOpen(false)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default StoriesCarousel;
