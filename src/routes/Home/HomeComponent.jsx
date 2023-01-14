// used to render child nested routes in homeComponent.jsx
import { Outlet } from 'react-router-dom';
// import Directory from '../components/Directory/DirectoryComponent';
import Directory from '../../components/Directory/DirectoryComponent';

const Home = () => {
	//instead of copying and pasting the same category div code over and over again, we can use the map method to loop through an array of objects and return the same code for each object in the array
	const categories = [
		{
			id: 1,
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		},
		{
			id: 2,
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		},
		{
			id: 3,
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		},
		{
			id: 4,
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		},
		{
			id: 5,
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		},
	];
	return (
		<div>
			{/* outlet is used to render child nested routes in App.js..where ever you olace outlet, is where it will be rendered */}

			<Directory categories={categories} />
			<Outlet />
		</div>
	);
};

export default Home;
