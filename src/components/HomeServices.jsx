import { FaArrowRight } from "react-icons/fa";
import doc from "../assets/Homepage/docgreen.png"
import chart from "../assets/Homepage/chart.svg"
import pharm from '../assets/Homepage/Pharmacist Img.svg'
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* View Our Services Section */}
      <section className="px-6 py-12 md:px-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-primary">
          View Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={doc} 
              alt="Doctor"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            {[
              "Individual Consultation",
              "Family Consultation",
              "Couples Consultation",
              "Adolescents and Children Consultation",
              "Group Consultation",
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg border border-blue"
              >
                <div className="text-yellow text-2xl font-bold">&gt;</div>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">{service}</h3>
                  <p className="text-sm text-gray">
                    I am a physiotherapist with 3 years experience working in
                    both male and female sports with medical license as a
                    chiropractor and intensive workout.
                  </p>
                </div>
              </div>
            ))}
            <button className="flex mt-6 px-6 py-3 bg-blue text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
              Book Now <FaArrowRight className="ml-2 md:ml-4 bg-white rounded-full text-blue p-1 mt-1 "/>
            </button>
          </div>
        </div>
      </section>

      {/* Order Medications Section */}
      <section className="px-6 py-12 md:px-16 bg-blue-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img src={chart} alt="" />
            <p className="text-primary  text-2xl font-bold">
             Order Medications Esaily
            </p>

            <p className=" text-gray md:w-1/2 text-center">Consult Doctors, Order Medications, Book Appointments, All in One Place!</p>
            <button className="flex px-6 py-3 bg-blue text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
              Buy Medications <FaArrowRight className="ml-2 md:ml-4 bg-white rounded-full text-blue p-1 mt-1 "/>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={pharm} 
              alt="Pharmacist"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
