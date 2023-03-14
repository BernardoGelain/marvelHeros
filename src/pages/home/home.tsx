import { useEffect } from "react";
import { marvelApi } from "../../config/axios";

export default function Home() {
  useEffect(() => {
    async function getDadosCombo() {
      const response = await marvelApi.get(`/comics`);
    }
    getDadosCombo();
  }, []);

  return (
    <>
      <h1>oiee</h1>
    </>
  );
}
