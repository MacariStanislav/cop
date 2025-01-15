import React from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const Footer = () => (
    <section className="footer">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src="" alt="logo" />
        </Link>
      </div>
      <div className="rights">
        Developed by{""}
        <a href="" target="_blank" rel="noreferrer">
          {" "}
          Stas
        </a>
      </div>
      <div className="socials">
        <a href="" target="_blank" rel="noreferrer">
          {" "}
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#instagram`}
            />
          </svg>
        </a>

        <a href="" target="_blank" rel="noreferrer">
          {" "}
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#facebox`}
            />
          </svg>
        </a>

        <a href="" target="_blank" rel="noreferrer">
          {" "}
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#youtube`}
            />
          </svg>
        </a>
      </div>
    </section>
  );

export default Footer;
