import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

import Template from "../components/template/template";
import CharacterPage from "../pages/characterPage/characterPage";
import Home from "../pages/home/home";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
