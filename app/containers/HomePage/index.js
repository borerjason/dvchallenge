/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import messages from './messages';
import { updateString, postString } from './actions';
import { makeSelectInputString } from './selectors';
import reducer from './reducer';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter a string..."
            value={this.props.inputString}
            onChange={this.props.onChangeInputString}
          />
          <button
            onClick={() => this.props.onClickPostInputString(this.props.inputString)}
          >Submit
          </button>

        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  inputString: PropTypes.string,
  onChangeInputString: PropTypes.func,
  onClickPostInputString: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInputString: (event) => dispatch(updateString(event.target.value)),
    onClickPostInputString: (string) => dispatch(postString(string)),
  };
}

const mapStateToProps = createStructuredSelector({
  inputString: makeSelectInputString(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);

