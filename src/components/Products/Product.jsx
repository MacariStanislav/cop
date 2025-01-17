import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/user/userSlice";


const SIZES = [4, 4.5, 5];

const Product = (item) => {
    const { title, images, price ,description} = item
  const dispatch =useDispatch();
    const [currrentImage, setCurrentImage] = useState();
  const [currrentSize, setCurrentSize] = useState();

  useEffect(()=> {
    if(!images.length) return;
    setCurrentImage(images[0]);
},[images])
const addToCart =() =>{
    dispatch(addItemToCart(item))
}

  return (
    <section className="product">
      \
      <div className="images">
        <div
          className="current"
          style={{ backgroundImage: ` url(${currrentImage}) ` }}
        />
        <div className={styles['images-list']}>
        {images((image, i) => (
          <div
            key={i}
            className="image"
            style={{ backgroundImage: ` url(${currrentImage}) ` }}
            onClick={() => setCurrentImag(image)}
          />
        ))}
        </div>
      </div>
      <div className="info">
        <h1 className="title">{title}</h1>
        <div className="price">{price}</div>
        <div className="color">
          <span>Color:</span>Green
        </div>
        <div className="sizes">
          <span>Sizes:</span>
          <div className="list">
            {SIZES.map((size) => (
              <div onClick={() => setCurrentSize(size)} className={`${/sizes/} ${currrentSize===size ? styles.active:"" }`} 
              key={size}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="action">
            <button onClick={addToCart} className="add" disabled={!currrentSize} >Add to cart</button>
            <button className="favourite"> Add to favourites</button>
        </div>
        <div className="button">
            <div className="purchase">19 prople purchased</div>
         <Link to={ROUTES.HOME}>
         Returon to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
