import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 30px;
`;

export const GridItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
  border-radius: 4px;

  h2 {
    margin: 5px 20px;
  }

  div {
    margin-bottom: 5px;
  }
`;

export const GridDoneItems = styled(GridItems)`
  div {
    background-color: ${({ theme }) => theme.colorPrimary};

    & .date {
      color: ${({ theme }) => theme.textColorSecondaryGreen};
    }

    & .desc {
      color: ${({ theme }) => theme.textColorSecondaryGreen};
    }
  }
`;

export const StickyNote = styled.div`
  width: calc(100%-30px);
  padding: 15px;
  background-color: ${({ theme }) => theme.colorSecondary};
  margin: 0;
  border-radius: 20px;

  & .title {
    color: ${({ theme }) => theme.textColorPrimary};
    font-weight: 600;
    display: block;
  }

  & .date {
    color: ${({ theme }) => theme.textColorSecondary};
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
  }

  & .desc {
    color: ${({ theme }) => theme.textColorSecondary};
    font-weight: 500;
    font-size: 14px;
    display: block;
  }
`;