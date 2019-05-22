<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shop;
use App\User;
use App\Favorite;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $userFavShop = User::find($id)->shops()->get();
        $notFav = collect();
        foreach ($userFavShop as $shop) {
          $notFav->push($shop->id);
        }
        $shops = Shop::whereNotIn("id", $notFav->all())->get();
        return response()->json(['success' => true, 'data' => $shops], 201);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function likedShops()
     {
       //dd(auth()->id());
       $shops = User::find(1)->shops()->get();
       return response()->json(['success' => true, 'data' => $shops], 201);
     }
}
