<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SeedController extends Controller
{
    public function index()
    {
        $items = DB::table('items')->get();

        return response()->json(['items' => $items]);
    }
}
