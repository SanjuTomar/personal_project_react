import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

function Header(props) {
  return (
    <Title>
      <div>Header section Indevelopment..</div>
    </Title>
  );
}

export default React.memo(Header);
