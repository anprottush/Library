<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\BookCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

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

        $data = $request->only('name','description','photo','status');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string', 'max:100'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'status' => ['required', 'string'],

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


        $bookcategory = BookCategory::create([
            'name' => $request->name,
            'description' => $request->description,
            'photo' => $photoPath,
            'status' => $request->status,

        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $bookcategory
        ], 201);

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

        $bookcategory = BookCategory::find($id);
        BookCategory::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully',
            'payload' => $bookcategory

        ], Response::HTTP_OK);
    }
}
