import {SET_USER} from '../utils/constants';

const userInfoReducer = (state = {}, action) => {
    const { userData } = action;

    switch(action.type){
        case SET_USER:
            return userData;

        default:
            return state;
    }
};
export default userInfoReducer;
