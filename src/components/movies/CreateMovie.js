import React, {Fragment, useState, useEffect} from 'react';
import PopFunction from 'components/common/PopFunction';
import {connect} from 'react-redux';
import {save, update, get} from 'actions/movieActions';
import {get as getTags} from 'actions/tagActions';

const CreateMovie = ({getTags, save, get, update, movies, movie = null, tags}) => {
	let [form, setForm] = useState({
		title: "",
		body: "",
		openedAt: "",
		img: "",
		tagId: ""
	});

	let name = movie ? "영화 수정" : "영화 생성";

	const onChange = (e) => {
		setForm({...form, [e.target.name] : e.target.value});
	};

	const submit = () => {
		if(movie)
			return update(movie.id, form);


		return save(form);
	};

	const contents = (
		<Fragment>
			<div className="input-wrap">
				<div className="input">
					<input type="text" name="title" placeholder="영화명" value={form.title} onChange={onChange}/>
				</div>
			</div>
			
			<div className="input-wrap">
				<div className="input input-textarea">
					<textarea name="body" placeholder="줄거리" value={form.body} onChange={onChange}></textarea>
				</div>
			</div>

			<div className="input-wrap">
				<div className="input">
					<input type="date" name="openedAt" value={form.openedAt} placeholder="출시년도" onChange={onChange}/>
				</div>
			</div>

			<div className="input-wrap">
				<div className="input">
					<input type="text" name="img" value={form.img} placeholder="이미지 주소" onChange={onChange}/>
				</div>
			</div>

			<div className="input-wrap">
				<div className="input input-select border-primary">
					<select name="tagId" id="" onChange={onChange} className="primary" value={form.tagId}>
						<option value="" disabled>태그 선택</option>
						{
							tags ? tags.map(tag => <option value={tag.id} key={tag.id}>{tag.name}</option>)
								: <Fragment />
						}
					</select>
				</div>
			</div>
		</Fragment>
	);

	const buttons = [
		{
			name: "확인",
			method: submit
		}
	];

	useEffect(() => {
		if(movie)
			setForm(movie);

		if(!movies)
			get();

		if(!tags)
			getTags();
	}, []);

	return (
		<div className="createMovie">
			<PopFunction ids="createMovie" name={name} buttons={buttons} contents={contents}/>
		</div>
	);
};

const mapState = (state) => {
	return {
		movies: state.movieStates.movies,

		tags: state.tagStates.tags
	}
};

const mapDispatch = (dispatch) => {
	return {
		save: (data) => {
			dispatch(save(data))
		},

		update: (id, data) => {
			dispatch(update(id, data))
		},

		get: (data) => {
			dispatch(get(data))
		},

		getTags: (data = null) => {
			dispatch(getTags(data))
		}
	};
};

export default connect(mapState, mapDispatch)(CreateMovie);