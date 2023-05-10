import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstComponent from './components/LoginComponent/FirstComponent';
import ThirdComponent from './components/AdmComponent/ThirdComponent';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ThirdComponent} />
        <Route exact path="/login" component={FirstComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;