import React, { Component } from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom'

class Header extends Component {
  constructor() {
    super();
  }

  renderMenu(){
    if (this.props.state.isLoggedIn) {

      return <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className='nav-link' exact to='/'>About </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className='nav-link' exact to='/nearby-shops'>Nearby Shops  </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' exact to='/preferred-shops'>My Preferred Shops</NavLink>
        </li>
        <li className="nav-item">
          <Link className='nav-link' exact onClick={this.props.logOut} to='/'>Logout</Link>
        </li>
      </ul>
    } else {
      return <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className='nav-link' exact to='/'>About </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' exact to='/login'>Login  <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' exact to='/register'>Register  <span className="sr-only">(current)</span></NavLink>
        </li>
      </ul>
    }
  }
  render(){
    return(
      <nav className='navbar navbar-expand-lg navbar-dark  bg-primary navbar-laravel'>

        <div className='container'>
          <Link className='navbar-brand' to='/'>GeoShops</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

              {this.renderMenu()}
          </div>

        </div>
      </nav>
    )
  }
}

export default Header;
