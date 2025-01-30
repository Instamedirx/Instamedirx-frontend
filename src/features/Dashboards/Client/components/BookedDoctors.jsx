const BookedDoctors = () => {
    return (
      <div className="p-4 mt-2">
         <div className="mt-2">
       <h2 className="text-3xl
         font-bold mb-10 mt-2 md:mt-4 text-blue font-bold">Booked Doctors</h2>
           <p className="text-sm text-gray mt-2">
             You have no bookings at the moment. Start by booking a doctor!
           </p>
           <div className="mt-4 flex justify-center">
             <img
               src="https://via.placeholder.com/100"
               alt="No Bookings"        className="opacity-50"           />      </div>
     </div> 
      </div>
    );
  };
  
  export default BookedDoctors;