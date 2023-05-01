import styled from "styled-components";

export const Main = styled.main`
  margin-top: 25px;

  @media only screen and (max-width: 500px)  {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 372px;

  @media only screen and (max-width: 500px)  {
    max-width: auto;
    width: 100%;
    margin: 0;
  }
`;