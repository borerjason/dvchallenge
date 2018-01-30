// import React from 'react';
// // import { connect } from 'react-redux';
// // import { compose } from 'redux';
// // import { createStructuredSelector } from 'reselect';

// // import injectReducer from 'utils/injectReducer';
// // import { makeSelectStrings } from '../HomePage/selectors';
// // import reducer from '../HomePage/reducer';
// // // import saga from '../HomePage/saga';

// export default class Strings extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   constructor(props) {
//     super(props);

//     this.state = {
//       sampleStrings: ['test1', 'test2', 'test3'],
//     };
//   }

//   componentDidMount() {
//     console.log('Component did Mount');
//   }

//   renderStrings(strings) {
//     return (
//       <div>
//         {this.state.sampleStrings.map((string) => (
//           <div item={string}></div>
//         ))}
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           {this.state.sampleStrings.map((string) => (
//             <div>{string}</div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps() = 
// // const mapStateToProps = createStructuredSelector({
// //   strings: makeSelectStrings(),
// // });

// //   const withReducer = injectReducer({ key: 'home', reducer });
// //   // const withSaga = injectSaga({ key: 'home', saga });

// // export default compose(
// //   // withReducer,
// //   // withSaga,
// //   mapStateToProps,
// // )(Strings);
