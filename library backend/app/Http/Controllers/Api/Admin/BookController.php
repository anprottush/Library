<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\DBEntity\Admin\Book;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

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
        $book = Book::find($id);
        if($book!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $book

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $book
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $data = $request->only('name','author','quantity','price','code_no','photo',
        'book_category','isbn_no','rack','edition_number','edition_date','publisher','published_date','notes');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'author' => ['required', 'string', 'max:100'],
            'quantity' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
            'code_no' => ['required', 'numeric', 'integer'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'book_category' => ['required', 'string'],
            'isbn_no' => ['nullable', 'numeric', 'integer'],
            'rack' => ['nullable', 'string'],
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


        $book = Book::create([
            'name' => $request->name,
            'author' => $request->author,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'code_no' => $request->code_no,
            'photo' => $photoPath,
            'book_category' => $request->book_category,
            'isbn_no' => $request->isbn_no,
            'rack' => $request->rack,
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
            'payload' => $book
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $data = $request->only('name','author','quantity','price','code_no',
        'book_category','isbn_no','rack','edition_number','edition_date','publisher','published_date','notes');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'author' => ['required', 'string', 'max:100'],
            'quantity' => ['required', 'numeric', 'integer'],
            'price' => ['required', 'numeric', 'integer'],
            'code_no' => ['required', 'numeric', 'integer'],
            'book_category' => ['required', 'string'],
            'isbn_no' => ['nullable', 'numeric', 'integer'],
            'rack' => ['nullable', 'string'],
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


        $book = Book::find($id);

        $book->name = $request->name;
        $book->author = $request->author;
        $book->quantity = $request->quantity;
        $book->price = $request->price;
        $book->code_no = $request->code_no;
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

    }

    public function delete($id)
    {
        Book::destroy($id);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
