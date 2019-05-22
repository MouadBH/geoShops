import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { register } from "./Actions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
        username: '',
        email: '',
        password: '',
        redirect: false,
        errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  componentDidMount(){
    if (this.props.state.isLoggedIn) {
        this.setState({ redirect:true });
    }
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
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
      }

      $("#email-register-btn")
      .attr("disabled", "disabled")
      .html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
      );

      register(user).then((res) => {
        if (res.data.success) {
          const { name, id, email, auth_token } = res.data.data;
          let userData = {
          name,
          id,
          email,
          auth_token,
          timestamp: new Date().toString()
          };
          this.props.changeState(userData);

          this.setState({ redirect: true });
        } else {
          alert('not');
        }
        $("#email-register-btn")
          .removeAttr("disabled")
          .html("Register");
      })
  }
  render(){
    return(
      <div className="py-4">
        {this.renderRedirect()}
        <div className="container mt-5">
          <div className="row justify-content-center text-center">
              <div className="col-md-8">
                <div className="card">
                  <h2 className="card-header">Register</h2>
                  <form onSubmit={this.onSubmit} className="card-body">
                      <div className="form-group row">
                        <label htmlFor="Username" className="col-sm-4 col-form-label">Username</label>
                        <div className="col-sm-8">
                          <input type="text" name="username" onChange={this.onChange} value={this.state.username} className="form-control mx-sm-3 " id="Username" placeholder="Enter Username" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputEmail1" className="col-sm-4 col-form-label">Email address</label>
                        <div className="col-sm-8">
                          <input type="email" name="email" onChange={this.onChange} value={this.state.email} className="form-control mx-sm-3 " id="exampleInputEmail1" placeholder="Enter Email" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="Password" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8">
                          <input type="password" name="password" onChange={this.onChange} value={this.state.password} className="form-control mx-sm-3 " id="Password" placeholder="Enter Your Password" />
                        </div>
                      </div>
                      <button type="submit" id="email-register-btn" className="btn btn-primary mb-2">Register</button>
                    </form>
                </div>
              </div>
            </div>
        </div>

      </div>
    )
  }
}
export default Login;
