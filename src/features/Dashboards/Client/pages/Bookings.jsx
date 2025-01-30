import React from 'react'
import DoctorsList from '../components/DoctorList';
import BookedDoctors from "features/Dashboards/Client/components/BookedDoctors";
const Bookings = () => {
  return (
    <div>
      <DoctorsList/>
      <BookedDoctors/> 
    </div>
  )
}

export default Bookings
