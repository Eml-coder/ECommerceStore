// This imports the CategoryItem component from the #CategoryItemComponent.jsx file located in another folder called #CategoryItem.
// This is a relative path. The #CategoryItem folder and #Directory folder share the same folder called #components. (the ../ means go up one folder, while inside a relative path). 
import CategoryItem from '../CategoryItem/CategoryItemComponent';
// This imports the Directorystyles file frm the same folder and uses it as classNames
import './DirectoryStyles.scss';

const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<CategoryItem
					key={category.id}
					category={category}
				/>
			))}
		</div>
	);
};

export default Directory;
