import React, {Fragment} from 'react';
import PopFunction from '../common/PopFunction';
import Tags from './Tags';

const ManageTag = () => {

	return (
		<Fragment>
			<PopFunction ids="manageTag" name="태그 관리" buttons={[]} contents={<Tags /> } />
		</Fragment>
	);
};


export default ManageTag;