import { createContext, useState, useEffect } from 'react';


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
const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	//if the cart item to remove is the only one in the cart, remove it from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	//if there are more than one of the cart item to remove, decrement the quantity by 1
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const CartContext = createContext({
	isCartOpen: false,
	setCartOpen: () => {},
	cartItems: [],
	//method to add and remove items from the cart and checkout page
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
});



export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

//everytime cartItems changes, useEffect will run updating the cartCount
useEffect(() => {
	const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
	setCartCount(newCartCount);
	}, [cartItems])
	


	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
//method
	const removeItemToCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const value = {
		 isCartOpen,
		  setIsCartOpen, 
		  addItemToCart, 
		  removeItemToCart,
		  cartItems, 
		  cartCount ,
		
		};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
