import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <Link to="/">
            Saved Strings
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
