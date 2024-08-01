import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';

// Sample data
const data = [
    { "id": "1", "student_id": "stu_a121", "date": "07-30-2024", "in_time": "08:00:00", "out_time": "15:00:00", "is_present": "yes" },
    { "id": "2", "student_id": "stu_a121", "date": "07-31-2024", "in_time": "08:15:00", "out_time": "15:15:00", "is_present": "no" },
    { "id": "3", "student_id": "stu_b456", "date": "07-30-2024", "in_time": "08:00:00", "out_time": "15:00:00", "is_present": "yes" },
    { "id": "4", "student_id": "stu_b456", "date": "07-31-2024", "in_time": "08:30:00", "out_time": "15:30:00", "is_present": "yes" }
    // Add more records as needed
];

// Styled Components
const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

const Dropdown = styled.select`
    width: 100%;
    margin: 10px 0;
    padding: 8px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f4f4f4;
    }
`;

const Heading = styled.h1`
    text-align: center;
`;

const Button = styled.button`
    padding: 10px 15px;
    margin: 10px 0;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

// React Component
const Attendance = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [className, setClassName] = useState('');
    const [section, setSection] = useState('');
    const [student, setStudent] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Populate dropdowns
    const getYears = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: 11 }, (_, i) => currentYear - i);
    };

    const getMonths = () => {
        return Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en', { month: 'long' }));
    };

    // Filter data
    const filterData = () => {
        let filtered = data;

        if (year) {
            filtered = filtered.filter(record => new Date(record.date).getFullYear() === parseInt(year));
        }

        if (month) {
            filtered = filtered.filter(record => new Date(record.date).getMonth() === parseInt(month) - 1);
        }

        if (student) {
            filtered = filtered.filter(record => record.student_id === student);
        }

        // Additional filters for class and section can be added here

        setFilteredData(filtered);
    };

    useEffect(() => {
        filterData();
    }, [year, month, student]);

    // Export data to Excel
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filteredData, {
            header: ["id", "student_id", "date", "in_time", "out_time", "is_present"],
        });
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Attendance Data");
        XLSX.writeFile(wb, "attendance_data.xlsx");
    };

    return (
        <Container>
            <Heading>Student Attendance</Heading>

            <label htmlFor="year">Select Year:</label>
            <Dropdown id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                {getYears().map(y => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </Dropdown>

            <label htmlFor="month">Select Month:</label>
            <Dropdown id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Select Month</option>
                {getMonths().map((m, i) => (
                    <option key={i} value={i + 1}>{m}</option>
                ))}
            </Dropdown>

            <label htmlFor="class">Select Class:</label>
            <Dropdown id="class" value={className} onChange={(e) => setClassName(e.target.value)}>
                <option value="">Select Class</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                {/* Add more classes as needed */}
            </Dropdown>

            <label htmlFor="section">Select Section:</label>
            <Dropdown id="section" value={section} onChange={(e) => setSection(e.target.value)}>
                <option value="">Select Section</option>
                <option value="sectionA">Section A</option>
                <option value="sectionB">Section B</option>
                {/* Add more sections as needed */}
            </Dropdown>

            <label htmlFor="student">Select Student:</label>
            <Dropdown id="student" value={student} onChange={(e) => setStudent(e.target.value)}>
                <option value="">Select Student</option>
                <option value="stu_a121">Student A</option>
                <option value="stu_b456">Student B</option>
                {/* Add more students as needed */}
            </Dropdown>

            <Button onClick={exportToExcel}>Export Attendance</Button>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student ID</th>
                        <th>Date</th>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Present</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(record => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.student_id}</td>
                            <td>{record.date}</td>
                            <td>{record.in_time}</td>
                            <td>{record.out_time}</td>
                            <td>{record.is_present}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Attendance;
