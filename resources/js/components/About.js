import React, { Component } from 'react';

const About = () => {
  return(
    <div className="py-4">
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <img src="https://thewebland.net/wp-content/uploads/2017/11/laravel-react.png" style={{width: '300px'}}/>
               <h1 style={{color: '#445365',marginTop: '20px'}}>GeoShops App</h1>
               <p style={{margin: '30px auto', width: '600px', fontSize: '18px'}}>
                Welcome, this project is a web coding challenge created as the second step for job application
                in <a href="https://unitedremote.com" title=" United Remote."> United Remote.</a><br/>
                It's coded using <u>ReactJS</u> for the SPA and <u>Laravel</u> for the Api.
                The main application job is to list shops nearby the user location.<br />
                For more information please see the links below.
              </p>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="https://github.com/hiddenfounders/web-coding-challenge" title="Project specs">Project specs</a>
                </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="https://github.com/MouadBH/geoShops" title="Peoject source code">Peoject source code</a>
                  </li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About;
