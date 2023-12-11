import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"
import { useState } from "react"

const Home = () => {
  const [appointments, setAppointment] = useState(appointmentData)
  const handleAdd = (newAppointment) => {
    setAppointment([...appointments, newAppointment])
  }
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList appointments={appointments} />
    </main>
  )
}

export default Home
