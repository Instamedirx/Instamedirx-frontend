import { Link } from 'react-router-dom';
// import img1 from '../assets/Homepage/CX-Report-Med-Hero 1.png'; 
import img2 from '../assets/Homepage/Hero group.svg'; 
import {  FaArrowRight} from 'react-icons/fa'; 

export default function HeroSection() {
  return (
  <div className="bg-[#F1FAFF] py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold md:w-5/6 mb-4 text-gray tracking-wider md:leading-">
            Your Health, Simplified with{' '}
            <span className="text-blue">InstamediRX</span>
          </h1>
          <p className="text-gray mb-6 md:w-4/6">
            Consult Doctors, Order Medications, Book Appointments, All in One
            Place!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link
              to="/login"
              className="md:px-6 px-4 py-3 md:py-3 bg-blue text-white rounded-full md:rounded-xl flex gap-3"
            >
              Get Started <p><FaArrowRight className='bg-white rounded-full text-blue mt-1 md:text-[18px]'/></p>
            </Link>
            <Link
              to="/buy-medicines"
              className="px-6 py-3 hidden bg-white text-primary border border-primary rounded-xl md:flex gap-4"
            >
              Buy Medications <p><FaArrowRight className='bg-primary rounded-full text-white mt-1 text-[18px]'/></p>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 lg:mt-0 lg:w-1/2">
          {/* First Image */}
          <div className="relative z-10">
            {/* <img
              src={img1}
              alt="Doctor and Patient"
              className="rounded-lg shadow-lg w-4/5 mx-auto lg:ml-auto"
            /> */}
          </div>

          {/* Second Image (slightly rotated and overlapping) */}
          <div className="">
            <img
              src={img2}
              alt="Supporting Healthcare"
              className="rounded-lg w-full "
            />
          </div>

          {/* Floating Labels with Icons */}
          {/* <div className="absolute top-10 left-8 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 bg-white shadow-md px-3 py-2 rounded-full">
              <FaStethoscope className="text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">
                Consult Doctors
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-md px-3 py-2 rounded-full">
              <FaCalendarAlt className="text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">
                Book Appointments
              </span>
            </div>
          </div> */}
          {/* <div className="absolute bottom-8 right-8">
            <div className="flex items-center space-x-2 bg-white shadow-md px-3 py-2 rounded-full">
              <FaHeartbeat className="text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">
                Access Healthcare
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
