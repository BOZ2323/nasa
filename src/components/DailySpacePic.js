import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
`;
const StyledBox = styled.div`
  padding: 2rem;
`;
const StyledImage = styled.img`
  width: 60rem;
  object-fit: cover;
`;
const StyledText = styled.article`
  font-size: 13px;
  line-height: 1.3rem;
  width: 30rem;
  padding: 2rem;
  color: grey;
`;

const DailySpacePic = ({ data }) => {
  console.log("data in DailySpacePic", data);
  return (
    <StyledWrapper>
      <StyledText>{data.explanation}</StyledText>
      <StyledBox>
        <StyledImage src={data.hdurl} alt={data.explanation} />
      </StyledBox>
    </StyledWrapper>
  );
};

export default DailySpacePic;
