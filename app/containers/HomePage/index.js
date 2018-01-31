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
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import { updateString, postString } from './actions';
import { makeSelectInputString } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import H1 from '../../components/H1';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form>
          <Input
            type="text"
            placeholder="Enter a string..."
            value={this.props.inputString}
            onChange={this.props.onChangeInputString}
          />
          <Button
            onClick={(event) => { event.preventDefault(); this.props.onClickPostInputString(this.props.inputString); }}
          >Submit
          </Button>
        </Form>
        <div>
          
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
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

