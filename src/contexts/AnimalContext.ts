import { createContext } from "react";
import { IAnimal } from "../models/IAnimal";

export interface IAnimalList {
  animals: IAnimal[];
}

export const defaultValue: IAnimalList = {
  animals: [],
};

export const AnimalContext = createContext(defaultValue);
