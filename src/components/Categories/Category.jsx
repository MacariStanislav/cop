import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };
  const defaultParams = {
    caregoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };

  const [isEnd, setEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const { data, isLoading, isSuccess } = useGetProductQuery(params);

  useEffect(() => {
    if (!id) return;
setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, caregoryId: id });
  }, [id]);

  useEffect(() => {
    if (isLoading) return;
    if (!data.length) return setEnd(true);
    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === id * 1);
    setCat(category);
  }, [list, id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };
  const handleReset =()=>{
    setValues(defaultValues)
    setParams(defaultParams)
    setEnd(false)

  }

  return (
    <section className="wrapper">
      <h2 className="title">{cat?.name}</h2>
      <form className="filters" onSubmit={handleSubmit}>
        <div className="filter">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className="filter">
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className="filter">
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
              <span>Price to</span>
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || items.length ? (
        <div className="back">
          <span>No result</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}
      {isEnd && (
        <div className="more">
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
