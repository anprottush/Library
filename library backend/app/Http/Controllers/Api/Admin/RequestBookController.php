<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\RequestBook;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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
        $requestbook = new RequestBook();

        $requestbook->name = $request->name;
        $requestbook->author = $request->author;
        $requestbook->cover_photo = $request->cover_photo;
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
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $requestbook
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $requestbook
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $requestbook = RequestBook::find($id);

        $requestbook->name = $request->name;
        $requestbook->author = $request->author;
        $requestbook->cover_photo = $request->cover_photo;
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
