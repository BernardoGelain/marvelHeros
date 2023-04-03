import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { marvelApi } from "../../config/axios";
import { Character } from "../../models/character";

import Loader from "../Loader/loader";
import "./paginate-styles.css";

function Items({ currentItems }: any) {
  const navigate = useNavigate();
  return (
    <div className="items">
      {currentItems &&
        currentItems?.map((item: Character) => (
          <div>
            <div
              className="card"
              onClick={() => {
                navigate(`character/${item.id}`);
              }}
            >
              <div className="fundo">
                <span className="fundoElementos">
                  Clique para ver os quadrinhos!
                </span>
              </div>
              <div className="frente">
                <img
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  width={100}
                />
                <div className="heroName">{item.name}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }: any) {
  const [characters, setCharacters] = useState<any>();
  const [totalCharacters, setTotalCharacters] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState(30);
  const [offsset, setOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    async function getDados() {
      const response = await marvelApi.get(
        `/characters?limit=${limit}&offset=${offsset}&`
      );

      setTotalCharacters(response.data.data.total);
      setCharacters(response.data.data.results);
      setIsLoading(false);
    }
    getDados();
  }, [limit, offsset]);

  // We start with an empty list of items.

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  /*   const items = [...Array(33).keys()]; */

  useEffect(() => {
    // Fetch items from another resources.
    setIsLoading(true);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(characters?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(characters?.length / itemsPerPage));
    setIsLoading(false);
  }, [itemOffset, itemsPerPage, characters]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % characters.length;
    setLimit(30);
    setOffset(+event.selected * 30);
    window.scrollTo(0, 0);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const pages = totalCharacters / +itemsPerPage;
  console.log(characters);

  return (
    <>
      <div className="containerHeroes">
        <>
          {" "}
          <Items currentItems={currentItems} />
          {isLoading && <Loader />}
          <div className="pagination">
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={7}
              marginPagesDisplayed={2}
              pageCount={pages}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link buttonLink"
              nextClassName="page-item"
              nextLinkClassName="page-link buttonLink"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </>
      </div>
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
