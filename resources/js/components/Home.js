import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast';
import { shops } from "./Actions";
import { addFavorite } from "./Actions";
import { deleteFavorite } from "./Actions";
const distanceBadge = {
  position: 'absolute',
  right: '5px',
  top: '5px',
  fontSize: '15px'
};

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

  getShopDistance(lat, lng){
     let origin = new google.maps.LatLng(this.state.coord.latitude, this.state.coord.longitude);
     let destination = new google.maps.LatLng(lat, lng);
     let distance_in_meters = google.maps.geometry.spherical.computeDistanceBetween( origin, destination );
	   let distance = distance_in_meters / 1000;
     return distance.toFixed(1);
  }
  setUserCoord(position){
    this.setState({ coord: position.coords });
  }
  hundleAddFavorite(id,e,i){
    e.preventDefault();
    $("#like")
    .attr("disabled", "disabled")
    .html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
    const data = {
        user_id: JSON.parse(localStorage["appState"]).user.id,
        shop_id: id
    }

    addFavorite(data).then((res) => {
        if (res.data.success) {
          notify.show('Shop Added To Your Preferred Shops!',"success");
          this.unShowShop(i);
        } else {
          notify.show('Oops there some Problem try again later!',"error ");
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
    return shops && shops.length ? shops.sort((a, b) => this.getShopDistance(a.lat, a.long) - this.getShopDistance(b.lat, b.long)).map((shop, index) => (
      <div key={index} className="col-md-4">
        {this.getShopDestance(shop.lat, shop.long)}
        <div className="card">
          <span className={"badge badge-"+this.distanceColor(this.getShopDistance(shop.lat, shop.long))+" float-right"} style={distanceBadge}>
            {this.getShopDistance(shop.lat, shop.long)} KM
          </span>
          <img className="card-img-top" src={shop.picture} />
          <div className="card-body">
            <h5 className="card-title">
              {shop.name}
            </h5>
          </div>
          <div className="card-footer ">
            <div className="text-center">
              <div className="btn-group">
                <button type="button" id="like" onClick={(e) => this.hundleAddFavorite(shop.id,e,index)} className="btn btn-success btn-md">Like</button>
                <button type="button" id="dislike" onClick={(e) => this.hundleRemoveFavorite(shop.id,e)} className="btn btn-danger btn-md">Dislike</button>
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
        <Notifications />
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
