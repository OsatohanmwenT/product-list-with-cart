import React from "react";
import emptyIcon from "/assets/images/illustration-empty-cart.svg"
import neutralIcon from "/assets/images/icon-carbon-neutral.svg"
import removeIcon from "/assets/images/icon-remove-item.svg"


export default function CartSection({ count, itemInCart, formatPrice, deleteItem, totalAmount, confirmOrder }) {
    
    return(
        <section className="cart">
            <h3 className="cart-info">Your Cart({count})</h3>
            {count == 0 ?
                <div className="empty">
                    <img className="empty-img" src={emptyIcon} alt="empty illustration" />
                    <p className="empty-text">Your added items will appear here</p>
                </div> :
                <>
                <div className="list">
                {itemInCart.map((list) => (
                        <div className="list-item" key={list.index}>
                            <div className="title">
                                <p className="impt">{list.name}</p>
                                 <div className="amount">
                                    <span className="num">{list.quantity}x</span>
                                    <span className="per-price">@ ${list.price}</span>
                                    <span className="per-product">${formatPrice(list.price * list.quantity)}</span>
                                 </div>
                            </div>
                            <button onClick={() => deleteItem(list.index)} className="remove-btn">
                                <img src={removeIcon} alt="remove icon" />
                            </button>
                        </div>
                    ))}
                </div>
                    <div className="order">
                        <p className="impt text">Order Total</p>
                        <p className="impt total">${formatPrice(totalAmount)}</p>
                    </div>
                    <div className="advert">
                        <img src={neutralIcon} alt="icon-carbon-neutral" />
                        <p>This is <span className="impt">carbon-neutral</span> delivery</p>
                    </div>
                    <button onClick={() => confirmOrder()} className="confirm-btn">Confirm Order</button>
                </>
            }
        </section>
    )
}