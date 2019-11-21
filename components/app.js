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
            <Route
              path="/larps/:larpId"
              render={props => <ShowLarp {...props} />}
            />
            <Route path="/larps" component={Larps} />
            <Route exact path="/" component={Home} />
          </Switch>
        </PageInner>
      </Page>
    );
  }
}

export default App;
