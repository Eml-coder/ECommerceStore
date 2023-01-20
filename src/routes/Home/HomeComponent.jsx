// used to render child nested routes in homeComponent.jsx
import { Outlet } from 'react-router-dom';
// import Directory from '../components/Directory/DirectoryComponent';
import Directory from '../../components/Directory/DirectoryComponent';

const Home = () => {
	return (
		<div>
			<Directory />
			<Outlet />
		</div>
	);
};

export default Home;
