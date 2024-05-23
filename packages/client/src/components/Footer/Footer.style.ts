import styled from "styled-components";

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 100px;
  background: #e9e9e9;
  margin-top: auto;
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }
  p {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
`;
