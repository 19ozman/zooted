import { SyntheticEvent } from "react";
import DINO from "../assets/images/dino.png";

const FALLBACK_IMAGE = DINO;

export const imageOnLoadHandler = (
  e: SyntheticEvent<HTMLImageElement, Event>
) => {
  console.log(`Images ${e} loaded`);
};

export const imageOnErrorHandler = (
  e: SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = FALLBACK_IMAGE;
  console.log(`Image failed loaded replacement instead`);
};
