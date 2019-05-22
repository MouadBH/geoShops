<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
  /**
   * The users that belong to the shop.
   */
  public function users()
  {
      return $this->belongsToMany('App\User');
  }
}
