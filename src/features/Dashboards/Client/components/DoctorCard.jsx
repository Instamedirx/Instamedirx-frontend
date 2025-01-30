import { FaStar } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs"
import userImage from 'assets/user.png';
const DoctorCard = ({ doctor }) => {
  return (
    <div className="rounded-xl bg-white rounded-lg shadow-lg p-10">
      <div className="md:flex items-center gap-4 md:gap-6">
        <img
          src={userImage}
          alt={doctor.name}
          className="rounded-xl border-2 border-blue md:h-60 mb-4 md:mb-1"/>
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2 text-blue">
            {doctor.name}
          </h3>
          <p className="text-sm flex items-center gap-1 text-blue">
            {doctor. specialty}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            I am a Psychiatrist with nearly a 3-year working experience in both
            male and female sports with medical license as a chiropractor and
            intense workout.
          </p>
          <div className="flex mt-4">
            <div className="flex items-center gap-1 text-blue mb-3 md:mb-7">
              <span className="text-blue font-bold text-sm ml-1">{doctor. rating}</span>
              <FaStar className="text-yellow-500" />
            </div>
            <div className="flex gap-2 ml-auto">
              <BiMessageSquareDetail className="text-blue bg-blue-99 border border-blue rounded-full p-1 size-6" />
              <BsCameraVideo className="text-blue border border-blue bg-blue-99 rounded-full p-1 size-6" />
            </div>
          </div>
        </div>
      </div>

<div className="flex flex-wrap gap-3 md:gap-3 mt-2 md:mx-auto">
        {doctor.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-99 text-blue-10 font-semibold px-2 md:px-6 py-2 mt-2 md:mt-5 rounded-xl border border-blue text-xs">
            {tag}
          </span>
        ))}
      </div>
    
    </div>
  );
};

export default DoctorCard;


