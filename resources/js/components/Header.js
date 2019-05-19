import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor() {
    super();


  }
  render(){
    return(
      <nav className='navbar navbar-expand-lg navbar-dark  bg-primary navbar-laravel'>
      {{ console.log(this.props) }}
        <div className='container'>
          <Link className='navbar-brand' to='/'>GeoShops</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className='nav-link' to='/'>Nearby Shops  <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/'>My Preferred Shops</Link>
              </li>
            </ul>
            <div className="navbar-nav form-inline my-2 my-lg-0 ">
            {
              console.log(JSON.parse(localStorage["appState"]))

            }
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to='/login'>Login  <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/register'>Register  <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            </div>
          </div>

        </div>
      </nav>
    )
  }
}

export default Header;
