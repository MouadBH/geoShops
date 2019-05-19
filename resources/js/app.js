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
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
