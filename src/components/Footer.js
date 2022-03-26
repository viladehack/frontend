import signature from "../img/Firma.png";
import styled from "styled-components";

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: fixed;
  left: 0px;
  bottom: 0.5rem;
  font-weight: bold;
  width: 100vw;
  background-color: transparent;
`;

const Signature = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const P = styled.p`
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: smaller;
  color: black;
`;

function Footer() {
  const currantYear = new Date().getFullYear();
  return (
    <FooterFlex>
      <P>Tots els drets reservats Copyright &copy; {currantYear} </P>
      <Signature src={signature} alt="Happy Guiri"></Signature>
    </FooterFlex>
  );
}

export default Footer;
