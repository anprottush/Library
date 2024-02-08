<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\RequestBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class RequestBookController extends Controller
{
    public function getall()
    {
        $requestbooks = RequestBook::paginate(10);
        if($requestbooks!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $requestbooks
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $requestbooks
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $requestbook = RequestBook::find($id);
        if($requestbook!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $requestbook

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $requestbook
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $data = $request->only('name','author','photo','book_category','isbn_no','edition_number','edition_date',
        'publisher','published_date','notes');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'author' => ['required', 'string'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'book_category' => ['required', 'string'],
            'isbn_no' => ['nullable', 'numeric', 'integer'],
            'edition_number' => ['required', 'numeric', 'integer'],
            'edition_date' => ['nullable', 'string'],
            'publisher' => ['nullable', 'string'],
            'published_date' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],



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


        $requestbook = RequestBook::create([
            'name' => $request->name,
            'author' => $request->author,
            'photo' => $photoPath,
            'book_category' => $request->book_category,
            'isbn_no' => $request->isbn_no,
            'edition_number' => $request->edition_number,
            'edition_date' => $request->edition_date,
            'publisher' => $request->publisher,
            'published_date' => $request->published_date,
            'notes' => $request->notes,

        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $requestbook
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $requestbook = RequestBook::find($id);

        $requestbook->name = $request->name;
        $requestbook->author = $request->author;
        $requestbook->book_category = $request->book_category;
        $requestbook->isbn_no = $request->isbn_no;
        $requestbook->edition_number = $request->edition_number;
        $requestbook->edition_date = $request->edition_date;
        $requestbook->publisher = $request->publisher;
        $requestbook->published_date = $request->published_date;
        $requestbook->notes = $request->notes;

        $requestbook->save();

        if($requestbook!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $requestbook
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $requestbook
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {

        RequestBook::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
