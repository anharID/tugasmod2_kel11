import styled, { css } from "styled-components";
export default styled.input`
  font-family: "roboto";
  font-size: 1.3rem;
  border: 2px solid;
  border-radius: 5px;
  padding: 7px 10px;
  background: white;
  color: white;
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.border};
    `}
  ${(props) =>
    props.background &&
    css`
      background-color: ${(props) => props.background};
    `}
`;
