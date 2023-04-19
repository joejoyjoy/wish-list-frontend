import styled from "styled-components";

export const Title = styled.a`
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 600;
  display: block;
`;

export const Date = styled.a`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  display: block;
`;

export const Desc = styled.a`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  display: block;
`;
