/* React */
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

/* Local components */
import App from './app/App';

export default function render(url, opts) {
	const stream = renderToPipeableStream(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
		opts,
	);
	return stream;
}
