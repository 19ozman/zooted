import { Home } from "./Home";

import { FootSpan, HeadSpan } from "./StyledComponents/Headings";
import {
  FootWrap,
  HeadWrap,
  MainWrap,
  MegaWrap,
} from "./StyledComponents/Wrappers";

export const Layout = () => {
  const HEADER = "🦦our zoo";
  const FOOTER = "2022";

  return (
    <MegaWrap>
      <HeadWrap>
        <HeadSpan>{HEADER}</HeadSpan>
      </HeadWrap>
      <MainWrap>
        <Home></Home>
      </MainWrap>
      <FootWrap>
        <FootSpan>{FOOTER}</FootSpan>
      </FootWrap>
    </MegaWrap>
  );
};
