import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Movie = ({movie}) => {

	let date = movie.openedAt.slice(0, 4);

	return (
		<Link to={`/movie/${movie.id}`} className="movie">
			<img src={movie.img} alt="" className="poster"/>

			<p className="date">{date}</p>

			<p className="title">{movie.title}</p>
		</Link>
	);
}

export default Movie;