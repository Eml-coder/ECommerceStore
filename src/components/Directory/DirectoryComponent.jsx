// This imports the CategoryItem component from the #CategoryItemComponent.jsx file located in another folder called #CategoryItem.
// This is a relative path. The #CategoryItem folder and #Directory folder share the same folder called #components. (the ../ means go up one folder, while inside a relative path). 
import DirectoryItem from '../DirectoryItem/DirectoryItemComponent';
// This imports the Directorystyles file frm the same folder and uses it as classNames
import { DirectoryContainer } from './DirectoryStyles.js';


const categories = [
	{
		id: 1,
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		route: 'shop/hats'
	},
	{
		id: 2,
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		route: 'shop/jackets'
	},
	{
		id: 3,
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		route: 'shop/sneakers'
	},
	{
		id: 4,
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		route: 'shop/womens'
	},
	{
		id: 5,
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		route: 'shop/mens'
	},
];
const Directory = () => {
	
	return (
		<DirectoryContainer>
		  {categories.map((category) => (
			<DirectoryItem key={category.id} category={category} />
		  ))}
		</DirectoryContainer>
	  );
};

export default Directory;
