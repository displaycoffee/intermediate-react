/* React */
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/* Local components */
import App from './app/App';

hydrateRoot(
	document.getElementById('root'),
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
);
