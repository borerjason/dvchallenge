import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import NavBtn from '../../components/NavBtn';


export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar>
          <NavBtn to="/">
            Home
          </NavBtn>
          <NavBtn to="/strings">
            Saved Strings
          </NavBtn>
        </Navbar>
      </div>
    );
  }
}
