// // AppointmentsContext.js
// import React, { createContext, useState } from 'react';

// export const AppointmentsContext = createContext();

// export const AppointmentsProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);

//   const addAppointment = (newAppointment) => {
//     setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
//   };

//   const deleteAppointment = (id) => {
//     setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment.id !== id));
//   };

//   return (
//     <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment }}>
//       {children}
//     </AppointmentsContext.Provider>
//   );
// };



// AppointmentsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppointmentsContext = createContext();

export const useAppointments = () => {
    return useContext(AppointmentsContext);
};

const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    let ampm = "AM";
    hours = parseInt(hours, 10);
    
    if (hours >= 12) {
        ampm = "PM";
        hours = hours > 12 ? hours - 12 : hours;
    } else {
        hours = hours === 0 ? 12 : hours;
    }

    return `${hours}:${minutes} ${ampm}`;
};

const convertTo24HourFormat = (time) => {
    let [timePart, ampm] = time.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (ampm === "PM" && hours !== "12") {
        hours = parseInt(hours, 10) + 12;
    } else if (ampm === "AM" && hours === "12") {
        hours = "00";
    }

    return `${hours}:${minutes}`;
};

export const AppointmentsProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/appointments");
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error("Failed to fetch appointments:", error);
        }
    };

    const addAppointment = async (appointment) => {
        try {
            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(appointment),
            });
            if (response.ok) fetchAppointments();
        } catch (error) {
            console.error("Failed to add appointment:", error);
        }
    };

    const updateAppointment = async (appointment) => {
        try {
            await fetch(`http://localhost:5000/api/appointments/${appointment.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(appointment),
            });
            fetchAppointments();
        } catch (error) {
            console.error("Failed to update appointment:", error);
        }
    };

    const deleteAppointment = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/appointments/${id}`, { method: "DELETE" });
            fetchAppointments();
        } catch (error) {
            console.error("Failed to delete appointment:", error);
        }
    };

    return (
        <AppointmentsContext.Provider
            value={{
                appointments,
                addAppointment,
                updateAppointment,
                deleteAppointment,
                convertTo12HourFormat,
                convertTo24HourFormat,
            }}
        >
            {children}
        </AppointmentsContext.Provider>
    );
};
