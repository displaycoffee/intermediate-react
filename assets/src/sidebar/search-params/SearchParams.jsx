/* React */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/* Local components */
import { Context } from '../../entry/context/Context';

export const SearchParams = (props) => {
	const context = useContext(Context);
	const navigate = useNavigate();
	const { setRequestParams, animal, setAnimal, breeds } = props;

	return (
		<div className="search-params">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target);
					const obj = {
						animal: formData.get('animal') ?? '',
						breed: formData.get('breed') ?? '',
						location: formData.get('location') ?? '',
					};
					setRequestParams(obj);
					navigate('/');
				}}
			>
				<label htmlFor="location">
					<span>Location:</span>
					<input id="location" className="search-input" name="location" type="text" />
				</label>

				<label htmlFor="animal">
					<span>Animal:</span>
					<select
						id="animal"
						className="search-input"
						name="animal"
						value={animal}
						onChange={(e) => {
							setAnimal(e.target.value);
						}}
					>
						<option value="">Select animal</option>
						{context.variables.animals.map((animal) => (
							<option value={animal.value} key={animal.value}>
								{animal.label}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="breed">
					<span>Breed:</span>
					<select id="breed" className="search-input grayed-out-disabled" disabled={breeds.length === 0} name="breed">
						<option value="">Select breed</option>
						{breeds.map((breed) => (
							<option key={breed}>{breed}</option>
						))}
					</select>
				</label>

				<button className="block w-auto rounded px-6 py-2 mx-auto color text-white hover:opacity-50 border-none bg-orange-500">Submit</button>
			</form>
		</div>
	);
};
