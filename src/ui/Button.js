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

export const EditButton = styled(Button)`
  padding: 0px 8px;
  height: 28px;
  gap: 4px;
  font-size: 12px;
  color: rgb(201, 209, 217);
  background-color: rgb(33, 38, 45);
  border: 1px solid rgba(240, 246, 252, 0.1);
  border-radius: 6px;
  padding: 10px;
  transition: all 0.4s;

  &:hover {
    background-color: rgb(48, 54, 61);
    border-color: rgb(139, 148, 158);
  }
`;