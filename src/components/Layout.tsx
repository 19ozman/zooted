import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ZooContext } from "../contexts/ZooContext";
import { IAnimal } from "../models/IAnimal";
import { setZoo, getZoo } from "../services/StorageService";
import { Home } from "./pages/Home";

import { FootSpan, HeadSpan, StyledLoading } from "./StyledComponents/Headings";
import {
  FootWrap,
  HeadWrap,
  LoadWrap,
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
