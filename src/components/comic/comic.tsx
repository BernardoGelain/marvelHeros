import { useEffect, useState } from "react";
import { marvelApi } from "../../config/axios";
import { PersonageComic } from "../../models/personageComic";
import "./comic-styles.css";
type Props = {
  comic: PersonageComic;
};
export default function Comic({ comic }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(comic);
  return (
    <>
      <div className="constainerComic">
        <img
          src={
            `${comic?.thumbnail?.path}` + "." + `${comic?.thumbnail?.extension}`
          }
          className="imagemComic"
        />
        <span className="nomeComic">{comic?.title}</span>
        <span className="descriptionComic">{comic?.description}</span>
      </div>
    </>
  );
}
