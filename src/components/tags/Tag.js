import React, {Component, Fragment, useState, useEffect} from 'react';
import {removeTag, updateTag} from 'actions/contentsActions';
import {connect} from 'react-redux';

const Tag = ({tag, removeTag, updateTag}) => {
	let [edit, setEdit] = useState(false);
	let [item, setItem] = useState({});

	useEffect(() => {
		setItem(tag)
	}, []);

	const onChange = (e) => {
		setItem({...item, [e.target.name] : e.target.value});
	};

	const update = () => {
		updateTag(item);

		setEdit(false);
	};

	return (
		<div className="tag">
			{ edit 
				? 
				<div className="input-wrap">
					<div className="input">
						<input type="text" name="name" value={item.name} onChange={onChange}/>
					</div>
				</div>
				: <p className="tag-name">{tag.name}</p>
			}
			

			<div className="tag-utils">
				{ edit
					?
					<Fragment>
						<button className="tag-util" onClick={update}>확인</button>
						<button className="tag-util" onClick={() => setEdit(false)}>취소</button>
					</Fragment>
					:
					<Fragment>
						<button className="tag-util" onClick={() => setEdit(true)}>수정</button>
						<button className="tag-util" onClick={() => removeTag(tag)}>삭제</button>
					</Fragment>

				}
			</div>
		</div>
	);
};

const mapStates = (state) => {
	return {
		tags: state.tags
	}
};

const mapDispatch = (dispatch) => {
	return {
		removeTag: (data) => {
			dispatch(removeTag(data))
		},

		updateTag: (data) => {
			dispatch(updateTag(data))
		}
	};
};

export default connect(mapStates, mapDispatch)(Tag);