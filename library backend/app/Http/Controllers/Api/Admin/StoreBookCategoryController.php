<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\StoreBookCategory;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StoreBookCategoryController extends Controller
{
    public function getall()
    {
        $storebookcategories = StoreBookCategory::paginate(10);
        if($storebookcategories!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $storebookcategories
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $storebookcategories
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $storebookcategory = StoreBookCategory::find($id);
        if($storebookcategory!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $storebookcategory

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $storebookcategory
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {

        $storebookcategory = new StoreBookCategory();

        $storebookcategory->name = $request->name;
        $storebookcategory->description = $request->description;
        $storebookcategory->cover_photo = $request->cover_photo;
        $storebookcategory->status = $request->status;

        $storebookcategory->save();

        if($storebookcategory!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $storebookcategory
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $storebookcategory
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $storebookcategory = StoreBookCategory::find($id);

        $storebookcategory->name = $request->name;
        $storebookcategory->description = $request->description;
        $storebookcategory->cover_photo = $request->cover_photo;
        $storebookcategory->status = $request->status;

        $storebookcategory->save();

        if($storebookcategory!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $storebookcategory
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $storebookcategory
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {

        StoreBookCategory::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
