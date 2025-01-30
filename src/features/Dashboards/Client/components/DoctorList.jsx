
import  { useState } from "react";
import { NavLink } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import doctorsData from "../components/DoctorData";

const DoctorsList = () => {
  const [visibleDoctors] = useState(doctorsData.slice(0, 2));

  return (
    <div className="p-5 md:p-10">
   
      <div>
        <div className="mt-2 flex justify-between items-center mb-4">
          <h2 className=" text-xl md:text-3xl font-bold 
          text-blue">
           Doctors For You</h2>
           <div className="text-right mt-4">
      <NavLink
      to="/dashboard/All doctors"
       className="px-4 py-2  text-blue rounded-lg  focus:outline-none"
       >View All
     </NavLink>
  </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}

         
        </div>

       

      </div>

      
    </div>
  );
};

export default DoctorsList;
