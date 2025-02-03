import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import doc1 from '../assets/Homepage/Doc Chisom.svg';
import doc2 from '../assets/Homepage/Doc Card.svg';
import doc3 from '../assets/Homepage/Doc Card3.png';
import doc4 from '../assets/Homepage/Doc Chisom.svg';
import doc5 from '../assets/Homepage/Doc Card.svg';
import doc6 from '../assets/Homepage/Doc Card3.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedDoctors = () => {
  const doctors = [doc1, doc2, doc3, doc4, doc5, doc6];

  return (
    <div className="bg-[#F1FAFF] py-12 px-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray relative inline-block">
          Meet Our Featured Doctors
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-1 w-12 bg-yellow rounded"></span>
        </h2>
      </div>

      {/* Swiper Slider Section */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        loop
        className="max-w-6xl mx-auto"
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={index}>
            <img
              src={doc}
              alt={`Doctor ${index + 1}`}
              className="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button Section */}
      <div className="text-center mt-12">
        <Link
          to="/login"
          className="md:px-6 px-3 py-3 mx-auto md:py-2 border border-primary text-primary rounded-full md:rounded-xl flex gap-3 w-1/2 md:w-2/12"
        >
          Get Started{' '}
          <p>
            <FaArrowRight className="bg-primary rounded-full text-white mt-1 md:text-[18px]" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDoctors;
