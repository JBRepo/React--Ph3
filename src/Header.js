import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
      <nav>
        <ul>        
          <li><Link to='/AddElement'>Add Element</Link></li>        
          <li><Link to='/ListElement'>List Element</Link></li> 
        </ul>
      </nav>
    </header>
  )

  export default Header;
  