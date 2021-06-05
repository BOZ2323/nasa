import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
color: white;
font-size: 3rem;
`
const StyledSubtitle = styled.h1`
color: white;
font-size: 1rem;
`

const Title = () => {
  return (
    <StyledWrapper>
      <StyledTitle>NASA</StyledTitle>
      <StyledSubtitle>Space picture of the day</StyledSubtitle>
    </StyledWrapper>
  );
};

export default Title;
