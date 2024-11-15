import React, { useState, useEffect } from 'react';
import './Css/PatientDetails.css';
import Header from './Componets/Admin_Header';
import Footer from './Componets/Footer';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa'; // Importing icons
import Alert from './Alert';

const PatientDetails = () => {
  const [patients, setPatients] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '234-567-8901' },
    { id: 3, firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', phone: '345-678-9012' },
    { id: 4, firstName: 'Michael', lastName: 'Williams', email: 'michael.williams@example.com', phone: '456-789-0123' },
    { id: 5, firstName: 'Sarah', lastName: 'Brown', email: 'sarah.brown@example.com', phone: '567-890-1234' },
    { id: 6, firstName: 'David', lastName: 'Jones', email: 'david.jones@example.com', phone: '678-901-2345' }
  ]);

  const [editingPatientId, setEditingPatientId] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleEditToggle = (id) => {
    setEditingPatientId(id);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, [name]: value } : patient
      )
    );
  };

  const handleSave = (id) => {
    setEditingPatientId(null);
    setAlert({ message: 'Patient details updated successfully!', type: 'success' });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className="patient-details-wrapper">
      <Header />
      <br />
      <div className="patient-details-container">
      <h2 className="text-center page-title mb-4 pt-3">Patients Details</h2>
        {alert && <Alert message={alert.message} type={alert.type} />}
        <table className="patient-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>
                  {editingPatientId === patient.id ? (
                    <input
                      type="text"
                      name="firstName"
                      value={patient.firstName}
                      onChange={(e) => handleChange(e, patient.id)}
                      className="editable-field"
                    />
                  ) : (
                    patient.firstName
                  )}
                </td>
                <td>
                  {editingPatientId === patient.id ? (
                    <input
                      type="text"
                      name="lastName"
                      value={patient.lastName}
                      onChange={(e) => handleChange(e, patient.id)}
                      className="editable-field"
                    />
                  ) : (
                    patient.lastName
                  )}
                </td>
                <td>
                  {editingPatientId === patient.id ? (
                    <input
                      type="email"
                      name="email"
                      value={patient.email}
                      onChange={(e) => handleChange(e, patient.id)}
                      className="editable-field"
                    />
                  ) : (
                    patient.email
                  )}
                </td>
                <td>
                  {editingPatientId === patient.id ? (
                    <input
                      type="tel"
                      name="phone"
                      value={patient.phone}
                      onChange={(e) => handleChange(e, patient.id)}
                      className="editable-field"
                    />
                  ) : (
                    patient.phone
                  )}
                </td>
                <td>
                  <DropdownButton
                    id={`dropdown-button-${patient.id}`}
                    title="Edit"
                    variant="secondary"
                  >
                    {editingPatientId === patient.id ? (
                      <>
                        <Dropdown.Item onClick={() => handleSave(patient.id)}>
                          <FaSave /> Save
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setEditingPatientId(null)}>
                          <FaTimes /> Cancel
                        </Dropdown.Item>
                      </>
                    ) : (
                      <Dropdown.Item onClick={() => handleEditToggle(patient.id)}>
                        <FaEdit /> Edit
                      </Dropdown.Item>
                    )}
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default PatientDetails;