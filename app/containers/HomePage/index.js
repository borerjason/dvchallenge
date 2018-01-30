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
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import messages from './messages';
import { updateString } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    {console.log('PROPS', this.props)}
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
            onClick={() => { console.log('SUBMIT', this.props); }}
          >Submit</button>

        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInputString: (event) => dispatch(updateString(event.target.value)),
  };
}

const mapStateToProps = (state) => {
  console.log('in mapstatetoprops', state);
  // need to update this to use selectors
  return { inputString: state._root.entries[2][1] };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePage);

