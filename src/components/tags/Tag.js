import React, {Component, Fragment, useState, useEffect} from 'react';
import {remove, update} from 'actions/tagActions';
import {connect} from 'react-redux';

const Tag = ({tag, remove, update}) => {
	let [edit, setEdit] = useState(false);
	let [item, setItem] = useState({});

	useEffect(() => {
		setItem(tag)
	}, []);

	const onChange = (e) => {
		setItem({...item, [e.target.name] : e.target.value});
	};

	const updateTag = () => {
		update(item);

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
						<button className="tag-util" onClick={updateTag}>확인</button>
						<button className="tag-util" onClick={() => setEdit(false)}>취소</button>
					</Fragment>
					:
					<Fragment>
						<button className="tag-util" onClick={() => setEdit(true)}>수정</button>
						<button className="tag-util" onClick={() => remove(tag)}>삭제</button>
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
		remove: (data) => {
			dispatch(remove(data))
		},

		update: (data) => {
			dispatch(update(data))
		}
	};
};

export default connect(mapStates, mapDispatch)(Tag);