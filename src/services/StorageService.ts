const LS_KEY = "OUR_ZOO";

export const getZoo = <T>(): T[] => {
  let zooList = localStorage.getItem(LS_KEY) || "[]";
  return JSON.parse(zooList) as T[];
};

export const setZoo = <T>(newZoo: T): void => {
  localStorage.setItem(LS_KEY, JSON.stringify(newZoo));
};
