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
        .get('/api/shops?token='+JSON.parse(localStorage["appState"]).user.auth_token)
        .then(res => {
          console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}
