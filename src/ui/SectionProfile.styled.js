import styled from "styled-components";

export const SectionProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: 0.4rem 0;
  div {
    display: flex;
    gap: 5px;
  }
`;

export const ProfileDetails = styled(SectionProfile)`
  color: ${({ theme }) => theme.colorInfo};
  img {
    object-fit: cover;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
