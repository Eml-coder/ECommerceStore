import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

import './CartDropdownStyles.scss';
import Button from '../Button/ButtonComponent';
import CartItem from '../CartItem/CartItemComponent';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>CHECK OUT</Button>
		</div>
	);
};

export default CartDropdown;
