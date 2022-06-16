import { Link } from "react-router-dom";
import { BackToSpan, NotFoundSpan } from "../StyledComponents/Headings";
import { NotFoundWrap } from "../StyledComponents/Wrappers";

export const NotFound = () => {
  const ESC = "verkar som någon har rymt!";
  const BACK = "tillbaka till gården";

  return (
    <>
      <NotFoundWrap>
        <NotFoundSpan>{ESC}</NotFoundSpan>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BackToSpan>{BACK}</BackToSpan>
        </Link>
      </NotFoundWrap>
    </>
  );
};
