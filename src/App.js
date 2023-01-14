// Routes renders  a branch of the application that matches the current URL(https://reactrouter.com/en/main/components/routes)
// Route renders a UI element when the URL matches the path eg {Home}. the path="/" just means that the home component will be rendered when the url is just the domain name with a / ending eg http://localhost:3000/
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/HomeComponent';
import Navigation from './routes/Navigation/NavigationComponent';

const Shop = () => {
	return <h1>Shop page</h1>;
};

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
			</Route>
		</Routes>
		
	);
};
/* Here is the explanation for the nested Routing code above:
1. The <Routes> component is the parent component of all routes.
2. The <Route> is the component that defines the routes.
3. The path attribute is the path to the component.
4. The element attribute is the component that will be rendered.
5. Remember we had to wrap our entire application with <BrowserRouter > in the index.js file for the above routing
6. The child routes are nested inside the parent route(e.g shop). The parent route is the route that will be rendered when the url is just the domain name with a / ending eg http://localhost:3000/ but the child route is the route that will be rendered when the url is http://localhost:3000/home/shop. The child route will only render when the parent route (home) is rendered and works as a sub route of the parent route. Child route needs <Outlet /> defined in other to work. here we defined the <Outlet /> in the Home component.
7. index means that the home component will be rendered when the url is just the domain name with a / ending (so here we placed a logo so that when clicked a user is redirected to home page when in another sectiion of the site)
 */
export default App;
