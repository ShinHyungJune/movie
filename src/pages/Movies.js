import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import commonActions from 'actions/commonActions';

import Movie from "../components/Movie";
import PopFunc from '../components/common/PopFunction';

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
			<PopFunc ids="addTag" name="태그 추가"  buttons={[]} contents={null}/>

			<div className="utils">
				<div className="wrap-1200">
					<button className="util bg-primary">프로젝트 생성</button>
					<button className="util bg-sub" onClick={() => setPop('addTag')}>태그 생성</button>
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
				dispatch(commonActions.setPop(data));
			}
		}
	}
};

export default connect(null, mapDispatchToProps)(Movies);