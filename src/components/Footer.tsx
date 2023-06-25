import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  font-size: 0.75rem;
`;

const Footer = (): JSX.Element => {
  return(
    <StyledFooter>
      <p>Made by Adam Hemzal</p>
    </StyledFooter>
  )
}

export default Footer;