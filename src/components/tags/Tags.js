import React, {Component, useEffect} from 'react';
import {setTags} from 'actions/contentsActions';
import {connect} from 'react-redux';
import axios from 'axios';
import Tag from "./Tag";


const Tags = ({tags, setTags}) => {
	useEffect(() => {
		if(tags.length === 0) {
			axios.get('/tags')
				.then((response) => {
					setTags(response.data);
				});
		}
	}, []);

	return (
		<div className="tags">
			{tags.map(tag => <Tag key={tag.id} tag={tag} />)}
		</div>
	);
};

const mapStates = (state) => {
	return {
		tags: state.contentsStates.tags
	}
};

const mapDispatch = (dispatch) => {
	return {
		setTags: (data) => {
			dispatch(setTags(data));
		}
	};
};

export default connect(mapStates, mapDispatch)(Tags);