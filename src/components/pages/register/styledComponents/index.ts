import styled from "styled-components";
const Wrapper = styled.section`
  padding: 5em;
`;
const FieldsColumn = styled.section`
  max-width: 450px;
`;
const DividerText = styled.p`
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid grey;
    top: 55%;
    left: 0;
    z-index: 0;
  }
`;
const DividerLine = styled.span`
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 50;
`;

export { Wrapper, FieldsColumn, DividerLine, DividerText };
