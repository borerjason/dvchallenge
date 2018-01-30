import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          Saving Strings
        </div>
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/strings">
            Saved Strings
          </Link>
        </div>
      </div>
    );
  }
}
