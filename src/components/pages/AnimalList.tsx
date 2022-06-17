import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ZooContext } from "../../contexts/ZooContext";
import { IAnimal } from "../../models/IAnimal";
import {
  imageOnLoadHandler,
  imageOnErrorHandler,
} from "../../services/ImageHandler";
import { getZoo, setZoo } from "../../services/StorageService";
import {
  InfoSpanOne,
  NameSpanOne,
  StyledLoading,
} from "../StyledComponents/Headings";
import { ImgOneWrap, ImgOne } from "../StyledComponents/Images";
import {
  AnimalCnt,
  AnimalWrap,
  InfoWrap,
  LoadWrap,
} from "../StyledComponents/Wrappers";

export const AnimalList = () => {
  const context = useContext(ZooContext);
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://animals.azurewebsites.net/api/animals";

  const MSG = "letting out doggos and cattos!";

  useEffect(() => {
    let theZoo: IAnimal[] = getZoo<IAnimal>();
    if (theZoo.length !== 0) {
      setAnimals(getZoo);
      setLoading(false);
      console.log("finns något i localstorage, hämtar och sätter");
      context.updateContext({ ...context, animals: animals });
    } else {
      console.log("fetching animals...");

      axios.get<IAnimal[]>(URL).then((res) => {
        setZoo(res.data);
        setAnimals(getZoo);
        context.updateContext({ ...context, animals: res.data });
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      <AnimalCnt>
        {loading ? (
          <LoadWrap>
            <StyledLoading>{MSG}</StyledLoading>{" "}
          </LoadWrap>
        ) : null}
        {animals.map((animal) => {
          return (
            <AnimalWrap key={animal.id}>
              <Link
                to={"/animal/" + animal.id}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NameSpanOne>{animal.name}</NameSpanOne>
                <ImgOneWrap>
                  <ImgOne
                    onLoad={imageOnLoadHandler}
                    onError={imageOnErrorHandler}
                    alt={animal.name}
                    src={animal.imageUrl}
                  ></ImgOne>
                </ImgOneWrap>
              </Link>
              <InfoWrap>
                <InfoSpanOne>{animal.shortDescription}</InfoSpanOne>
              </InfoWrap>
            </AnimalWrap>
          );
        })}
      </AnimalCnt>
    </>
  );
};
