import React from 'react'
import TeacherTable from './TeacherTable'
import data from '../data/teachers_data.json'
import styled from 'styled-components'
const TeacherWrapper = styled.div`
    padding:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const H1 = styled.h1`
    font-style:italic;
`
export default function index() {
  return (
    <TeacherWrapper>
        <H1>Teachers Details</H1>
        <TeacherTable teachers_data={data}/>
    </TeacherWrapper>
  )
}
