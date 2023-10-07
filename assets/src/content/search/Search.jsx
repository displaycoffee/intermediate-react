/* React */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

/* Local components */
import { Context } from '../../entry/context/Context';

export const Search = (props) => {
	const { requestParams } = props;
	const context = useContext(Context);

	// Use query to get and show results
	const results = useQuery(['search', requestParams], context.utils.fetch.search);
	const pets = results?.data?.pets ?? [];

	// Set default hero image
	let hero = context.variables.images.default;

	return (
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{pets && pets.length !== 0 ? (
				pets.map((pet) => {
					// Update hero if pet has main image
					if (pet.images && pet.images.length !== 0) {
						hero = pet.images[0];
					}

					return (
						<Link to={`/details/${pet.id}`} className="relative block" key={pet.id}>
							<div className="pet-image column">
								<div className="image-wrapper">
									<img src={hero} alt={pet.name} title={pet.name} loading="lazy" />
								</div>
							</div>

							<div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
								<h5>{pet.name}</h5>
								<p>
									<span className="capitalize">{pet.animal}</span> - {pet.breed} - {`${pet.city}, ${pet.state}`}
								</p>
							</div>
						</Link>
					);
				})
			) : (
				<p>No pets found. :(</p>
			)}
		</div>
	);
};
