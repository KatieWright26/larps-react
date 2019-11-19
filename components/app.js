import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import CreateLarp from './CreateLarp';
import { Page, PageInner } from './styles/Page';
import LarpList from './LarpList';
import LarpFormContainer from './styles/LarpFormContainer';

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
          <article>
            <h2>There are {larps.length} larps</h2>
            <LarpFormContainer>
              <CreateLarp />
            </LarpFormContainer>
            <LarpList larps={larps} />
          </article>
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
