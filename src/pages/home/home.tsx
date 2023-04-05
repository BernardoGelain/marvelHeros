import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import PaginatedItems from "../../components/paginate/paginate";
import { marvelApi } from "../../config/axios";

export default function Home() {
  return (
    <>
      <Header />
      <PaginatedItems itemsPerPage={30} />
      <Footer />
    </>
  );
}
