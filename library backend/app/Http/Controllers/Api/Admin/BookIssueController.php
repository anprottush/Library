<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\BookIssue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class BookIssueController extends Controller
{
    public function getall()
    {
        $issues = BookIssue::paginate(10);
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
        $data = $request->only('member','book','book_no','issue_date','notes');

        $validator = Validator::make($data, [
            'member' => ['required', 'string'],
            'book' => ['required', 'string'],
            'book_no' => ['required', 'numeric', 'integer'],
            'issue_date' => ['required', 'string'],
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

        $bookissue = BookIssue::create([
            'member' => $request->member,
            'book' => $request->book,
            'book_no' => $request->book_no,
            'issue_date' => $request->issue_date,
            'notes' => $request->notes,

        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $bookissue
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $bookissue = BookIssue::find($id);

       // $bookissue->update($request->all());

        $bookissue->member = $request->member;
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
