import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import iconSearch from 'assets/img/icon_search_green.png';
import axios from 'axios';

const Search = () => {
	let [movies, setMovies] = useState([]);

	const onChange = (e) => {
		axios.get('/movies?title=' + e.target.value)
			.then((response) => {
				setMovies(response.data);
			})
	};

	return (
		<div className="wrap-search">
			<div className="search">
				<div className="input-search">
					<input type="text" name="word" placeholder="검색어를 입력하세요." onChange={onChange}/>

					<img src={iconSearch} alt="검색"/>
				</div>

				<div className="search-results">
					{movies.map(movie => (
						<Link to={`/movie/${movie.id}`} className="search-result" key={movie.id}>
							{movie.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Search;