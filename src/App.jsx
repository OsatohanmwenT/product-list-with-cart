import React, { useState, useEffect } from 'react';
import DesertSection from './components/desert-section';
import CartSection from './components/cart-section';
import ConfirmationCard from './components/confimation';


function App() {
  const [itemInCart, setItemInCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);


  useEffect(()=>{
    console.log(itemInCart)
  }, [itemInCart])

  const addToCart = (index, name, price, image) => {
    setItemInCart(prevItems =>{
      const existingItem = prevItems.find(item => item.index === index);
      if(existingItem){
        return prevItems.map(item => 
          item.index === index ? { ...item , quantity: item.quantity + 1} : item)
      }else{
        return [...prevItems, { index, name, price, image, quantity: 1 }];
      }
    });
  }

  const removeFromCart = (index) => {
    setItemInCart(prevItems => {
      return prevItems.map(item => 
        item.index === index ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
    });
  };

  const deleteItem = (index) => {
        setItemInCart(prevItems => {
          return prevItems.filter(item => item.index !== index)
        })
  }

  const clearOrder = (index) => {
        setCheckOut(false)
        setItemInCart([])
  }

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  const confirmOrder = () => {
    setCheckOut(true)
  }

  const totalCount = itemInCart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = itemInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="wrapper">
          <div className="container">
            <DesertSection
            removeItem={removeFromCart}
            addToCart={addToCart}
            formatPrice={formatPrice} 
            count={totalCount} 
            itemInCart={itemInCart}
            />
            <CartSection totalAmount={totalAmount}
            count={totalCount}
            itemInCart={itemInCart} 
            formatPrice={formatPrice}
            deleteItem={deleteItem}
            confirmOrder={confirmOrder}
            />
          </div>
          {checkOut && 
          <ConfirmationCard
          itemInCart={itemInCart}
          formatPrice={formatPrice}
          totalAmount={totalAmount}
          clearOrder={clearOrder}
          />
          }
    </div>
  )
}

export default App
