import React, {useEffect, useState, Fragment} from 'react';
import IconEye from 'assets/img/icon_eye_green.png';
import axios from 'axios';
import {connect} from 'react-redux';
import {remove} from 'actions/movieActions';

const Movie = ({match, remove}) => {
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
			<Fragment>
				<div className="utils">
					<div className="wrap-1200">
						<button className="util bg-primary" onClick={() => remove(movie.id)}>영화 삭제</button>
					</div>
				</div>

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
			</Fragment>
		);

	return "로딩중";
};

const mapDispatch = (dispatch) => {
	return {
		remove: (data) => {
			dispatch(remove(data));
		}
	}
};

export default connect(null, mapDispatch)(Movie);