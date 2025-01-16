import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  console.log("list", list);

  return (
    <section className="sidebar">
      <div className="title">CATEGORIES</div>
      <nav>
        <ul className="menu">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink 
              className={({isActive}) => `${/styles.link/} ${isActive ? /styles.active/ : ""} `}
              to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer">
        <a href="/" className="link" target="_blank">
          Help
        </a>

        <a
          href="/"
          className="link"
          target="_blank"
          styles={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
