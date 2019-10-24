import React, {useEffect, useState} from 'react';
import IconEye from 'assets/img/icon_eye_green.png';
import axios from 'axios';

const Movie = ({match}) => {
	let [movie, setMovie] = useState(null);
	let [date, setDate] = useState(null);

	useEffect(() => {
		axios.get(`/movies/${match.params.id}`)
			.then((response) => {
				setMovie(response.data);

				setDate(response.data.openedAt.slice(0, 4));
			});
	},[]);

	if(movie)
		return (
			<div id="movie">
				<div className="wrap-1200">
					<img src={movie.img} alt="" className="poster"/>

					<div className="box-text">
						<span className="date">{date}</span>

						<div className="box-title">
							<p className="title">{movie.title}</p>

							<span className="tag"># 공포</span>

							<div className="view">
								<img src={IconEye} alt=""/>
								{movie.visits}
							</div>
						</div>

						<p className="body">{movie.body}</p>
					</div>
				</div>
			</div>
		);

	return null;
};

export default Movie;