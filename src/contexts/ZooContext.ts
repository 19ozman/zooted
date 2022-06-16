import { createContext } from "react";
import { IAnimal } from "../models/IAnimal";

export interface IZooContext {
  animals: IAnimal[];
  updateContext(updatedContext: IZooContext): void;
}

export const ZooContext = createContext<IZooContext>({
  animals: [],
  updateContext: () => {},
});
