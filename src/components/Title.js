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
`;
const StyledSubtitle = styled.h1`
    color: white;
    font-size: 2rem;
    margin: 0;
    padding-bottom: 2rem;
}
`;

const Title = ({ showWeeklySpacePic }) => {
  return (
    <StyledWrapper data-testid="test-2">
      <StyledTitle>NASA</StyledTitle>
      <StyledSubtitle>
        {showWeeklySpacePic ? "Daily Astronomy pictures from the last week" : "Daily Astronomy picture of the day"}
      </StyledSubtitle>
    </StyledWrapper>
  );
};

export default Title;
