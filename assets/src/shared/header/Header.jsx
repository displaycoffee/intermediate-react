/* React */
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
			<h1>
				<Link className="text-6xl text-white hover:text-gray-200" to="/">
					Adopt Me!
				</Link>
			</h1>
		</header>
	);
};
