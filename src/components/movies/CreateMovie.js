import React, {Fragment} from 'react';
import PopFunction from 'components/common/PopFunction';

const CreateMovie = () => {
	const onChange = () => {
		return null;
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
					<input type="datetime" name="openedAt" placeholder="출시년도" onChange={onChange}/>
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

	return (
		<div className="createMovie">
			<PopFunction ids="createMovie" name="영화 생성" buttons={[]} contents={contents}/>
		</div>
	);
};

export default CreateMovie;