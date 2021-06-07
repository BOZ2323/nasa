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

const DailySpacePic = ({ dailyData }) => {
  console.log("data in DailySpacePic", dailyData);
  return (
    <StyledWrapper>
      <StyledText>{dailyData.date}<span>{<br/>}</span>{dailyData.explanation}</StyledText>
      <StyledBox>
        <StyledImage src={dailyData.hdurl} alt={dailyData.explanation} />
      </StyledBox>
    </StyledWrapper>
  );
};

export default DailySpacePic;
