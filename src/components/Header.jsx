import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header__container'>
      <div className='Header__navigation'>
        <Link to='/' className='Header__navigation__Link'>
          <span>Products</span>
        </Link>
        <Link to='/about' className='Header__navigation__Link'>
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
