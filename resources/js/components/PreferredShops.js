import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { likedShops } from "./Actions";
import { deleteFavorite } from "./Actions";

class PreferredShops extends Component {
  constructor(){
    super();
    this.state = {
      shops: []
    };
  }
  componentDidMount() {
    likedShops().then((res) => this.setState({
          shops: res.data.data
      })
    );
    console.log(this.state);
  }
  hundleRemoveFavorite(id,e,i){
    e.preventDefault();
    $("#dislike"+i)
    .attr("disabled", "disabled")
    .html(
      '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>Loading...'
    );
    const data = {
        user_id: JSON.parse(localStorage["appState"]).user.id,
        shop_id: id
    }
    deleteFavorite(data).then((res) => {
        if (res.data.success) {
          alert('yes');
          this.unShowShop(i);
        } else {
          alert('not');
        }
        $("#dislike"+i)
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
    return shops && shops.length ? shops.map((shop, index) => (
      <div key={index} className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={shop.picture} />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#" className="text-dark">{shop.name} </a>
            </h5>
          </div>
          <div className="card-footer ">
            <div className="float-left">
              <div className="btn-group">
                <button type="button" id={"dislike"+index} onClick={(e) => this.hundleRemoveFavorite(shop.id,e,index)} className="btn btn-danger">Remove</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )) : null;
  }
  render(){
    return (
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

export default PreferredShops;
