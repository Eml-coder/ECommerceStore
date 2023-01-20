import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/ButtonComponent';

import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
  } from './ProductCardStyles.js';

const ProductCard = ({product}) => {
    const {imageUrl, name, price} = product;
	const {addItemToCart} = useContext(CartContext);
const addProductToCart = () => addItemToCart(product);

return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
