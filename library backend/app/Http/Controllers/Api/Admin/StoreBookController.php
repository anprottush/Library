<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\StoreBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

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

        $data = $request->only('name','author','quantity','price','code_no','photo',
        'category','isbn_no','edition_number','edition_date','publisher','published_date','notes','description','images');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'author' => ['required', 'string', 'max:100'],
            'quantity' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
            'code_no' => ['required', 'numeric', 'integer'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'category' => ['required', 'string'],
            'isbn_no' => ['nullable', 'numeric', 'integer'],
            'edition_number' => ['required', 'numeric', 'integer'],
            'edition_date' => ['nullable', 'string'],
            'publisher' => ['nullable', 'string'],
            'published_date' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'images' => ['nullable', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],


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


        $storebook = StoreBook::create([
            'name' => $request->name,
            'author' => $request->author,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'code_no' => $request->code_no,
            'photo' => $photoPath,
            'category' => $request->category,
            'isbn_no' => $request->isbn_no,
            'edition_number' => $request->edition_number,
            'edition_date' => $request->edition_date,
            'publisher' => $request->publisher,
            'published_date' => $request->published_date,
            'notes' => $request->notes,
            'description' => $request->description,
            'images' => $request->images,


        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $storebook
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $storebook = StoreBook::find($id);

        $storebook->name = $request->name;
        $storebook->author = $request->author;
        $storebook->quantity = $request->quanty;
        $storebook->price = $request->price;
        $storebook->code_no = $request->code_no;
        $storebook->category = $request->category;
        $storebook->isbn_no = $request->isbn_no;
        $storebook->edition_number = $request->edition_number;
        $storebook->edition_date = $request->edition_date;
        $storebook->publisher = $request->publisher;
        $storebook->published_date = $request->published_date;
        $storebook->notes = $request->notes;
        $storebook->description = $request->description;

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
