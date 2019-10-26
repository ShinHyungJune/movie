import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tag from "./Tag";


const Tags = ({tags}) => {
	return (
		<div className="tags">
			{tags.map(tag => <Tag key={tag.id} tag={tag} />)}
		</div>
	);
};

const mapStates = (state) => {
	return {
		tags: state.tagStates.tags
	}
};

const mapDispatch = (dispatch) => {
	return {

	};
};

export default connect(mapStates, mapDispatch)(Tags);