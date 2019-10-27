import React, {useEffect, useState, Fragment} from 'react';
import IconEye from 'assets/img/icon_eye_green.png';
import CreateMovie from 'components/movies/CreateMovie';
import axios from 'axios';
import {connect} from 'react-redux';
import {remove, show} from 'actions/movieActions';
import {setPop} from 'actions/commonActions';

const Movie = ({match, tags, movie, remove, show, setPop, getTags}) => {
	useEffect(() => {
		if(!movie || movie.id !== match.params.id)
			show(match.params.id);


	},[]);

	if(movie)
		return (
			<Fragment>
				<div className="utils">
					<div className="wrap-1200">
						<button className="util bg-primary" onClick={() => setPop("createMovie")}>영화 수정</button>
						<button className="util bg-primary" onClick={() => remove(movie.id)}>영화 삭제</button>
					</div>
				</div>

				<CreateMovie movie={movie} />

				<div id="movie">
					<div className="wrap-1200">
						<img src={movie.img} alt="" className="poster"/>

						<div className="box-text">
							<span className="date">{movie.openedAt}</span>

							<div className="box-title">
								<p className="title">{movie.title}</p>

								<span className="tag"># {movie.tag.name}</span>

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

const mapState = (state) => {
	return {
		movie: state.movieStates.movie,
	}
};

const mapDispatch = (dispatch) => {
	return {
		remove: (data) => {
			dispatch(remove(data));
		},

		show: (data) => {
			dispatch(show(data));
		},

		setPop: (data) => {
			dispatch(setPop(data));
		},
	}
};

export default connect(mapState, mapDispatch)(Movie);