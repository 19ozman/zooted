const LS_KEY = "zoot";

export const getZoot = <T>(): T[] => {
  let zootList = localStorage.getItem(LS_KEY) || "[]";
  return JSON.parse(zootList) as T[];
};

export const setZoot = <T>(newZoot: T): void => {
  localStorage.setItem(LS_KEY, JSON.stringify(newZoot));
};
