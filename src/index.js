import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { ProductsProvider } from './contexts/ProductsContext';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
		{/* using BrowserRouter to wrap our entire application so we can make use of react router tools to route smoothly*/}
		<BrowserRouter>
		<UserProvider>
			<ProductsProvider>
			<App />
			</ProductsProvider>
		</UserProvider>
		</BrowserRouter>
	</>

);

