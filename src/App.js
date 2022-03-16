import React, { useState, Fragment } from "react";
import "./App.css";
import EditableRow from "./components/editrow";
import ReadOnly from "./components/readonly";
import { nanoid } from "nanoid";

function App() {
  const [values, setValues] = useState([
    {
      id: 1,
      firstName: "Astitva",
      lastName: "Chauhan",
      number: "9911",
      address: "BYes",
    },
  ]);

  const [addFormData, setAddFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    number: "",
    address: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      number: contact.number,
      address: contact.address,
    };

    setEditFormData(formValues);
  };

  const [editFormData, setEditFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    number: "",
    address: "",
    status: false,
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      number: addFormData.number,
      address: addFormData.address,
    };

    const newContacts = [...values, newContact];
    setValues(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      number: editFormData.number,
      address: editFormData.address,
    };

    editedContact.status = true;
    //console.log(editedContact);
    const newContacts = [...values];

    const index = values.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    console.log(newContacts);
    setValues(newContacts);
    setEditContactId(null);
  };

  return (
    <div className="form-container">
      <h1 className="main-header">Enter Details</h1>
      <form onSubmit={handleAddFormSubmit} className="form-body">
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter first name"
          onChange={handleAddFormChange}
          className="inputForm"
        ></input>
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter last name"
          onChange={handleAddFormChange}
          className="inputForm"
        ></input>
        <input
          type="text"
          name="number"
          required="required"
          placeholder="Phone number"
          onChange={handleAddFormChange}
          className="inputForm"
        ></input>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address"
          onChange={handleAddFormChange}
          className="inputForm"
        ></input>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Number</th>
              <th>Address</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {values.map((value) => (
              <Fragment>
                {editContactId === value.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadOnly value={value} handleEditClick={handleEditClick} />
                )}
              </Fragment>
            ))}
          </tbody>
          <tbody></tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
