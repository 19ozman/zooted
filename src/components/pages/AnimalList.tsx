import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ZooContext } from "../../contexts/ZooContext";
import { IAnimal } from "../../models/IAnimal";
import {
  imageOnLoadHandler,
  imageOnErrorHandler,
} from "../../services/ImageHandler";
import { getZoo } from "../../services/StorageService";
import { InfoSpanOne, NameSpanOne } from "../StyledComponents/Headings";
import { ImgOneWrap, ImgOne } from "../StyledComponents/Images";
import { AnimalCnt, AnimalWrap, InfoWrap } from "../StyledComponents/Wrappers";

export const AnimalList = () => {
  const context = useContext(ZooContext);

  // useEffect(() => {
  //   let theZoo: IAnimal[] = getZoo<IAnimal>();
  //   if (theZoo.length > 0) return;
  // }, []);

  return (
    <>
      <AnimalCnt>
        {context.animals.map((animal) => {
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
