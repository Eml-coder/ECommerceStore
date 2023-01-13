// This imports the styles file frm the same folder and uses it as classNames
import './CategoryItemStyles.scss';

const CategoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<div className='category-container'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
