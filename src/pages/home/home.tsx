import { useEffect, useState } from "react";
import PaginatedItems from "../../components/paginate/paginate";
import { marvelApi } from "../../config/axios";

export default function Home() {
  return (
    <>
      <div className="containerComics">
        <PaginatedItems itemsPerPage={30} />
      </div>
    </>
  );
}
