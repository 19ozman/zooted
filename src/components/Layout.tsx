import { Outlet } from "react-router-dom";
import { FootSpan, HeadSpan } from "./StyledComponents/Headings";
import {
  FootWrap,
  HeadWrap,
  MainWrap,
  MegaWrap,
} from "./StyledComponents/Wrappers";
import "../index.css";

export const Layout = () => {
  const HEADER = "🦦our zoo";
  const FOOTER = "2022";
  const URL = "https://animals.azurewebsites.net/api/animals";

  return (
    <MegaWrap>
      <HeadWrap>
        <HeadSpan>{HEADER}</HeadSpan>
      </HeadWrap>
      <MainWrap>
        <Outlet></Outlet>
      </MainWrap>
      <FootWrap>
        <FootSpan>{FOOTER}</FootSpan>
      </FootWrap>
    </MegaWrap>
  );
};
