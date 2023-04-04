import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comic from "../../components/comic/comic";
import Header from "../../components/header/header";
import HeaderDefault from "../../components/headerDefault/headerDefault";
import { marvelApi } from "../../config/axios";
import { Personage } from "../../models/personage";
import { PersonageComic } from "../../models/personageComic";
import "./characterPage-styles.css";

export default function CharacterPage() {
  const routeParams = useParams();
  const id = Number(routeParams.id);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [personage, setPersonage] = useState<Personage[]>([]);
  const [comics, setComics] = useState<PersonageComic[]>([]);
  console.log(id);

  useEffect(() => {
    setIsLoading(true);
    async function getDados() {
      const response = await marvelApi.get(`/characters/${id}`);

      setPersonage(response.data.data.results);
      setIsLoading(false);
    }
    getDados();
  }, []);
  useEffect(() => {
    setIsLoading(true);
    async function getDados() {
      const response = await marvelApi.get(
        `/characters/${id}/comics?format=comic`
      );

      setComics(response.data.data.results);
      setIsLoading(false);
    }
    getDados();
  }, []);

  console.log(personage[0]?.thumbnail.path);
  return (
    <>
      <HeaderDefault />
      <div className="containerPersonage">
        <div className="apresentacao">
          <img
            src={
              `${personage[0]?.thumbnail?.path}` +
              "." +
              `${personage[0]?.thumbnail?.extension}`
            }
            className="imagemPersonagem"
          />
        </div>
        <div className="nomePersonagem">
          <span>{personage[0]?.name}</span>
        </div>
        <span className="characterDescription">
          {personage[0]?.description}
        </span>
      </div>
      <span className="comics">Comics</span>
      {comics.map((comic) => {
        return <Comic comic={comic} />;
      })}
    </>
  );
}
