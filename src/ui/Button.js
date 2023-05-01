import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: none;
  cursor: pointer;
  border: none;

  @media only screen and (max-width: 500px)  {
    gap: 4px;
  }
`;

export const AddButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colorSecondary};
  border-radius: 10px;
  font-size: 26px;
  padding: 4px 12px;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColorLightDark};
  }
`;

export const EditButton = styled(Button)`
  padding: 0px 8px;
  height: 28px;
  gap: 4px;
  font-size: 12px;
  color: rgb(201, 209, 217);
  background-color: ${props => props.editBtnBackground};
  border: ${props => props.editBtnBorder};
  border-radius: 6px;
  padding: 10px;
  transition: all 0.4s;

  &:hover {
    background-color: ${props => props.editBtnHover};
    border-color: rgb(139, 148, 158);
  }
`;

export const DeleteButton = styled(Button)`
  gap: 4px;
  height: 43px;
  padding: 12px;
  font-weight: 700;
  font-size: 14px;
  color: #f85149;
  border: 1px solid #f8514966;
  border-radius: 6px;
  background-color: #f851491a;
  transition: all 0.4s;

  &:hover {
    background-color: #cc2c2447;
    border-color: #f85149bf;
  }
`;

export const SaveButton = styled(Button)`
  gap: 4px;
  height: 43px;
  padding: 12px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  border: 1px solid ${props => props.saveBtnBorder};
  border-radius: 6px;
  background-color: ${props => props.saveBtnBackground};
  transition: all 0.4s;

  &:hover {
    background-color: ${props => props.saveBtnBackgroundHover};
    border-color: ${props => props.saveBtnBorderHover};
  }
`;