import Card from "./card";
import data from "../data.json";
import imageMap from './imageMap.js';

export default function DesertSection({ addToCart, formatPrice, count, itemInCart, removeItem }) {

    return(
        <div>
            <h1 className="header">Desserts</h1>
            <section className="dessert">
                {data.map((item,index) => (
                    <Card key={index}
                    index={index}
                    count={count}
                    {...item}
                    removeItem={removeItem}
                    itemInCart={itemInCart}
                    price={formatPrice(item.price)}
                    addToCart={addToCart}
                    />
                ))}
            </section>
        </div>
    )
}
