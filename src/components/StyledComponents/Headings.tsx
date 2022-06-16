import styled from "styled-components";

export const HeadSpan = styled.span`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
  text-indent: 0.3rem;
  text-transform: uppercase;
  margin: 0;
`;

export const FootSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-indent: 0.2rem;
  text-transform: uppercase;
  margin: 0;
`;
export const NotFoundSpan = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: var(--signal);
  text-indent: 0.3rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

export const BackToSpan = styled.span`
  display: flex;
  justify-content: center;
  width: auto;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--signal);
  color: var(--white);
  padding: 0.7rem;
  text-indent: 0.3rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  margin: 1rem;
  &:hover {
    transform: scale(0.98);
  }
`;

export const NameSpanOne = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: var(--black);
  margin: 0.5rem;
`;

export const InfoSpanOne = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--black);
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  text-align: center;
`;

export const InfoSpanTWo = styled.span`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--black);
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  text-align: center;
`;

export const LastFedSpan = styled.span`
  font-size: 0.8;
  font-weight: 500;
  color: var(--signal);
  text-align: center;
  text-transform: uppercase;
`;
