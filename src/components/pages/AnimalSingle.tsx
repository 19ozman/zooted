import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ZooContext } from "../../contexts/ZooContext";
import { IAnimal } from "../../models/IAnimal";
import {
  imageOnLoadHandler,
  imageOnErrorHandler,
} from "../../services/ImageHandler";
import { getZoo, setZoo } from "../../services/StorageService";
import { FeedBtn } from "../StyledComponents/Buttons";
import {
  BackToSpan,
  InfoSpanTWo,
  LastFedSpan,
  NameSpanOne,
} from "../StyledComponents/Headings";
import { ImgOne, ImgTwoWrap } from "../StyledComponents/Images";
import {
  AnimalCnt,
  AnimalWrapTwo,
  LongInfoWrap,
} from "../StyledComponents/Wrappers";

export const AnimalSingle = () => {
  const [animal, setAnimal] = useState<IAnimal>();
  const [getApi, setGetApi] = useState(false);

  const context = useContext(ZooContext);

  const params = useParams();
  const zooParams: string | undefined = params.id;

  const FED_LAST = "senast matad: ";
  const FED_THANKS = "tack för maten!";
  const BTN_TXT = "mata mig";
  const BACK = "tillbaka";

  const URL = "https://animals.azurewebsites.net/api/animals";

  // useEffect(() => {
  //   let theZoo: IAnimal[] = getZoo<IAnimal>();
  //   if (theZoo.length === 0) {
  //     axios.get<IAnimal[]>(URL).then((res) => {
  //       setZoo(res.data);
  //       setGetApi(true);
  //     });
  //   } else if (theZoo.length > 0) {
  //     for (let i = 0; i < theZoo.length; i++) {
  //       if (theZoo[i].id.toString() === zooParams) {
  //         setAnimal(theZoo[i]);
  //       }
  //     }
  //   }
  // }, [getApi, zooParams]);

  useEffect(() => {
    let theZoo: IAnimal[] = getZoo<IAnimal>();
    if (theZoo.length > 0) {
      for (let i = 0; i < theZoo.length; i++) {
        if (theZoo[i].id.toString() === zooParams) {
          context.updateContext({ ...context, animals: theZoo });
          setAnimal(theZoo[i]);
        }
        console.log(context.animals.length);
      }
    }
  }, []);

  const feedAnimal = () => {
    let theZoo: IAnimal[] = getZoo<IAnimal>();
    if (theZoo.length > 0) {
      for (let i = 0; i < theZoo.length; i++) {
        if (theZoo[i].id.toString() === zooParams) {
          context.updateContext({ ...context, animals: theZoo });
          setAnimal(theZoo[i]);

          console.log(context.animals.length);
        }
      }
    }
  };

  return (
    <>
      <AnimalCnt key={animal?.id}>
        <NameSpanOne>{animal?.name}</NameSpanOne>
        <AnimalWrapTwo>
          <ImgTwoWrap>
            <ImgOne
              onLoad={imageOnLoadHandler}
              onError={imageOnErrorHandler}
              alt={animal?.name}
              src={animal?.imageUrl}
            ></ImgOne>
          </ImgTwoWrap>
          <LongInfoWrap>
            <InfoSpanTWo>{animal?.longDescription}</InfoSpanTWo>
          </LongInfoWrap>
        </AnimalWrapTwo>
        {animal?.isFed ? (
          <LastFedSpan>{animal.lastFed}</LastFedSpan>
        ) : (
          <LastFedSpan>
            {FED_LAST}
            {animal?.lastFed}
          </LastFedSpan>
        )}
        {animal?.isFed ? (
          <LastFedSpan>{FED_THANKS}</LastFedSpan>
        ) : (
          <FeedBtn onClick={() => feedAnimal()}>{BTN_TXT}</FeedBtn>
        )}
        <Link to="/" style={{ textDecoration: "none" }}>
          <BackToSpan>{BACK}</BackToSpan>
        </Link>
      </AnimalCnt>
    </>
  );
};
