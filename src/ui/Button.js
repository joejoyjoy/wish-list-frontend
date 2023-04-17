import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: none;
  cursor: pointer;
  border: none;
`;

export const AddButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colorSecondary};
  border-radius: 10px;
  padding: 10px;
  transition: all 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColorDark};
  }
`;