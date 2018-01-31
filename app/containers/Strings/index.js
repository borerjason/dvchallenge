import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectStrings } from '../App/selectors';
import reducer from '../App/reducer';
import saga from './saga';

import { loadStrings } from '../App/actions';

class Strings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      sampleStrings: ['test1', 'test2', 'test3'],
    };
  }

  componentDidMount() {
    console.log('Component did Mount');
    this.props.onInitialLoad();
  }

  renderStrings(strings) {
    return (
      <div>
        {this.state.sampleStrings.map((string) => (
          <div item={string}></div>
        ))}
      </div>
    );
  }

  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        <div>
          {this.props.strings.map((string) => (
            <div>{string}</div>
          ))}
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onInitialLoad: () => dispatch(loadStrings()),
  };
}

// function mapStateToProps(state) {
//   return {
//     strings: state.strings,
//   };
// }


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
