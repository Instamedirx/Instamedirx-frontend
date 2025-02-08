import { MdOutlineStarRate } from 'react-icons/md';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { Card } from '@mantine/core';
import { profileIcons } from 'utils/menuIcons';
import Icons from 'features/Dashboards/components/Icons';

const DoctorCard = ({ doctor }) => {
	return (
		<Card className='max-w-md'>
			<div className='flex items-center gap-2'>
				<div className='relative'>
					<img
						src={doctor.image}
						alt={doctor.name}
						className='border-1.5 border-blue-50 rounded-lg p-0.5 w-80 h-full'
					/>
					<AiOutlineExpandAlt className='absolute top-3 right-3 bg-white rounded-full p-0.5 text-blue-30 border border-gray-50' size={22} />
				</div>
				<div className='my-3 w-full flex flex-col'>
					<h3 className='text-blue-30 flex flex-col gap-0.5'>
						<span className='font-semibold text-sm'>
							Dr. {doctor.name}
						</span>
						<span className='text-xs text-blue-40 '>
							{doctor.specialty}
						</span>
					</h3>
					<p className='text-gray-30 text-xs xxs:text-sm line-clamp-4 mt-2'>
						{doctor.description}
					</p>
					<div className='mt-1 xxs:mt-3 flex justify-between items-center'>
						<p className='flex gap-0.5 items-center'>
							<span className='text-blue-40 font-semibold text-xs'>
								{doctor.rating}
							</span>
							<MdOutlineStarRate className='text-yellow-500' />
						</p>
						<div className='flex gap-2 md:pr-4'>
							{profileIcons.map((icon, index) => (
								<span
									className='flex items-center justify-center bg-blue-99 border border-blue-95 p-1 rounded-full cursor-pointer'
									key={index}
								>
									<Icons
										Icon={icon.icon}
										size={15}
									/>
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap gap-3 mt-3.5 max-w-xs px-2'>
				{doctor.tags.map((tag, index) => (
					<span
						key={index}
						className='text-blue-10 font-medium px-2 py-1 rounded-md bg-blue-99 border border-blue-95 text-[10px]'
					>
						{tag}
					</span>
				))}
			</div>
		</Card>
	);
};

export default DoctorCard;

{
	/* <div className='flex flex-col items-center gap-6 xs:gap-4'>
				<div className='w-full'>
					<img
						src={userImage}
						alt={doctor.name}
						className='rounded-3xl p-1 border-1.5 border-blue w-full'
					/>
				</div>
				<div className='w-full'>
					<h3 className='text-lg font-bold flex items-center gap-2 text-blue'>
						Dr. {doctor.name}
					</h3>
					<p className='text-sm text-blue'>
						{doctor.specialty}
					</p>
					<p className='text-[12px] text-gray-500 mt-3 line-clamp-2'>
						{doctor.description}
					</p>
					<div className='flex items-center my-4'>
						<div className='flex items-center gap-1 text-blue'>
							<span className='text-blue font-bold text-sm ml-1'>
								{doctor.rating}
							</span>
							<FaStar className='text-yellow-500' />
						</div>
						<div className='flex gap-2 ml-auto'>
							<BiMessageSquareDetail className='text-blue bg-blue-99 border border-blue rounded-full p-1 size-6' />
							<BsCameraVideo className='text-blue border border-blue bg-blue-99 rounded-full p-1 size-6' />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-wrap gap-3 md:gap-3 mt-2 md:mx-auto'>
				{doctor.tags.map((tag, index) => (
					<span
						key={index}
						className='bg-blue-99 text-blue-10 font-semibold px-2 py-1 rounded-md border border-blue text-[10px]'
					>
						{tag}
					</span>
				))}
			</div>
			*/
}
