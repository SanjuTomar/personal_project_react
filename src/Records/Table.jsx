import React from 'react'
import styled from 'styled-components'

const TableStyle = styled.table`
  width: 80%;
  margin-left: 180px;

  tr{
  border:1px solid red;
  border-right:1px solid #ccc;
  }
 
  th, td {
    
    padding: 8px; 
    text-align: left;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.8);
  }

  th {
    background-color: #f2f2f2;
  }
`;



function Table(props) {


console.log("Table Component")
  return (
    <>
   

   <TableStyle>
   
    <thead >
        <tr >
            <th>Name{props.allNamesCount}</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {props.data.map((val, index) => (
            <tr style={{backgroundColor:val.isRead?'grey':'white',border:'1px solid green'}} key={index}>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <button type="button" onClick={() => props.deleteRecord(index)}>Delete</button>
                <button style={{margin:"10px"}} type="button" onClick={() => props.readRecord(index)}>View</button>
            </tr>
        ))}
    </tbody>
</TableStyle>
</>
  )
}

export default React.memo(Table)