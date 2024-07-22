import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

function Header(props) {

console.log("5 Header--",props);
  return (
    <Title>
    <div>Daily Challenge Header</div>
    </Title>
  )
}

export default React.memo(Header)