// Routes renders  a branch of the application that matches the current URL(https://reactrouter.com/en/main/components/routes)
// Route renders a UI element when the URL matches the path eg {Home}. the path="/" just means that the home component will be rendered when the url is just the domain name with a / ending eg http://localhost:3000/
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/HomeComponent';
import Navigation from './routes/Navigation/NavigationComponent';
import Authentication from './routes/Authentication/AuthenticationComponent';
import Shop from './routes/Shop/ShopComponent';
import Checkout from './routes/Checkout/CheckoutComponent';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigation />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='shop'
					element={<Shop />}
				/>
				<Route
					path='auth'
					element={<Authentication />}
				/>

				<Route
					path='checkout'
					element={<Checkout />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
