import {
    SET_TRACKS,
    ADD_TRACKS
  } from '../utils/constants';
  import { get } from '../utils/api';

  export const setTracks = (tracks) => ({
    type: SET_TRACKS,
    tracks
  });

  export const addTracks = (tracks) => ({
    type: ADD_TRACKS,
    tracks
  });
  
  export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
      try {
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=track`;
        const result = await get(API_URL);
        console.log(result);
        const { tracks } = result;
        console.log("THIS IS A TRACK:"+ tracks.items.length);
        return dispatch(setTracks(tracks));
      } catch (error) {
        console.log('error', error);
      }
    };
  };