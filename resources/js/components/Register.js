import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div>
        <div className="container text-center my-2">
        <h2>Register</h2>
          <form className='col-md-8 mx-auto align-middle'>
            <div className="form-group row">
              <label htmlFor="Username" className="col-sm-4 col-form-label">Username</label>
              <div className="col-sm-8">
                <input type="text" className="form-control mx-sm-3 " id="Username" placeholder="Enter Username" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="exampleInputEmail1" className="col-sm-4 col-form-label">Email address</label>
              <div className="col-sm-8">
                <input type="email" className="form-control mx-sm-3 " id="exampleInputEmail1" placeholder="Enter Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Password" className="col-sm-4 col-form-label">Password</label>
              <div className="col-sm-8">
                <input type="password" className="form-control mx-sm-3 " id="Password" placeholder="Enter Your Password" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Login;
