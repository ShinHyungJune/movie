import React, {Fragment} from 'react';
import PopFunction from '../common/PopFunction';
import {removeTag, updateTag} from 'actions/contentsActions';
import {connect} from 'react-redux';

const ManageTag = ({tags, removeTag, updateTag}) => {
    const contents = (
        <div className="tags">
            <div className="tag">
                공포

                <div className="tag-utils">
                    <button className="tag-util">수정</button>
                    <button className="tag-util">삭제</button>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
             <PopFunction ids="manageTag" name="카테고리 관리" buttons={[]} contents={contents} />
        </Fragment>
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

export default connect(mapStates, mapDispatch)(ManageTag);