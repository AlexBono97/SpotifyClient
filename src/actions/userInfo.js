import { SET_USER } from '../utils/constants';
import { get } from '../utils/api';

export const setUser = (userData) => ({
    type: SET_USER,
    userData
});


export const getCurrentUserInfo = () => {
    return async (dispatch) => {

        try{
            const API_URL = `https://api.spotify.com/v1/me`;
            const result = await get(API_URL);
            if(result){
            console.log(result);
            return dispatch(setUser(result));
            }
            return;
        }catch(error){
            console.log('error',error);
        }
    };
};