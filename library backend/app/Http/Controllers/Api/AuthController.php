<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_BAD_REQUEST,
                'error' => $validator->errors(),
                'payload' => null
            ], 422);
        }

//         "username":"shakib",
//   "password":"12"
// "username":"maruf",
//   "password":"100"

        $credentials = $request->only('username', 'password');
        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = [
            'username'=> Auth::user()->username,
            'email'=> Auth::user()->email,
        ];

        return response()->json([

            'success'=> true,
            'status code'=> Response::HTTP_OK,
            'message'=> 'User login successfully',
            'payload' => [
                'data' => $user,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ],
            ],

        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'max:100'],
            'phone' => ['required', 'string'],
            'photo' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
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
        $photo = $request->file('photo');
        $photoName = Str::random(32) . '.' . $photo->getClientOriginalExtension();
        $photo->storeAs('photos', $photoName, 'public');
        $photoPath = storage_path('app/public/photos/' . $photoName);


        if ($user) {

            return response()->json(['message' => 'User already exists. Please sign in'], 409);
        }




        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'photo' => $photoPath,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'User register successfully
                         Photo upload successfully',
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
