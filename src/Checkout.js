import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-yo_tfwUjXtCFcA1ScYbhYwT8p_EcyN746w&usqp=CAU"
					alt=""
				/>
				<div>
					<h2 className="checkout__titleUser">Hello, {user?.email}</h2>
					<h2 className="checkout__title">Your shopping basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							src={item.src}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
					))}
					{/**basketitem */}

					{/**basketitem */}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
