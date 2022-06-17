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
  StyledLoading,
} from "../StyledComponents/Headings";
import { ImgOne, ImgTwoWrap } from "../StyledComponents/Images";
import {
  AnimalCnt,
  AnimalWrapTwo,
  LoadWrap,
  LongInfoWrap,
} from "../StyledComponents/Wrappers";

export const AnimalSingle = () => {
  const [animal, setAnimal] = useState<IAnimal>();
  const [loading, setLoading] = useState(true);

  const context = useContext(ZooContext);

  const params = useParams();
  const zooParams: string | undefined = params.id;

  const FED_LAST = "senast matad: ";
  const FED_THANKS = "tack för maten!";
  const BTN_TXT = "mata mig";
  const BACK = "tillbaka";
  const MSG = "rendering animal!";

  useEffect(() => {
    let theZoo: IAnimal[] = getZoo<IAnimal>();
    if (theZoo.length > 0) {
      for (let i = 0; i < theZoo.length; i++) {
        if (theZoo[i].id.toString() === zooParams) {
          context.updateContext({ ...context, animals: theZoo });
          setAnimal(theZoo[i]);
          setLoading(false);
          console.log(theZoo);
        }
      }
    }
  }, []);

  const feedAnimal = () => {
    const isoDate = new Date();
    let newlyFed = isoDate.toISOString();
    let theZoo: IAnimal[] = getZoo<IAnimal>();
    if (theZoo.length > 0) {
      for (let i = 0; i < theZoo.length; i++) {
        if (theZoo[i].id.toString() === zooParams) {
          setAnimal(theZoo[i]);
          if (theZoo[i].isFed === false) {
            theZoo[i].isFed = !theZoo[i].isFed;
            theZoo[i].lastFed = newlyFed;
            setZoo(theZoo);
            context.updateContext({ ...context, animals: theZoo });
            setAnimal(theZoo[i]);
          }
        }
      }
    }
  };

  return (
    <>
      <AnimalCnt key={animal?.id}>
        <NameSpanOne>{animal?.name}</NameSpanOne>
        <AnimalWrapTwo>
          {loading ? (
            <LoadWrap>
              <StyledLoading>{MSG}</StyledLoading>
            </LoadWrap>
          ) : null}
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
