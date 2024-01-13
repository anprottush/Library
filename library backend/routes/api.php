<?php

use App\Http\Controllers\Api\Admin\BookCategoryController;
use App\Http\Controllers\Api\Admin\BookController;
use App\Http\Controllers\Api\Admin\BookIssueController;
use App\Http\Controllers\Api\Admin\EBookController;
use App\Http\Controllers\Api\Admin\ExpenseController;
use App\Http\Controllers\Api\Admin\IncomeController;
use App\Http\Controllers\Api\Admin\MemberController;
use App\Http\Controllers\Api\Admin\RackController;
use App\Http\Controllers\Api\Admin\RequestBookController;
use App\Http\Controllers\Api\Admin\StoreBookCategoryController;
use App\Http\Controllers\Api\Admin\StoreBookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Models\DBEntity\Admin\Expense;
use App\Models\DBEntity\Admin\Income;
use App\Models\DBEntity\Admin\Rack;
use Illuminate\Auth\AuthenticationException;

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

// Authentication

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

Route::controller(UserController::class)->group(function () {
    Route::get('/user', 'index');
    Route::get('/user/{id}', 'show');
    Route::post('/user', 'store');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
});

// Admin

Route::controller(BookIssueController::class)->group(function () {
    Route::get('bookissue', 'getall');
    Route::get('bookissue/{id}', 'getbyid');
    Route::post('bookissue', 'store');
    Route::put('bookissue/{id}', 'update');
    Route::delete('bookissue/{id}', 'delete');
});

Route::controller(MemberController::class)->group(function () {
    Route::get('member', 'getall');
    Route::get('member/{id}', 'getbyid');
    Route::post('member', 'store');
    Route::put('member/{id}', 'update');
    Route::delete('member/{id}', 'delete');
});

Route::controller(EBookController::class)->group(function () {
    Route::get('ebook', 'getall');
    Route::get('ebook/{id}', 'getbyid');
    Route::post('ebook', 'store');
    Route::put('ebook/{id}', 'update');
    Route::delete('ebook/{id}', 'delete');
});

Route::controller(BookController::class)->group(function () {
    Route::get('book', 'getall');
    Route::get('book/{id}', 'getbyid');
    Route::post('book', 'store');
    Route::put('book/{id}', 'update');
    Route::delete('book/{id}', 'delete');
});

Route::controller(RackController::class)->group(function () {
    Route::get('rack', 'getall');
    Route::get('rack/{id}', 'getbyid');
    Route::post('rack', 'store');
    Route::put('rack/{id}', 'update');
    Route::delete('rack/{id}', 'delete');
});

Route::controller(BookCategoryController::class)->group(function () {
    Route::get('bookcategory', 'getall');
    Route::get('bookcategory/{id}', 'getbyid');
    Route::post('bookcategory', 'store');
    Route::put('bookcategory/{id}', 'update');
    Route::delete('bookcategory/{id}', 'delete');
});

Route::controller(RequestBookController::class)->group(function () {
    Route::get('requestbook', 'getall');
    Route::get('requestbook/{id}', 'getbyid');
    Route::post('requestbook', 'store');
    Route::put('requestbook/{id}', 'update');
    Route::delete('requestbook/{id}', 'delete');
});

Route::controller(StoreBookController::class)->group(function () {
    Route::get('storebook', 'getall');
    Route::get('storebook/{id}', 'getbyid');
    Route::post('storebook', 'store');
    Route::put('storebook/{id}', 'update');
    Route::delete('storebook/{id}', 'delete');
});

Route::controller(StoreBookCategoryController::class)->group(function () {
    Route::get('storebookcategory', 'getall');
    Route::get('storebookcategory/{id}', 'getbyid');
    Route::post('storebookcategory', 'store');
    Route::put('storebookcategory/{id}', 'update');
    Route::delete('storebookcategory/{id}', 'delete');
});

Route::controller(IncomeController::class)->group(function () {
    Route::get('income', 'getall');
    Route::get('income/{id}', 'getbyid');
    Route::post('income', 'store');
    Route::put('income/{id}', 'update');
    Route::delete('income/{id}', 'delete');
});

Route::controller(ExpenseController::class)->group(function () {
    Route::get('expense', 'getall');
    Route::get('expense/{id}', 'getbyid');
    Route::post('expense', 'store');
    Route::put('expense/{id}', 'update');
    Route::delete('expense/{id}', 'delete');
});








