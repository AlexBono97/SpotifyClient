import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import {connect } from 'react-redux';
import Header from './Header';
import { Redirect } from 'react-router-dom';

const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

const Home = (props) => {

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <Header />
          {sessionExpired && (
            <Alert variant="info">You have been logged out. Please login again.</Alert>
          )}
          <Button variant="info" type="submit" onClick={handleLogin}>
            Login to spotify
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};
export default Home;