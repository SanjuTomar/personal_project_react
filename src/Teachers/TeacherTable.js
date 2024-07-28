import React from 'react';
import styled from 'styled-components';

// Styled components for table, table headers, and table data
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #dddddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
`;

const TeacherTable = ({ teachers_data }) => {
  return (
    <div>
      <h2>Teachers Information</h2>
      <Table>
        {/* Table header */}
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Father/Husband</TableHeader>
            {/* <TableHeader>Aadhar Card</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Qualification</TableHeader> */}
            <TableHeader>Grade</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Experience</TableHeader>
            {/* <TableHeader>Heading</TableHeader> */}
            {/* <TableHeader>Scope</TableHeader> */}
            <TableHeader>Subject</TableHeader>
          </tr>
        </thead>
        {/* Table body with teacher data */}
        <tbody>
          {teachers_data.map((teacher, index) => (
            <tr key={index}>
              <TableData>{teacher.name}</TableData>
              <TableData>{teacher["father/husband"]}</TableData>
              {/* <TableData>{teacher.adharcard}</TableData>
              <TableData>{teacher.age}</TableData>
              <TableData>{teacher.qualification}</TableData> */}
              <TableData>{teacher.grade}</TableData>
              <TableData>{teacher.id}</TableData>
              <TableData>{teacher.gender}</TableData>
              <TableData>{teacher.experience} years</TableData>
              {/* <TableData>{teacher.heading}</TableData>
              <TableData>{teacher.scope}</TableData> */}
              <TableData>{teacher.subject}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TeacherTable;
