<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\DBEntity\Admin\Book;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class BookController extends Controller
{
    public function getall()
    {

        $books = Book::paginate(10);
        if($books!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $books
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $books
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $user = Book::find($id);
        if($user!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $user

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $user
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $book = new Book();
        $book->name = $request->name;
        $book->author = $request->author;
        $book->quantity = $request->quantity;
        $book->price = $request->price;
        $book->code_no = $request->code_no;
        //$cover_photo',
        $book->book_category = $request->book_category;
        $book->isbn_no = $request->isbn_no;
        $book->rack = $request->rack;
        $book->edition_number = $request->edition_number;
        $book->edition_date = $request->edition_date;
        $book->publisher = $request->publisher;
        $book->published_date = $request->published_date;
        $book->notes = $request->notes;

        $book->save();

        if($book!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $book
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $book
            ], Response::HTTP_NO_CONTENT);
        }

        //$user = User::create($request->all());

    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        $book->name = $request->name;
        $book->author = $request->author;
        $book->quantity = $request->quantity;
        $book->price = $request->price;
        $book->code_no = $request->code_no;
        //$cover_photo',
        $book->book_category = $request->book_category;
        $book->isbn_no = $request->isbn_no;
        $book->rack = $request->rack;
        $book->edition_number = $request->edition_number;
        $book->edition_date = $request->edition_date;
        $book->publisher = $request->publisher;
        $book->published_date = $request->published_date;
        $book->notes = $request->notes;

        $book->save();

        if($book!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $book
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $book
            ], Response::HTTP_BAD_REQUEST);
        }

        //$user->update($request->all());
    }

    public function delete($id)
    {
        //User::find($id)->delete();
        Book::destroy($id);
        //return response()->json(null, 204);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
