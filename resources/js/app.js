/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PreferredShops from './components/PreferredShops';
import About from './components/About';

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false,
          user: {}
        }
        this.changeState = this.changeState.bind(this);
        this.logOut = this.logOut.bind(this);
      }
      logOut(){
        let appState = {
          isLoggedIn: false,
          user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
      }
      componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
          let AppState = JSON.parse(state);
          this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
      }
      changeState(userData){
        let appState = {
          isLoggedIn: true,
          user: userData
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
          isLoggedIn: appState.isLoggedIn,
          user: appState.user
        });
      }
      render () {

        return (
          <BrowserRouter>
            <div>
              <Header state={this.state} logOut={this.logOut}/>
              <Switch>
                <Route exact path='/' component={About} />
                <Route exact path='/nearby-shops' component={() => <Home state={this.state} />} />
                <Route exact path='/preferred-shops' component={() => <PreferredShops state={this.state} />} />
                <Route exact path='/login' component={() => <Login state={this.state} changeState={this.changeState} />} />
                <Route exact path='/register' component={() => <Register state={this.state} changeState={this.changeState} />} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
