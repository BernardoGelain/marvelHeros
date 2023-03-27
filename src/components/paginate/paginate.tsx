import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { marvelApi } from "../../config/axios";
import { Comic } from "../../models/comic";
import Loader from "../Loader/loader";
import "./paginate-styles.css";

function Items({ currentItems }: any) {
  return (
    <div className="items">
      {currentItems &&
        currentItems?.map((item: Comic) => (
          <div>
            <div className="card">
              <div className="fundo">
                <span className="fundoElementos">{item.name}</span>
              </div>
              <div className="frente">
                <img
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  width={100}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage, items }: any) {
  const [dados, setDados] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState(30);
  const [offsset, setOffset] = useState(0);

  useEffect(() => {
    async function getDados() {
      const response = await marvelApi.get(
        `/characters?limit=${limit}&offset=${offsset}&`
      );
      const response2 = await marvelApi.get(`/characters`);

      setDados(response.data.data.results);
    }
    getDados();
  }, [limit, offsset]);

  // We start with an empty list of items.
  console.log(items);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  /*   const items = [...Array(33).keys()]; */

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(dados?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dados?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, dados]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % dados.length;
    setLimit(30);
    setOffset(+event.selected * 30);

    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  if (isLoading) {
    return;
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={7}
        marginPagesDisplayed={2}
        pageCount={53}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={() => {
          return null;
        }}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
