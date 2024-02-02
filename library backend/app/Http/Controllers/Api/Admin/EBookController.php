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
            'photo' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:10240'],
            'file' => ['required', 'mimes:pdf', 'max:102400'],
            'notes' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_BAD_REQUEST,
                'error' => $validator->errors(),
                'payload' => null
            ], 400);
        }

        $photo = $request->file('photo');
        $photoName = Str::random(32) . '.' . $photo->getClientOriginalExtension();
        $photo->storeAs('photos', $photoName, 'public');
        $photo->move(public_path('img'), $photoName);
        $photoPath = storage_path('app/public/photos/' . $photoName);


        $file = $request->file('file');
        $fileName = Str::random(32) . '.' . $file->getClientOriginalExtension();
        $file->storeAs('files', $fileName, 'public');
        $file->move(public_path('files'), $fileName);
        $filePath = storage_path('app/public/files/' . $fileName);


        $ebook = Ebook::create([
            'name' => $request->name,
            'author' => $request->author,
            'cover_photo' => $photoPath,
            'file' => $fileName,
            'note' => $request->notes,
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
