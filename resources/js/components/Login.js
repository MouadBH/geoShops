import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import $ from "jquery";
import { login } from "./Actions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
        email: '',
        password: '',
        redirect: false,
        errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChange(e){
      this.setState({ [e.target.name]: e.target.value})
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  onSubmit(e){
      e.preventDefault();

      const user = {
          email: this.state.email,
          password: this.state.password
      }

      $("#email-login-btn")
      .attr("disabled", "disabled")
      .html(
        '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>Loading...'
      );

      login(user).then((res) => {
          if (res.data.success) {
            const { name, id, email, auth_token } = res.data.data;
            let userData = {
            name,
            id,
            email,
            auth_token,
            timestamp: new Date().toString()
            };
            let appState = {
              isLoggedIn: true,
              user: userData
            };
            localStorage["appState"] = JSON.stringify(appState);
            this.setState({
              isLoggedIn: appState.isLoggedIn,
              user: appState.user
            });

            this.setState({ redirect: true });
          } else {
            alert('not');
          }
          $("#email-login-btn")
            .removeAttr("disabled")
            .html("Login");
      })
  }
  render(){
    return(
        <div>
        {this.renderRedirect()}
          <div className="container text-center my-2">
          <h2>Login</h2>
            <form onSubmit={this.onSubmit} className='col-md-8 mx-auto align-middle'>
              <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="col-sm-4 col-form-label">Email address</label>
                <div className="col-sm-8">
                  <input type="email" onChange={this.onChange} value={this.state.email} name="email" className="form-control mx-sm-3 " id="exampleInputEmail1" placeholder="Enter Email" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Password" className="col-sm-4 col-form-label">Password</label>
                <div className="col-sm-8">
                  <input type="password" onChange={this.onChange} value={this.state.password} name="password" className="form-control mx-sm-3 " id="Password" placeholder="Enter Your Password" />
                </div>
              </div>
              <button type="submit" id="email-login-btn" className="btn btn-primary mb-2">Login</button>
            </form>
          </div>
        </div>
    )
  }
}
export default Login;
