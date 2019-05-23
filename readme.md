# United Remote Web Coding Challenge

*this project is a simple web coding challenge with coding-best-practices in mind created as the second step for job application in hidden founders.

<p align="center">
	<img src="https://thewebland.net/wp-content/uploads/2017/11/laravel-react.png">
</p>

*The technologies used in this project are [React](https://reactjs.org/) for the UI and [Laravel](http://laravel.com) for the API.*

## Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/5.4/installation#installation)

Clone the repository

    git clone https://github.com/MouadBH/geoShops

Switch to the repo folder

    cd geoShops

Install all the dependencies using composer

    composer install

Install npm dependencies

    npm install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Generate a new JWT authentication secret key

    php artisan jwt:secret

Run the database migrations (**Create the database and Set the connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

# Screenshots

## Sign up
<p align="center">
	<img src="https://i.ibb.co/xHbMvDX/003.png">
</p>

## Sign in
<p align="center">
	<img src="https://i.ibb.co/mhjjs7h/002.png">
</p>

## Nearby Shops
<p align="center">
	<img src="https://i.ibb.co/CBgJQsh/004.png">
</p>

## My preferred Shops
<p align="center">
	<img src="https://i.ibb.co/tHfZ98Z/005.png">
</p>

## About
<p align="center">
	<img src="https://i.ibb.co/9bkVMKV/001.png">
</p>
