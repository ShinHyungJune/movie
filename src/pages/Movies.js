import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setPop} from 'actions/commonActions';
import {get as getTags} from 'actions/tagActions';
import {get as getMovies} from 'actions/movieActions';

import Movie from "../components/movies/Movie";
import CreateTag from 'components/tags/CreateTag';
import ManageTag from 'components/tags/ManageTag';
import CreateMovie from 'components/movies/CreateMovie';

const Movies = ({movies, tags, setPop, getTags, getMovies}) => {

	useEffect(() => {
		if(!movies)
			getMovies();

		if(!tags) {
			getTags();
		}
	}, []);

	if(movies){
		return (
			<Fragment>
				<ManageTag />
				<CreateTag />
				<CreateMovie />

				<div className="utils">
					<div className="wrap-1200">
						<button className="util bg-primary" onClick={() => setPop("createMovie")}>영화 생성</button>
						<button className="util bg-sub" onClick={() => setPop('addTag')}>태그 생성</button>
						<button className="util bg-sub" onClick={() => setPop('manageTag')}>태그 관리</button>
					</div>
				</div>

				<div id="movies">
					<div className="wrap-1200">
						{movies.map((movie) => {
							return (<Movie movie={movie} key={movie.id} />);
						})}
					</div>
				</div>
			</Fragment>
		);
	}

	return "로딩중";

};
const mapStatesToProps = (state) => {
	return {
		tags: state.tagStates.tags,
		movies: state.movieStates.movies
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPop: (data) => {
			dispatch(setPop(data));
		},

		getTags: (data) => {
			dispatch(getTags(data));
		},

		getMovies: (data) => {
			dispatch(getMovies(data));
		}
	}
};

export default connect(mapStatesToProps, mapDispatchToProps)(Movies);