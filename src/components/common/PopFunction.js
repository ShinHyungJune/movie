import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {setPop} from 'actions/commonActions';

/*
* id - 팝업창 식별자
* name - 팝업 제목
* buttons - 팝업 버튼
* contents - 팝업 내용
* */

const PopFunction = ({ids, name, buttons, contents, setPop, pop}) => {

	const close = () => {
		setPop(null);
	};

	let [activated, setActivated] = useState(false);

	useEffect(() => {
		if(pop === ids)
			return setActivated(true);

		return setActivated(false);
	}, [pop]);

	if(activated)
		return (
			<Fragment>
				<div className="black"></div>

				<div className="pop">
					<p className="pop-title">{name}</p>

					<div className="pop-contents">
						{contents}
					</div>

					<div className="pop-btns">
						{buttons.map((button, index) => (<button key={index} className="pop-btn" onClick={button.method}>{button.name}</button>))}
						<button className="pop-btn bg-gray" onClick={close}>취소</button>
					</div>
				</div>
			</Fragment>
		);

	return null;
};

const mapStateToProps = (state) => {
	return {
		pop: state.commonStates.pop
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPop: (data) => {
			dispatch(setPop(data));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PopFunction);