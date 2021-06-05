import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
`;
const StyledBox = styled.div`
  padding: 4em;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

const DailySpacePic = ({ data }) => {
  console.log("data in DailySpacePic", data);
  return (
    <StyledWrapper>
      <StyledBox>
        <StyledImage src={data.hdurl} alt={data.explanation} />
      </StyledBox>
    </StyledWrapper>
  );
};

export default DailySpacePic;
