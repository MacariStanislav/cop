import React, { useState } from "react";

const UserSignupForm = ({closeForm}) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    const isEmpty = Object.values(values).every(val=>val)
    if(isEmpty) return;
  }

  return (
    <div className="wrapper">
      <div className="close" onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL} /sprite.svg#close`} />
        </svg>
      </div>
      <div className="title">Sign Up</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <input
            type="name"
            placeholder="Your name"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <input
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="link">I already have an account</div>
        <button type="submit" className="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
