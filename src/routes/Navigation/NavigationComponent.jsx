import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/CartIcon/CartIconComponent';
import CartDropdown from '../../components/CartDropdown/CartDropdownComponent';
// import { ReactComponent as CrwnLogo } from '../../assets/crownLogo.svg';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { signOutUser } from '../../utils/Firebase/FirebaseUtils';
//import { signOutUser } from '../../utils/Firebase/FirebaseUtils';
import './NavigationStyles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className='navigation'>
				<Link
					className='logo-container'
					to='/'>
					<CrwnLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link
						className='nav-link'
						to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span
							className='nav-link'
							onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link
							className='nav-link'
							to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
	
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

// Path: src\routes\Navigation\NavigationStyles.scss
