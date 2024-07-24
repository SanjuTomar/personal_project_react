import React from "react";
import styled from "styled-components";

const TableComponent = styled.table`
  tr {
    border: 1px solid red;
    border-right: 1px solid #ccc;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.8);
  }

  th {
    background-color: #c9f3c9;
  }
`;

function Table(props) {
  return (
    <div style={{maxWidth:'80%', overflowX:'auto', margin:'0 auto', padding:'20px'}}><TableComponent>
      <thead>
        <tr>
          <th>Name</th>
          <th>Father's Name</th>
          <th>Mother's Name</th>
          <th>Date of Birth</th>
          <th>Aadhar Number</th>
          <th>Blood Group</th>
          <th>Address</th>
          <th>Active</th>
          <th>Class</th>
          <th>Section</th>
          <th>Transport</th>
          <th>Mobile</th>
          <th>ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((student, index) => (
          <tr
            style={{
              backgroundColor: student.isRead ? "#80808026" : "white",
              border: "1px solid green",
            }}
            key={index}
            onClick={() => props.readRecord(index)}
          >
            <td>{student.name}</td>
              <td>{student.father_name}</td>
              <td>{student.mother_name}</td>
              <td>{student.dob}</td>
              <td>{student.adhar_no}</td>
              <td>{student.blood_group}</td>
              <td>{student.address}</td>
              <td>{student.isActive}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.transport}</td>
              <td>{student.Mobile}</td>
              <td>{student.Id}</td>
            <button type="button" onClick={() => props.deleteRecord(index)}>
              Delete
            </button>
          </tr>
        ))}
      </tbody>
    </TableComponent>
    </div>
  );
}

export default React.memo(Table);
