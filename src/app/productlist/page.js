/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import  { useEffect, useState } from "react";

const page = () => {
  const [product, setProduct] = useState([]);
  useEffect( async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProduct(data.products);
  }, []);
  return <div>
    <h1>CLient side component Product List</h1>
    {product.map((ele,i)=>(<h3 key={i}>{ele.title}</h3>))}
  </div>;
};

export default page;
