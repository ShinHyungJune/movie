import React, {Fragment, useState} from 'react';
import PopFunction from 'components/common/PopFunction';
import {connect} from 'react-redux';
import {save} from 'actions/movieActions';

const CreateMovie = ({save}) => {
	let [form, setForm] = useState({});

	const onChange = (e) => {
		setForm({...form, [e.target.name] : e.target.value});
	};

	const store = () => {
		save(form);
	};

	const contents = (
		<Fragment>
			<div className="input-wrap">
				<div className="input">
					<input type="text" name="title" placeholder="영화명" onChange={onChange}/>
				</div>
			</div>
			
			<div className="input-wrap">
				<div className="input input-textarea">
					<textarea name="body" placeholder="줄거리" onChange={onChange}></textarea>
				</div>
			</div>

			<div className="input-wrap">
				<div className="input">
					<input type="date" name="openedAt" placeholder="출시년도" onChange={onChange}/>
				</div>
			</div>

			<div className="input-wrap">
				<div className="input">
					<input type="text" name="image" placeholder="이미지 주소" onChange={onChange}/>
				</div>
			</div>

			<div className="input-wrap">
				<div className="input input-select border-primary">
					<select name="tag" id="" onChange={onChange} className="primary">
						<option value="">태그 선택</option>
					</select>
				</div>
			</div>
		</Fragment>
	);

	const buttons = [
		{
			name: "생성",
			method: store
		}
	];

	return (
		<div className="createMovie">
			<PopFunction ids="createMovie" name="영화 생성" buttons={buttons} contents={contents}/>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		save: (data) => {
			dispatch(save(data))
		}
	};
};

export default connect(null, mapDispatch)(CreateMovie);