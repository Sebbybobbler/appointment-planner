import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
    /*
  Define state variables for 
  appointment info
  */
    const appointments = props.appointments;
    const contacts = props.contacts;
    const addAppointment = props.addAppointment;
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment(name, date, time);
        /*
    Add contact info and clear data  
    */
        setName("");
        setDate("");
        setTime("");
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm name={name}
                setName={setName} 
                contact={contact}
                setContact={setContact}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                handleSubmit={handleSubmit} />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList object={appointments} />
            </section>
        </div>
    );
};
