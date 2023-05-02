import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    stroke: black;
    fill: black;
    color: black;
    cursor: pointer;

    & path {
      color: black;
    }
  }
  
`;

export const Title = styled.input`
  color: ${({ theme }) => theme.textColorPrimary};
  width: calc(100% - 28px);
  font-weight: 500;
  display: block;
  padding: 6px 2px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #767676;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  display: block;
`;

export const Desc = styled.textarea`
  resize: vertical;
  width: calc(100% - 6px);
  min-height: 80px;
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 500;
  font-size: 14px;
  display: block;
  padding: 6px 2px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #767676;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.textColorError};
  font-weight: 600;
`;
