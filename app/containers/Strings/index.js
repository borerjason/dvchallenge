import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectStrings } from '../App/selectors';
import reducer from '../App/reducer';
import saga from './saga';
import Words from '../../components/Words';
import { loadStrings } from '../App/actions';

class Strings extends React.Component {
  componentDidMount() {
    this.props.onInitialLoad();
  }

  render() {
    return (
      <div>
        <Words>
          {this.props.strings.map((string) => ( // eslint-disable-line react/prop-types
            <div key={string.uid}>{string.string}</div>
          ))}
        </Words>
      </div>
    );
  }
}

Strings.propTypes = {
  onInitialLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onInitialLoad: () => dispatch(loadStrings()),
  };
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Strings);
