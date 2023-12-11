import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"
import { useState } from "react"

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const handleAdd = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleDelete = (id) => {
    const filteredList = appointments.filter((item) => item.id !== id);
    setAppointments(filteredList);
  };

  const handleDubleClick = (id) => {
    const newList = appointments.map((item) => {
      if (item.id === id) {
        return { ...item, consulted: !item.consulted };
      }
      return item;
    });
    setAppointments(newList);
  }
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete}
        handleDubleClick={handleDubleClick}
        // setAppointments={setAppointments}
      />
    </main>
  );
};
export default Home
