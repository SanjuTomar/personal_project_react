import React, { useState } from 'react';
import styled from 'styled-components';

// Utility function to format the date
const formatDate = (date) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Sample data for different classes and sections
const classData = {
    'IV-B': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 1}`,
      father_name: `Father ${index + 1}`,
      rollno: index + 1,
      status: 'Absent', // Default status
    })),
    'V-A': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 11}`,
      father_name: `Father ${index + 11}`,
      rollno: index + 11,
      status: 'Absent', // Default status
    })),
    'VI-A': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 21}`,
      father_name: `Father ${index + 21}`,
      rollno: index + 21,
      status: 'Absent', // Default status
    })),
    'VI-B': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 31}`,
      father_name: `Father ${index + 31}`,
      rollno: index + 31,
      status: 'Absent', // Default status
    })),
    'VII-A': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 41}`,
      father_name: `Father ${index + 41}`,
      rollno: index + 41,
      status: 'Absent', // Default status
    })),
    'VII-B': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 51}`,
      father_name: `Father ${index + 51}`,
      rollno: index + 51,
      status: 'Absent', // Default status
    })),
    'VIII-A': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 61}`,
      father_name: `Father ${index + 61}`,
      rollno: index + 61,
      status: 'Absent', // Default status
    })),
    'VIII-B': Array(10).fill(null).map((_, index) => ({
      student_name: `Student ${index + 71}`,
      father_name: `Father ${index + 71}`,
      rollno: index + 71,
      status: 'Absent', // Default status
    })),
  };
  

// Styled components
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #333;
`;

const DateText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #666;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #f4f4f4;
  color: #333;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Button = styled.button`
  padding: 6px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  color: white;
  background-color: ${props => props.bgColor || '#2196F3'};
  
  &:hover {
    opacity: 0.9;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #4CAF50;
`;

const ConfirmButton = styled(Button)`
  background-color: #2196F3;
`;

const CancelButton = styled(Button)`
  background-color: #f44336;
`;

const Preview = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const PreviewTable = styled.table`
  margin-bottom: 20px;
`;
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:2rem;
  margin-bottom: 0.8rem;
`;

const StudentAttendance = () => {
  // State to hold student records
  const [students, setStudents] = useState(classData['IV-B']);
  const [selectedClass, setSelectedClass] = useState('IV-B');
  const [showPreview, setShowPreview] = useState(false);

  // Handle class selection
  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
    setStudents(classData[selectedClass] || classData['IV-B']);
  };

  // Toggle the status of a student
  const toggleStatus = (index, status) => {
    const updatedStudents = students.map((student, i) =>
      i === index ? { ...student, status } : student
    );
    setStudents(updatedStudents);
  };

  // Handle final submission
  const handleSubmit = () => {
    setShowPreview(true);
  };

  // Confirm the submission
  const confirmSubmit = () => {
    // Perform the submission logic here (e.g., sending data to an API)
    console.log('Submitting attendance:', students);
    setShowPreview(false);
    alert('Attendance submitted successfully!');
  };

  // Handle cancellation of the preview
  const handleCancel = () => {
    setShowPreview(false);
  };

  // Get current date
  const today = new Date();

  return (
    <Container>
      <Header>
        <Title>Student Attendance</Title>
        
      </Header>
      <ActionWrapper>
      <DateText>{formatDate(today)}</DateText>
      <Dropdown value={selectedClass} onChange={handleClassChange}>
          <option value="IV-B">IV-B</option>
          <option value="V-A">V-A</option>
          <option value="V-B">V-B</option>
          <option value="VI-A">VI-A</option>
          <option value="VI-B">VI-B</option>
          <option value="VII-A">VII-A</option>
          <option value="VII-B">VII-B</option>
          <option value="VIII-A">VIII-A</option>
          <option value="VIII-B">VIII-B</option>
        </Dropdown>
      </ActionWrapper>
      <Table>
        <thead>
          <tr>
            <TableHeader>Student Name</TableHeader>
            <TableHeader>Father Name</TableHeader>
            <TableHeader>Roll No</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <TableRow key={student.rollno}>
              <TableData>{student.student_name}</TableData>
              <TableData>{student.father_name}</TableData>
              <TableData>{student.rollno}</TableData>
              <TableData>{student.status}</TableData>
              <TableData>
                <Button onClick={() => toggleStatus(index, 'Present')} bgColor="#4CAF50">Present</Button>
                <Button onClick={() => toggleStatus(index, 'Absent')} bgColor="#f44336">Absent</Button>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>

      {showPreview && (
        <Preview>
          <h2>Preview Attendance</h2>
          <PreviewTable>
            <thead>
              <tr>
                <TableHeader>Student Name</TableHeader>
                <TableHeader>Roll No</TableHeader>
                <TableHeader>Status</TableHeader>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <TableRow key={student.rollno}>
                  <TableData>{student.student_name}</TableData>
                  <TableData>{student.rollno}</TableData>
                  <TableData>{student.status}</TableData>
                </TableRow>
              ))}
            </tbody>
          </PreviewTable>
          <ConfirmButton onClick={confirmSubmit}>Confirm</ConfirmButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </Preview>
      )}
    </Container>
  );
};

export default StudentAttendance;
