import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src="" alt="logo" />
        </Link>
      </div>
      <div className="info">
        <div className="user">
          <div className="avatart" style={{ backgroundImage: "url()" }} />
        <div className="username">Guest</div>
        </div>
        <form className="form">
            <div className="icon">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#search`} />
                </svg>
            </div>
        <div className="input">
            <input type="search"
            placeholder="Search for anyting..."
            autoComplete="off"
            onChange={()=>{}}
            value="" />
        </div>
       {false &&  <div className="box"> </div>}
        </form>
        <div className="account">
            <Link to={ROUTES.HOME}className="favourites">
         
                <svg className="icon-fav">
                    <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#heart`} />
                </svg>
       
            </Link>

            <Link to={ROUTES.CART}className="cart">
         
         <svg className="icon-cart">
             <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#bag`} />
         </svg>
         <span className="count">
            2
         </span>

     </Link>
            
        </div>
      </div>
    </div>
  );
};

export default Header;
