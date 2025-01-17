import React from 'react'
import { Link } from 'react-router-dom';

const Categories = ({ title, style={} ,products=[] , amount }) => {
    const list = products.filter((_,i)=>i<amount);

    return (
   <section className='section'>
    <h2>{title}</h2>
    <div className='list'>
        {list.map(({id,name,image})=>(
            <Link to={`/categories/${id}`} key={id} className='item'>
            <div className="image" styles={{backgroundImage:`url(${image})`}}/>
               <h3 className='title'>{name}</h3>
            </Link>
        ))}
    </div>
   </section>
  )
}

export default Categories