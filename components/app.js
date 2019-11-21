import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import { Page, PageInner } from './styles/Page';
import Larps from './Larps';
import Home from './Home';
import ShowLarp from './ShowLarp';

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <PageInner>
          <Switch>
            <Route path="/larps/:larpId">
              <ShowLarp />
            </Route>
            <Route path="/larps">
              <Larps />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </PageInner>
      </Page>
    );
  }
}

export default App;
