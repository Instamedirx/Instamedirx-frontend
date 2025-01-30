
import DoctorCard from "./DoctorCard";
import doctorsData from "./DoctorData";

const AllDoctors = () => {
  return (
    <div className="
   md:p-10 p-6
    ">
      <h2 className="text-xl text-blue md:text-3xl
       font-bold mb-4">All Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;