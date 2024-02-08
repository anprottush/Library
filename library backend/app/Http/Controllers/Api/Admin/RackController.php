<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Rack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class RackController extends Controller
{
    public function getall()
    {
        $racks = Rack::paginate(10);
        if($racks!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $racks
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $racks
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $rack = Rack::find($id);
        if($rack!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $rack

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $rack
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $data = $request->only('name','description');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string', 'max:100'],


        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_BAD_REQUEST,
                'message'=> 'Data creation failed because some error occured. please try to solve the error',
                'error' => $validator->errors(),
            ], 400);
        }

        $rack = Rack::create([
            'name' => $request->name,
            'description' => $request->description,

        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $rack
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $rack = Rack::find($id);

        $rack->name = $request->name;
        $rack->description = $request->author;

        $rack->save();

        if($rack!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $rack
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $rack
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {
        //User::find($id)->delete();
        Rack::destroy($id);
        //return response()->json(null, 204);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
