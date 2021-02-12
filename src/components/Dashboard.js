import React, { useState } from "react";

import { initiateGetResult } from "../actions/result";
import { getCurrentUserInfo } from "../actions/userInfo";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import _ from "lodash";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Loader from "./Loader";
import HeaderBar from "./HeaderBar";

const selectData = (state) => state.userInfo;
const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isValidSession, history } = props;

  const userData = useSelector(selectData);

  React.useEffect(() => {
    if (_.isEmpty(userData)) {
      props.dispatch(getCurrentUserInfo());
    }
  }, []);

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
      });
    } else {
      history.push({
        pathname: "/",
        state: {
          session_expired: true,
        },
      });
    }
  };

  const { tracks } = props;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <>
          <div>
            <HeaderBar userInfo={userData} />
          </div>

          <SearchForm handleSearch={handleSearch} />
          <Loader show={isLoading}>Loading...</Loader>
          <SearchResult result={tracks} isValidSession={isValidSession} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              session_expired: true,
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(Dashboard);
