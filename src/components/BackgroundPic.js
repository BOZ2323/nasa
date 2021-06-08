import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
`;

const SPACE_PIC =
  "http://images.all-free-download.com/images/graphiclarge/space_background_astronaut_spaceship_flag_icons_ornament_6828811.jpg";

const BackgroundPic = () => {
  return (
    <StyledWrapper>
      <img src={SPACE_PIC} alt="Cartoon character of Astronaut in Space" />
    </StyledWrapper>
  );
};

export default BackgroundPic;
