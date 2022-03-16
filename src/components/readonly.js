import React from "react";
import "./readonly.css";

const ReadOnly = ({ value, handleEditClick }) => {
  return (
    <tr>
      <td>{value.firstName}</td>
      <td>{value.lastName}</td>
      <td>{value.number}</td>
      <td>{value.address}</td>
      <td>
        {value.status === true ? (
          <div className="trueStatus"></div>
        ) : (
          <div className="falseStatus"></div>
        )}
      </td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, value)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
