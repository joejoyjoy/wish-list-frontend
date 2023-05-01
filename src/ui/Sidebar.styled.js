import styled from "styled-components";


/**** Sidebar ****/
export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(90%, 520px);
  background-color: ${({ theme }) => theme.backgroundColorLightDark};
  border-radius: 12px 0px 0px 12px;
  background-color: #161b22;
  box-shadow: #010409 0px 8px 24px;
  transform: translateX(+100%);
  transition: all 0.4s;
  z-index: 30;

  &.sidebar--open {
    transform: translateX(0%);
  }

  @media only screen and (max-width: 500px)  {
    min-width: 100%;
    border-radius: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #21262d;
  border-top-left-radius: 12px;
  background-color: #0d1117;

  & input {
    width: calc(100% - 130px);
    padding: 6px;
    background: none;
    border: 0;
    font-size: 19px;
    font-weight: 600;
    border: 1px solid #f0f6fc19;
    border-radius: 6px;
    outline: none;
    transition: all .2s ease-out;

    &:focus {
      border: 1px solid #2f81f7;
      box-shadow: #2f81f7 0px 0px 0px 1px inset;
    }

    &:disabled {
      border: 1px solid transparent;
      box-shadow: none;
    }
  }

  & div {
    display: flex;
    gap: 15px;

    & svg {
      width: 16px;
      height: 16px;
  
      & path {
      color: ${({ theme }) => theme.colorInfo};
      }
    }
  }

  @media only screen and (max-width: 500px)  {
    padding: 10px;

    & input {
      width: calc(100% - 105px);
      padding: 2px;
    }

    & div {
      gap: 5px;
    }
  }
`;

export const Body = styled.div`
  padding: 30px;
  border-bottom: 1px solid #21262d;
  background-color: #0d1117;

  & textarea {
    width: calc(100% - 25px);
    padding: 10px;
    background: none;
    resize: vertical;
    min-height: 120px;
    border: 1px solid #f0f6fc19;
    border-radius: 6px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    transition: box-shadow .2s ease-out;

    &:focus {
      border: 1px solid #2f81f7;
      box-shadow: #2f81f7 0px 0px 0px 1px inset;
    }

    &:disabled {
      border: 1px solid transparent;
      box-shadow: none;
    }
  }

  @media only screen and (max-width: 500px)  {
    padding: 10px;

    & textarea {
      width: calc(100% - 10px);
      padding: 2px;
    }

    & div {
      gap: 5px;
    }
  }
`;

export const Footer = styled.section`
  padding: 30px;
  background-color: #161b22;
  border-bottom-left-radius: 12px;

  & div {
    display: flex;
    justify-content: right;
    gap: 20px;
  }

  @media only screen and (max-width: 500px)  {
    padding-bottom: 50px;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.colorInfo};

  img {
    object-fit: cover;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

/**** Backdrop ****/
export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(110, 118, 129, 0.4);
  display: none;
  z-index: 10;

  &.backdrop--open {
    display: block;
  }
`;