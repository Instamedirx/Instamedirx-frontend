import { FaUserMd, FaStethoscope, FaChild, FaBrain, FaTooth, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import doc from "../assets/Homepage/Frame 427319089.svg";
import Video from "../assets/Homepage/Dashboard.svg";
import gridImg from "../assets/Homepage/Instamedirx.svg";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Consultation by Category Section */}
      <section className="px-6 py-12 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              src={doc}
              alt="Doctor Consultation"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Book Consultation By Category
            </h2>
            {[
              { name: "General Practitioners", icon: <FaUserMd /> },
              { name: "Specialists", icon: <FaStethoscope /> },
              { name: "Pediatrics", icon: <FaChild /> },
              { name: "Mental Health", icon: <FaBrain /> },
              { name: "Dental Care", icon: <FaTooth /> },
            ].map((category, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg border flex items-center gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center text-primary border border-blue rounded-full text-lg">
                  {category.icon}
                </div>
                <p className="text-primary font-bold text-lg">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <div className="bg-blue w-full h-32"></div>

      {/* Video Consultation Section */}
      <section className="px-6 py-12 md:px-16">
        <div className="flex justify-center -mt-24">
          <img
            src={Video}
            alt="Video Consultation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Initial Consultation Section */}
      <section className="text-center px-6 py-8 md:py-16">
        <div className="w-4/5 mx-auto md:w-1/2">
          <h3 className="font-bold text-xl md:text-2xl mb-3 text-primary">
            Need An Initial Consultation
          </h3>
          <p className="text-gray text-sm mb-6">
            Our trusted doctors are available for an initial consultation to
            help you understand your condition and guide you on the next steps.
          </p>
          <Link
            to=""
            className="px-6 py-3 bg-white text-primary border border-primary rounded-xl flex gap-4 justify-center items-center mx-auto"
          >
            Schedule Your First Invitation{" "}
            <FaArrowRight className="bg-primary rounded-full text-white text-[18px]" />
          </Link>
        </div>
      </section>

      {/* Learn More About Services Section */}
      <section className="text-center px-6 py-8 md:py-16">
        <div className="w-4/5 mx-auto md:w-1/2">
          <img
            src={gridImg}
            alt="Instamedirx"
            className="mx-auto py-6 w-full max-w-sm"
          />
          <h3 className="" >
            Learn More About Our Services
          </h3>
          <p className="text-gray text-sm mb-6">
            Explore how we simplify healthcare for you. Learn more about our
            consultations, medical experts, and pharmacy services available
            right at your fingertips.
          </p>
          <Link
            to=""
            className="px-6 py-3 bg-white text-primary border border-primary rounded-xl flex gap-4 justify-center items-center mx-auto"
          >
            Learn More
            <FaArrowRight className="bg-primary rounded-full text-white text-[18px]" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
