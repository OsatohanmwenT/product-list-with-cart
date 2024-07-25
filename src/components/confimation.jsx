import React from "react";
import checkIcon from "/assets/images/icon-order-confirmed.svg"
import imageMap from "./imageMap.js"

const ConfirmationCard = ({ itemInCart, formatPrice, totalAmount, clearOrder }) => {
    return(
        <div className="confirm-section">
            <div className="confirm-card">
                <picture>
                        <img src={checkIcon} alt="Confirmation Icon" />
                </picture>
                <h2 className="header">Order Confirmed</h2>
                <p className="text">We hope you enjoy your food!</p>
                <div className="context">
                    {itemInCart.map((item,index) => (
                        <div className="order-list" key={index}>
                            <div className="left">
                                <picture>
                                    <img className="thumbnail" src={imageMap[item.image.thumbnail]} alt="thumbnail image" />
                                </picture>
                                <div className="info">
                                        <p className="impt name">{item.name}</p>
                                        <div className="amount">
                                            <span className="num">{item.quantity}x</span>
                                            <span className="per-price"> @ ${item.price}</span>
                                        </div>
                                </div>
                            </div>
                            <span className="impt per-product">${formatPrice(item.price * item.quantity)}</span>
                        </div>
                        ))}
                        <div className="order">
                            <p className="impt text">Order Total</p>
                            <p className="impt total">${formatPrice(totalAmount)}</p>
                        </div>
                </div>
                <button onClick={clearOrder} className="confirm-btn">Start New Order</button>
            </div>
        </div>
    )
}

export default ConfirmationCard