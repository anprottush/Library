<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

//         "username":"shakib",
//   "password":"12"
// "username":"maruf",
//   "password":"100"

        $credentials = $request->only('name', 'password');
        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = [
            'username'=> Auth::user()->name,
            'email'=> Auth::user()->email,
        ];

        return response()->json([
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'max:100'],
            'password' => ['required', 'string'],
            'phone' => ['nullable', 'string', 'max:20'],
            'address' => ['nullable', 'string'],
            'usertype' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_UNPROCESSABLE_ENTITY,
                'error' => $validator->errors(),
                'payload' => null
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if ($user) {

            return response()->json(['message' => 'User already exists. Please sign in'], 409);
        }


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'address' => $request->address,
            'usertype' => $request->usertype,
        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'User register successfully',
            'payload' => $user
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'user' => Auth::user(),
            'authorization' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
