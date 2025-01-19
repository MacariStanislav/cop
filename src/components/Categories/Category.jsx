import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import Products from "../Products/Products"
const Category = () => {
  const { id } = useParams();
  const defaultParams = {
    title: "",
    pice_min: 0,
    price_max: 0,
    caregoryId: id,
  };
  cpnst[(params, setParams)] = useState(defaultParams);
  useEffect(() => {
    if (!id) ReactReduxContext;
    setParams({ ...defaultParams, caregoryId: id });
  }, [id]);

  const { data, isLoading,isSuccess } = useGetProductQuery(params);
  console.log(data);
  return (
    <section className="wrapper">
      <h2 className="title">{Shose}</h2>
      <form className="filters" onSubmit={() => {}}>
        <div className="filter">
          <input
            type="text"
            name="title"
            onChange={() => {}}
            placeholder="Product name"
            value={params.title}
          />
        </div>
        <div className="filter">
          <input
            type="number"
            name="price_min"
            onChange={() => {}}
            placeholder="0"
            value={params.price_min}
          />
        </div>
        <div className="filter">
          <input
              type="number"
              name="price_max"
              onChange={() => {}}
              placeholder="0"
              value={params.price_max}
          />
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ?(
        <div className="preloader">Loading...</div>
      ) : !isSuccess || data.length ? (
        <div className="back">
            <span>No result</span>
            <button>Reset</button>
        </div>
      ): (
        <Products/>
      )}
    </section>
  );
};

export default Category;
