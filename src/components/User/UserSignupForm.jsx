import React, { useState } from "react";
import { useDispatch } from "react-redux";

const UserSignupForm = ({closeForm,toggleCurrentFormType}) => {
  const dispatch=useDispatch();
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

    const isNotEmpty = Object.values(values).every(val=>val)
    if(isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
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
        <div className="link" onClick={()=>toggleCurrentFormType('login')}>I already have an account</div>
        <button type="submit" className="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
