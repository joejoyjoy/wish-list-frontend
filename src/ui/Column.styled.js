import styled from "styled-components";

export const Container = styled.section`
  display: block;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colorSecondary};
`;
