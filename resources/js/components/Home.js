import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { shops } from "./Actions";
import { addFavorite } from "./Actions";
import { deleteFavorite } from "./Actions";

class Home extends Component {
  constructor(){
    super();
    this.state = {
      shops: [],
      coord: {}
    }
    this.setUserCoord = this.setUserCoord.bind(this);
    this.hundleAddFavorite = this.hundleAddFavorite.bind(this);
  }
  componentDidMount() {
    shops().then((res) => this.setState({
          shops: res.data.data
      })
    );
    console.log(this.state);
  }
  distanceColor(d){
    if (d < 10) {
      return 'success';
    }else if (d == 10) {
      return 'primary';
    }else if (d > 10 && d < 50) {
      return 'warning';
    }else {
      return 'danger';
    }
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
  hundleAddFavorite(id,e,i){
    e.preventDefault();
    $("#like")
    .attr("disabled", "disabled")
    .html(
      '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>Loading...'
    );
    const data = {
        user_id: JSON.parse(localStorage["appState"]).user.id,
        shop_id: id
    }

    addFavorite(data).then((res) => {
        if (res.data.success) {
          alert('yes');
          this.unShowShop(i);
        } else {
          alert('not');
        }
        $("#like")
          .removeAttr("disabled")
          .html("Like");
    })
  }
  unShowShop(index){
    this.state.shops.splice(index,1);
    this.setState(this.state);
  }
  renderShops(){
    const { shops } = this.state;
    return shops && shops.length ? shops.sort((a, b) => this.getShopDistance(this.state.coord.latitude, this.state.coord.longitude, a.lat, a.long, 'K') - this.getShopDistance(this.state.coord.latitude, this.state.coord.longitude, b.lat, b.long, 'K')).map((shop, index) => (
      <div key={index} className="col-md-4">
        {this.getShopDestance(shop.lat, shop.long)}
        <div className="card">
          <img className="card-img-top" src={shop.picture} />
          <div className="card-body">
            <h5 className="card-title">
              {shop.name}
            </h5>
          </div>
          <div className="card-footer ">
            <h3 className="align-middle"><div className={"badge badge-"+this.distanceColor(this.getShopDistance(this.state.coord.latitude, this.state.coord.longitude, shop.lat, shop.long, 'K').toFixed(2))+" float-right"}>{this.getShopDistance(this.state.coord.latitude, this.state.coord.longitude, shop.lat, shop.long, 'K').toFixed(2)} KM</div></h3>
            <div className="float-left">
              <div className="btn-group">
                <button type="button" id="like" onClick={(e) => this.hundleAddFavorite(shop.id,e,index)} className="btn btn-success">Like</button>
                <button type="button" id="dislike" onClick={(e) => this.hundleRemoveFavorite(shop.id,e)} className="btn btn-danger">Dislike</button>
              </div>

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
