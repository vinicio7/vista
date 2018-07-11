<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('src');
});

Auth::routes();
Route::get('ws/informacion',			'InformacionController@info');
Route::post('ws/aprob/{id}',					'InformacionController@aprob');
Route::get('/home', 'HomeController@index')->name('home');
