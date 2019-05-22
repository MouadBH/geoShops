import axios from 'axios';
import { defaultCoreCipherList } from 'constants';

export const login = user => {
    return axios
        .post('api/user/login', {
            email: user.email,
            password: user.password
        }, {
                headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            console.log(res);
            return  res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const register = user => {
    return axios
        .post('api/user/register', {
            name: user.username,
            email: user.email,
            password: user.password
        }, {
                headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const shops = () => {
    return axios
        .get('/api/shops/'+JSON.parse(localStorage["appState"]).user.id+'?token='+JSON.parse(localStorage["appState"]).user.auth_token)
        .then(res => {
          console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const likedShops = () => {
    return axios
        .get('/api/liked?token='+JSON.parse(localStorage["appState"]).user.auth_token)
        .then(res => {
          console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const addFavorite = data => {
    return axios
        .post('api/shop/favorite?token='+JSON.parse(localStorage["appState"]).user.auth_token, {
            user_id: data.user_id,
            shop_id: data.shop_id
        }, {
                headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            console.log(res);
            return  res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const deleteFavorite = data => {
    return axios
        .delete('api/shop/notfavorite?token='+JSON.parse(localStorage["appState"]).user.auth_token, {
            params: {
              'user_id': data.user_id,
              'shop_id': data.shop_id
            }
        }, {
                headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            console.log(res);
            return  res;
        })
        .catch(err => {
            console.log(err);
        });
}
