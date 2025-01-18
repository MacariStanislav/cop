import React from 'react'
import UserSignupForm from './UserSignupForm';
import { useDispatch, useSelector } from 'react-redux';

const UserForm = () => {
    const dispatch=useDispatch()
    const{showForm} =useSelector(({user})=> user );
 
 const closeForm=() => dispatch(toggleForm(false))
    return showForm ? (
    <>
    <div className='overlay'
    onClick={closeForm}/>
    <UserSignupForm closeForm={closeForm}/>

    </>
  ) : (
    <></>
  )
  
}

export default UserForm