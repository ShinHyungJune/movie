import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setPop} from 'actions/commonActions';

import Movie from "../components/Movie";
import CreateTag from 'components/tags/CreateTag';
import ManageTag from 'components/tags/ManageTag';

const Movies = ({commonActions: {setPop}}) => {
	let [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get("/movies")
			.then((response) => {
				setMovies(response.data);
			});
	}, []);

	return (
		<Fragment>
			<ManageTag />
			<CreateTag />

			<div className="utils">
				<div className="wrap-1200">
					<button className="util bg-primary">영화 생성</button>
					<button className="util bg-sub" onClick={() => setPop('addTag')}>태그 생성</button>
					<button className="util bg-sub" onClick={() => setPop('manageTag')}>태그 관리</button>
				</div>
			</div>

			<div className="wrap-1200">
				<div id="movies">
					{movies.map((movie) => {
						return (<Movie movie={movie} key={movie.id} />);
					})}
				</div>
			</div>
		</Fragment>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		commonActions: {
			setPop: (data) => {
				dispatch(setPop(data));
			}
		}
	}
};

export default connect(null, mapDispatchToProps)(Movies);