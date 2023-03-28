import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import PaginatedItems from "../../components/paginate/paginate";
import { marvelApi } from "../../config/axios";

export default function Home() {
  return (
    <>
      <div className="containerComics">
        <Header />
        <PaginatedItems itemsPerPage={30} />
      </div>
    </>
  );
}
