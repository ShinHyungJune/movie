import React, {Component, useEffect} from 'react';
import {set} from 'actions/tagActions';
import {connect} from 'react-redux';
import axios from 'axios';
import Tag from "./Tag";


const Tags = ({tags, set}) => {
	useEffect(() => {
		if(tags.length === 0) {
			axios.get('/tags')
				.then((response) => {
					set(response.data);
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
		tags: state.tagsStates.tags
	}
};

const mapDispatch = (dispatch) => {
	return {
		set: (data) => {
			dispatch(set(data));
		}
	};
};

export default connect(mapStates, mapDispatch)(Tags);