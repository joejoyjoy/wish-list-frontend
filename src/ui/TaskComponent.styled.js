import styled from "styled-components";

export const TaskContent = styled.div`
  padding: 8px;
  color: ${({ theme }) => theme.textColorPrimary};
`;

export const TaskStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	flex-basis: 40px;
	flex-grow: 0;
	flex-shrink: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: ${({ theme }) => theme.textColorPrimary};
  
  & svg {
    width: 21px;
    height: 21px;
  }
`;

export const TaskTitle = styled.a`
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 600;
  display: block;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: 400px)  {
    width: 280px;
  }

  @media only screen and (max-width: 370px)  {
    width: 260px;
  }
`;

export const Date = styled.a`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  display: block;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Desc = styled.a`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
  font-size: 14px;
  display: block;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NoTasks = styled.div`
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;