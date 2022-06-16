import styled from "styled-components";

export const MegaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const FootWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 6vh;
`;

export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 83vh;
  border: 0.8rem solid var(--signal);
  overflow: auto;
  margin: auto;
`;

export const AnimalCnt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: auto;
  gap: 1.55rem;
`;

export const AnimalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnimalWrapTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  border-top: 0.1rem solid var(--signal);
  border-bottom: 0.1rem solid var(--signal);
`;

export const LongInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20rem;
  border-top: 0.1rem solid var(--signal);
  border-bottom: 0.1rem solid var(--signal);
  @media screen and (min-width: 1024px) {
    width: 40rem;
  }
`;

export const NotFoundWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;
