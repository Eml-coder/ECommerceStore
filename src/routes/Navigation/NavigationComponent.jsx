import { Fragment, useContext } from 'react';
import { Outlet} from 'react-router-dom';
import CartIcon from '../../components/CartIcon/CartIconComponent';
import CartDropdown from '../../components/CartDropdown/CartDropdownComponent';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { signOutUser } from '../../utils/Firebase/FirebaseUtils';
//styled-components refactorings
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './NavigationStyles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>

				<NavLinks>
					<NavLink to='/shop'>
						SHOP
					</NavLink>
					{currentUser ? (
						<NavLink as='span'
							
							onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink
						
							to='/auth'>
							SIGN IN
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

// Path: src\routes\Navigation\NavigationStyles.scss
