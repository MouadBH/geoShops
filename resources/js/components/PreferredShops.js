import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { shops } from "./Actions";
import { addFavorite } from "./Actions";
import { deleteFavorite } from "./Actions";

class PreferredShops extends Component {
  constructor(){
    super();
    this.state = {
      shops: []
    };
  }
}

export default PreferredShops;
