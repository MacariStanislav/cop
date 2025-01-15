import React, { useEffect } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar.jsx/Sidebar';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../feature/categories/categoriesSlice';
const App = () => {
 const dispatch =useDispatch();

 useEffect(()=>{
    dispatch(getCategories());

 },[dispatch] );

    
  return (
    <div className='app'>
        <Header/>
       <div className="container">
        <Sidebar/>
        <AppRoutes/>
       </div>

        <Footer/>
    </div>
  )
}

export default App