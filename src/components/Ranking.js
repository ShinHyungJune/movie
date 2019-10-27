import React, {useEffect, useState} from 'react';
import {get as getMovies, update as updateMovie} from 'actions/movieActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Ranking = () => {
	let [movies, setMovies] = useState([]);

	const params = {
		_sort: "visits",
		_order: "desc",
		_start: 0,
		_limit: 5
	};

	useEffect(() => {
		setInterval(() => {
			axios.get('/movies', {
				params: params
			}).then((response) => {
				setMovies(response.data);
			});
		}, 2000);

	}, []);

	return (
		<div className="rankings">
			{movies.map((movie, index) =>
				<Link to={`/movie/${movie.id}`} className="ranking" key={index}>
					<span className="ranking-rank">{index + 1}</span>

					<span className="ranking-title">{movie.title}</span>
				</Link>
			)}
		</div>
	);
};

export default Ranking;