import React from 'react';
import _ from 'lodash';
import TracksList from './TracksList';
import { Redirect } from 'react-router-dom';

const SearchResult = (props) => {
  const { result, isValidSession } = props;


  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true
          }
        }}
      />
    );
  }

  return (
    <React.Fragment>
        {result && <TracksList tracks={result} />}
    </React.Fragment>
  );
};
export default SearchResult;