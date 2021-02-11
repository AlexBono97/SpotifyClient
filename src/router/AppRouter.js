import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = (props) => {

  const [expiryTime, setExpiryTime] = React.useState('0');

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    const currentExpiryTime = expiryTime;
    const isSessionValid = currentTime < currentExpiryTime;
  
    return isSessionValid;
  };
  


  React.useEffect(() => {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    setExpiryTime(expiryTime);
  })

  return(
    <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" 
            exact={true}
            render={(props) => (
                <Home isValidSession={isValidSession} {...props} />
              )}  />
            <Route path="/redirect" 
            render={(props) => (
                <RedirectPage
                  isValidSession={isValidSession}
                  setExpiryTime={setExpiryTime}
                  {...props}
                />
              )}
            />
            <Route path="/dashboard" 
            render={(props) => (
                <Dashboard isValidSession={isValidSession} {...props} />
              )}
           />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
  );

} 
export default AppRouter;