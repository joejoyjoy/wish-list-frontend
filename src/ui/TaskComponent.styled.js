import styled from "styled-components";

export const Title = styled.a`
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 600;
  width: fit-content;
  display: block;

  &:hover {
    color: #2f81f7;
    text-decoration: underline;
  }
`;

export const Date = styled.a`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 10px;
  display: block;
`;

export const Desc = styled.a`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  width: fit-content;
  font-size: 14px;
  display: block;
`;
