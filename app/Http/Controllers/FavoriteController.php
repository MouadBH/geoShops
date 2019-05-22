<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Shop;
use App\Favorite;

class FavoriteController extends Controller
{
    public function add(Request $request)
    {
      $fav = new Favorite();
      $fav->user_id = $request->user_id;
      $fav->shop_id = $request->shop_id;
      if ($fav->save()) {
        return response()->json(['success' => true], 201);
      }else{
        return response()->json(['success' => false], 201);
      }
    }
    public function remove(Request $request)
    {
      $shop = Favorite::where([
        ['user_id', '=', $request->user_id],
        ['shop_id', '=', $request->shop_id]
      ])->first();
      if ($shop->delete()) {
        return response()->json(['success' => true], 201);
      }else{
        return response()->json(['success' => false], 201);
      }
    }
}
