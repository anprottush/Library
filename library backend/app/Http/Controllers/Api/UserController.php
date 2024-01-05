<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {

        $users = User::all();
        if($users!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $users
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $users
            ], Response::HTTP_NOT_FOUND);
        }


    }

    public function show($id)
    {
        $user = User::find($id);
        if($user!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $user

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $user
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $user = new User();
        $user->username = $request->username;
        $user->password = $request->password;

        $user->save();

        if($user!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $user
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $user
            ], Response::HTTP_NO_CONTENT);
        }

        //$user = User::create($request->all());

    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->username = $request->username;
        $user->password = $request->password;

        $user->save();

        if($user!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $user
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $user
            ], Response::HTTP_BAD_REQUEST);
        }

        //$user->update($request->all());
    }

    public function destroy($id)
    {
        //User::find($id)->delete();
        User::destroy($id);
        //return response()->json(null, 204);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
