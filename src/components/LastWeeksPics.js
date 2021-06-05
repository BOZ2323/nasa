import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
`;
const StyledBox = styled.div`
  padding: 2rem;
`;
const StyledImage = styled.img`
  width: 20rem;
  object-fit: cover;
`;
const StyledText = styled.article`
  font-size: 13px;
  line-height: 1.3rem;
  width: 30rem;
  padding: 2rem;
  color: grey;
`;

const LastWeeksPics = ({seven}) => {
    return (
        <StyledWrapper>
        <StyledText>{seven.explanation}</StyledText>
        <StyledBox>
          <StyledImage src={seven.hdurl} alt={seven.explanation} />
        </StyledBox>
      </StyledWrapper>
    )
}

export default LastWeeksPics
