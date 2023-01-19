import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CartegoryPreview from '../../components/CategoryPreview/CartegoryPreviewComponent';

import './ShopStyles.scss';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<div className='shop-container'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CartegoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
};

export default Shop;
