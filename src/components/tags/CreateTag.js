import React, {Component, Fragment, useState} from 'react';
import axios from 'axios';
import {addTag} from 'actions/contentsActions';
import PopFunc from 'components/common/PopFunction';
import {connect} from 'react-redux';

const CreateTag = ({tags, addTag}) => {
    let [form, setForm] = useState({
        name: ""
    });

    const inputChange = (e) => {
        setForm({
            [e.target.name]:e.target.value
        });
    };

    const store = () => {
        axios.post('/tags', form)
            .then((response) => {
                addTag(response.data);

                alert("성공적으로 추가되었습니다.");
            });
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
        tags: state.contentsStates.tags
    }
};

const mapDispatch = (dispatch) => {
    return {
        addTag: (data) => dispatch(addTag(data)),
    }
};

export default connect(mapState, mapDispatch)(CreateTag);