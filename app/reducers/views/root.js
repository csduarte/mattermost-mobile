// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {combineReducers} from 'redux';
import {Constants} from 'mattermost-redux/constants';

function hydrationComplete(state = false, action) {
    switch (action.type) {
    case Constants.STORE_REHYDRATION_COMPLETE:
        return true;
    default:
        return state;
    }
}

export default combineReducers({
    hydrationComplete
});
