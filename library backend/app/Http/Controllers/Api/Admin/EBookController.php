<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\EBook;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

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
        $data = $request->only('name','author','photo','file','notes');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'author' => ['required', 'string', 'max:100'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'file' => ['required', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:1048576'],
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


        $file = $request->file('file');
        $fileName = Str::random(32) . '.' . $file->getClientOriginalExtension();
        $file->storeAs('files', $fileName, 'public');
        $file->move(public_path('file'), $fileName);
        $filePath = storage_path('app/public/files/' . $fileName);


        $ebook = Ebook::create([
            'name' => $request->name,
            'author' => $request->author,
            'photo' => $photoPath,
            'file' => $fileName,
            'notes' => $request->notes,
        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Ebook added successfully',
            'payload' => $ebook
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $ebook = EBook::find($id);

        $ebook->name = $request->name;
        $ebook->author = $request->author;
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

        EBook::destroy($id);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
