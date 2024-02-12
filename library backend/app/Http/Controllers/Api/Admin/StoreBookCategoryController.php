<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\StoreBookCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

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

        $data = $request->only('name','description','photo','status');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'status' => ['nullable', 'string'],

        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_BAD_REQUEST,
                'message'=> 'Data creation failed because some error occured. please try to solve the error',
                'error' => $validator->errors(),
            ], 400);
        }

        $photo = $request->file('photo');
        $photoName = Str::random(32) . '.' . $photo->getClientOriginalExtension();
        $photo->storeAs('photos', $photoName, 'public');
        $photo->move(public_path('img'), $photoName);
        $photoPath = url('/img/' . $photoName);


        $storebookcategory = StoreBookCategory::create([
            'name' => $request->name,
            'description' => $request->description,
            'photo' => $photoPath,
            'status' => $request->status,

        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $storebookcategory
        ], 201);


    }

    public function update(Request $request, $id)
    {
        $storebookcategory = StoreBookCategory::find($id);

        $storebookcategory->name = $request->name;
        $storebookcategory->description = $request->description;
        //$storebookcategory->cover_photo = $request->cover_photo;
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
