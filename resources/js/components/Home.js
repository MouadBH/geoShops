import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import geolib from 'geolib';
import { shops } from "./Actions";

class Home extends Component {
  constructor(){
    super();
    this.state = {
      shops: [],
      coord: {}
    }
    this.setUserCoord = this.setUserCoord.bind(this);
  }
  componentDidMount() {
    shops().then((res) => this.setState({
          shops: res.data.data
      })
    );
    console.log(this.state);
  }
  getShopDestance(lat, lng){
    navigator.geolocation.getCurrentPosition(this.setUserCoord);
  }
  getShopDistance(lat1, lon1, lat2, lon2, unit){
    if ((lat1 == lat2) && (lon1 == lon2)) {
  		return 0;
  	}
  	else {
  		var radlat1 = Math.PI * lat1/180;
  		var radlat2 = Math.PI * lat2/180;
  		var theta = lon1-lon2;
  		var radtheta = Math.PI * theta/180;
  		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  		if (dist > 1) {
  			dist = 1;
  		}
  		dist = Math.acos(dist);
  		dist = dist * 180/Math.PI;
  		dist = dist * 60 * 1.1515;
  		if (unit=="K") { dist = dist * 1.609344 }
  		if (unit=="N") { dist = dist * 0.8684 }
  		return dist;
  	}
  }
  setUserCoord(position){
    this.setState({ coord: position.coords });
  }
  renderShops(){
    const { shops } = this.state;
    return shops && shops.length ? shops.map((shop, index) => (
      <div key={index} className="col-md-4">
        {this.getShopDestance(shop.lat, shop.long)}
        <div className="card">
          <img className="card-img-top" src={shop.picture} />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#" className="text-dark">{shop.name} </a>
            </h5>
          </div>
          <div className="card-footer">
            <div className="badge badge-danger float-right">{this.getShopDistance(this.state.coord.latitude, this.state.coord.longitude, shop.lat, shop.long, 'K').toFixed(2)} KM</div>
            <div className="float-left">
              <a href="#" className="text-danger"></a>
              <br />
              <small className="text-muted">{shop.email}</small>
            </div>
          </div>
        </div>
      </div>
    )) : null;
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <div className="container-fluid my-2">
          <div className="container">
          <h2>Shop List</h2>
            <div className="row">
              { this.renderShops() }
            </div>{/*.row*/}
          </div>{/*.container*/}

        </div>
      </div>
    )
  }
}

export default Home;
