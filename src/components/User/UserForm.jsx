import React from "react";
import UserSignupForm from "./UserSignupForm";
import { useDispatch, useSelector } from "react-redux";
import UserLoginForm from "./UserLoginForm";
import UserSignupForm from "./UserSignupForm";
import { toggleForm,toggleFormType } from "../../features/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className="overlay" onClick={closeForm} />
      {formType === "singup" ? (
        <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
