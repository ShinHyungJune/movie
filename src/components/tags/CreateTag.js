import React, {Component, Fragment, useState} from 'react';
import axios from 'axios';
import {save} from 'actions/tagActions';
import PopFunc from 'components/common/PopFunction';
import {connect} from 'react-redux';

const CreateTag = ({tags, save}) => {
    let [form, setForm] = useState({
        name: ""
    });

    const inputChange = (e) => {
        setForm({
            [e.target.name]:e.target.value
        });
    };

    const store = () => {
		save(form);
    };

    const buttons = [
        {
            name: "확인",
            method: store
        }
    ];

    const contents = (
        <Fragment>
            <div className="input-wrap">
                <div className="input">
                    <input type="text" placeholder="태그명" name="name" value={form.name} onChange={inputChange}/>
                </div>
            </div>
        </Fragment>
    );


    return (
        <PopFunc ids="addTag" name="태그 추가"  buttons={buttons} contents={contents} />
    );
};

const mapState = (state) => {
    return {
        tags: state.tagStates.tags
    }
};

const mapDispatch = (dispatch) => {
    return {
        save: (data) => dispatch(save(data)),
    }
};

export default connect(mapState, mapDispatch)(CreateTag);