import {FETCH_POSTS} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
    switch(action.type) {
        case FETCH_POSTS:
            let dataObj = {};
            action.payload.data.forEach((obj) => {
                dataObj[obj.id] = obj;
            });
            // _.mapKeys(action.payload.data, 'id');
            return dataObj;
        default:
            return state;
    }
}