import styled from "styled-components";

export const ImgOneWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  border: 0.8rem solid var(--signal);
  margin: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ImgTwoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  border: 0.8rem solid var(--signal);
  margin: 0.5rem;
`;

export const ImgOne = styled.img`
  width: 100%;
  object-fit: cover;
`;
