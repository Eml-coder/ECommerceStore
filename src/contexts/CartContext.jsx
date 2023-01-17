import { createContext, useState } from 'react';
const addCartItem = (cartItems, productToAddd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAddd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAddd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAddd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
