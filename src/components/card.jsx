import React from "react";
import cartIcon from "/assets/images/icon-add-to-cart.svg"
import addIcon from "/assets/images/icon-increment-quantity.svg"
import minusIcon from "/assets/images/icon-decrement-quantity.svg"
import screenSize from "../hooks/screenSize"
import imageMap from './imageMap.js';

export default function Card({ image, category, name, price, addToCart, index, itemInCart, removeItem }) {
    const windowWidth = screenSize();
    const item = itemInCart.find(item => item.index === index) || { quantity: 0 };

    const imageSrc = {
        thumbnail: imageMap[image.thumbnail],
        mobile: imageMap[image.mobile],
        tablet: imageMap[image.tablet],
        desktop: imageMap[image.desktop]
      };

      const src = imageSrc[screenCategory] || imageSrc.thumbnail;

    return(
        <div className="card">
            <picture>
                <img className="product-img" src={imageSrc[windowWidth]} alt="dessert-image" />
            </picture>
            {item.quantity === 0 ? (
                <button onClick={() => addToCart(index, name, price, image)} className="cart-btn">
                    <img src={cartIcon} alt="cart icon" />
                    <span>Add to Cart</span>
                </button>
            ) : (
                <div className="count-btn">
                    <button className="btn minus" onClick={() => removeItem(index)}>
                        <img src={minusIcon} alt="minus" />
                    </button>
                    <span className="count">{item.quantity}</span>
                    <button className="btn add" onClick={() => addToCart(index, name, price)}>
                        <img src={addIcon} alt="add" />
                    </button>
                </div>
            )}
            <p className="category">{category}</p>
            <h2 className="name">{name}</h2>
            <p className="price">${price}</p>
        </div>
    )
}