<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\EBook;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EBookController extends Controller
{
    public function getall()
    {
        $ebooks = EBook::paginate(10);
        if($ebooks!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $ebooks
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $ebooks
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $ebook = EBook::find($id);
        if($ebook!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $ebook

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $ebook
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $ebook = new EBook();
        $ebook->name = $request->name;
        $ebook->author = $request->author;
        //$ebook->cover_photo = $request->cover_photo;
        //$ebook->file = $request->file;
        $ebook->notes = $request->notes;

        $ebook->save();

        if($ebook!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $ebook
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $ebook
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $ebook = EBook::find($id);

        $ebook->name = $request->name;
        $ebook->author = $request->author;
        //$ebook->cover_photo = $request->cover_photo;
        //$ebook->file = $request->file;
        $ebook->notes = $request->notes;

        $ebook->save();

        if($ebook!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $ebook
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $ebook
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {
        //User::find($id)->delete();
        EBook::destroy($id);
        //return response()->json(null, 204);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
