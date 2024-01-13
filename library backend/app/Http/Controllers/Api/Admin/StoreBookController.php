<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\StoreBook;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StoreBookController extends Controller
{
    public function getall()
    {
        $storebooks = StoreBook::paginate(10);
        if($storebooks!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $storebooks
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $storebooks
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $storebook = StoreBook::find($id);
        if($storebook!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $storebook

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $storebook
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {

        $storebook = new StoreBook();

        $storebook->name = $request->name;
        $storebook->author = $request->author;
        $storebook->quantity = $request->quanty;
        $storebook->price = $request->price;
        $storebook->code_no = $request->code_no;
        //$storebook->cover_photo = $request->cover_photo;
        $storebook->category = $request->category;
        $storebook->isbn_no = $request->isbn_no;
        $storebook->edition_number = $request->edition_number;
        $storebook->edition_date = $request->edition_date;
        $storebook->publisher = $request->publisher;
        $storebook->published_date = $request->published_date;
        $storebook->notes = $request->notes;
        $storebook->description = $request->description;
        //$storebook->images = $request->images;

        $storebook->save();

        if($storebook!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $storebook
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $storebook
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $storebook = StoreBook::find($id);

        $storebook->name = $request->name;
        $storebook->author = $request->author;
        $storebook->quantity = $request->quanty;
        $storebook->price = $request->price;
        $storebook->code_no = $request->code_no;
        //$storebook->cover_photo = $request->cover_photo;
        $storebook->category = $request->category;
        $storebook->isbn_no = $request->isbn_no;
        $storebook->edition_number = $request->edition_number;
        $storebook->edition_date = $request->edition_date;
        $storebook->publisher = $request->publisher;
        $storebook->published_date = $request->published_date;
        $storebook->notes = $request->notes;
        $storebook->description = $request->description;
        //$storebook->images = $request->images;

        $storebook->save();

        if($storebook!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $storebook
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $storebook
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {

        StoreBook::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
