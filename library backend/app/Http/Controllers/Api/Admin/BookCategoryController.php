<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\BookCategory;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BookCategoryController extends Controller
{
    public function getall()
    {
        $bookcategories = BookCategory::paginate(10);
        if($bookcategories!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $bookcategories
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $bookcategories
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $bookcategory = BookCategory::find($id);
        if($bookcategory!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $bookcategory

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $bookcategory
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $bookcategory = new BookCategory();
        $bookcategory->name = $request->name;
        $bookcategory->description = $request->description;
        $bookcategory->cover_photo = $request->cover_photo;
        $bookcategory->status = $request->status;


        $bookcategory->save();

        if($bookcategory!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $bookcategory
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $bookcategory
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $bookcategory = BookCategory::find($id);

        $bookcategory->name = $request->name;
        $bookcategory->description = $request->description;
        $bookcategory->cover_photo = $request->cover_photo;
        $bookcategory->status = $request->status;


        $bookcategory->save();

        if($bookcategory!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $bookcategory
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $bookcategory
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {
        BookCategory::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
