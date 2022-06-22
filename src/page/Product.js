import React from "react";
import CardProduct from "../components/product/CardProduct";
import Filter from "../components/product/Filter";
import Pagination from "../components/product/Pagination";
import { motion } from "framer-motion";
// import { useState } from "react";


const Product = () => {
  // const [productState, setProduct] = useProductState();
  return (
    <>
      <div className="md:flex">
        {/* filter section */}
        <Filter />

        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct />
        </div>
      </div>
     
      <Pagination />
    </>
  );
};

export default Product;
