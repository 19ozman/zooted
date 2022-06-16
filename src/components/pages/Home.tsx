import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ZooContext } from "../../contexts/ZooContext";
import { IAnimal } from "../../models/IAnimal";
import { setZoo, getZoo } from "../../services/StorageService";
import { StyledLoading } from "../StyledComponents/Headings";
import { LoadWrap } from "../StyledComponents/Wrappers";

export const Home = () => {
  const context = useContext(ZooContext);
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://animals.azurewebsites.net/api/animals";

  const MSG = "letting out doggos and cattos!";

  useEffect(() => {
    if (animals.length !== 0) return;
    axios.get<IAnimal[]>(URL).then((res) => {
      setZoo(res.data);
      setAnimals(getZoo);
      context.updateContext({ ...context, animals: res.data });
      setLoading(false);
    });
  });

  return (
    <>
      {loading ? (
        <LoadWrap>
          <StyledLoading>{MSG}</StyledLoading>{" "}
        </LoadWrap>
      ) : null}
      <Outlet></Outlet>
    </>
  );
};
