<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\BookIssue;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BookIssueController extends Controller
{
    public function getall()
    {
        $issues = BookIssue::all();
        if($issues!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $issues
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $issues
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $bookissue = BookIssue::find($id);
        if($bookissue!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $bookissue

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $bookissue
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $bookissue = new BookIssue();
        $bookissue->member = $request->name;
        $bookissue->book = $request->book;
        $bookissue->book_no = $request->book_no;
        $bookissue->issue_date = $request->issue_date;
        $bookissue->notes = $request->notes;

        $bookissue->save();

        if($bookissue!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $bookissue
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $bookissue
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $bookissue = BookIssue::find($id);

        $bookissue->member = $request->name;
        $bookissue->book = $request->book;
        $bookissue->book_no = $request->book_no;
        $bookissue->issue_date = $request->issue_date;
        $bookissue->notes = $request->notes;

        $bookissue->save();

        if($bookissue!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $bookissue
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $bookissue
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {
        //User::find($id)->delete();
        BookIssue::destroy($id);
        //return response()->json(null, 204);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
