import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import { Page, PageInner } from './styles/Page';
import Larps from './Larps';
import Home from './Home';

const mapStateToProps = state => ({
  larps: state.larps,
  user: state.user,
});

const mapDispatchToProps = {};

class App extends Component {
  render() {
    const { user, larps } = this.props;
    return (
      <Page>
        <Header user={user} />
        <PageInner>
          <Switch>
            <Route path="/larps">
              <Larps larps={larps} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </PageInner>
      </Page>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  larps: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
