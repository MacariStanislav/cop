import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchValue, setSearchValue } = useState("");
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: "Guest", avatart: AVATAR });

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  console.log(data);
  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src="" alt="logo" />
        </Link>
      </div>
      <div className="info">
        <div className="user" onClick={handleClick}>
          <div
            className="avatart"
            style={{ backgroundImage: "url(${values.avatar}})" }}
          />
          <div className="username">{values.name}</div>
        </div>
        <form className="form">
          <div className="icon">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#search`} />
            </svg>
          </div>
          <div className="input">
            <input
              type="search"
              name="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <div className="box">
              {isLoading
                ? "Loading"
                : !data.lenght
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className="item"
                        to={`/products/${id}`}
                      >
                        <div
                          className="image"
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className="title">{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <div className="account">
          <Link to={ROUTES.HOME} className="favourites">
            <svg className="icon-fav">
              <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className="cart">
            <svg className="icon-cart">
              <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#bag`} />
            </svg>
            <span className="count">2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
