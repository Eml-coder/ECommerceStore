import React from 'react';
import ReactDOM from 'react-dom/client';
// used to store the current location in the browsers address bar(https://reactrouter.com/en/main/router-components/browser-router)
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
  {/* using BrowserRouter to wrap our entire application so we can make use of react router tools to route smoothly*/}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

