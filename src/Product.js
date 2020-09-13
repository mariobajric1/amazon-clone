import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, src, price, rating }) {
	// eslint-disable-next-line
	const [, dispatch] = useStateValue();
	const addToBasket = () => {
		//item to datalayer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				src: src,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							// eslint-disable-next-line jsx-a11y/accessible-emoji
							<p> 🌟</p>
						))}
				</div>
			</div>
			<img src={src} alt="" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
