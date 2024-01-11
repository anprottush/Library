<?php

use App\Http\Controllers\Api\Admin\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('user/login', 'login');
    Route::post('user/register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

// Route::middleware(['auth.api'])->group(function (){
//     Route::get('/user', [UserController::class, 'index']);

//     Route::get('/user/{id}', [UserController::class, 'show']);
//     Route::post('/user', [UserController::class, 'store']);
//     Route::put('/user/{id}', [UserController::class, 'update']);
//     Route::delete('/user/{id}', [UserController::class, 'destroy']);
// });

Route::controller(BookController::class)->group(function () {
    Route::get('book', 'getall');
    Route::get('book/{id}', 'getbyid');
    Route::post('book', 'store');
    Route::put('book/{id}', 'update');
    Route::delete('book/{id}', 'delete');
});

Route::controller(UserController::class)->group(function () {
    Route::get('/user', 'index');
    Route::get('/user/{id}', 'show');
    Route::post('/user', 'store');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
});
