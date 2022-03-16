import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter first name"
          name="firstName"
          onChange={handleEditFormChange}
          value={editFormData.firstName}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter last name"
          name="lastName"
          onChange={handleEditFormChange}
          value={editFormData.lastName}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter phone number"
          name="number"
          onChange={handleEditFormChange}
          value={editFormData.number}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter address"
          name="address"
          onChange={handleEditFormChange}
          value={editFormData.address}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
