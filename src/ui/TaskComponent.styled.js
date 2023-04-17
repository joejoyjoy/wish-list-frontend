import styled from "styled-components";

export const Title = styled.span`
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 600;
  display: block;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  display: block;
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  display: block;
`;
