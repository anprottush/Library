<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Income;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class IncomeController extends Controller
{
    public function getall()
    {
        $incomes = Income::paginate(10);
        if($incomes!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $incomes
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $incomes
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $income = Income::find($id);
        if($income!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $income

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $income
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {

        $data = $request->only('name','date','amount','file','note');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'date' => ['required', 'string', 'max:100'],
            'amount' => ['required', 'numeric'],
            'file' => ['required', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:1048576'],
            'note' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_BAD_REQUEST,
                'message'=> 'Data creation failed because some error occured. please try to solve the error',
                'error' => $validator->errors(),
            ], 400);
        }

        $file = $request->file('file');
        $fileName = Str::random(32) . '.' . $file->getClientOriginalExtension();
        $file->storeAs('files', $fileName, 'public');
        $file->move(public_path('file'), $fileName);
        $filePath = url('/file/' . $fileName);

        $income = Income::create([
            'name' => $request->name,
            'date' => $request->date,
            'amount' => $request->amount,
            'file' => $filePath,
            'note' => $request->note,
        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $income
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $income = Income::find($id);

        $income->name = $request->name;
        $income->date = $request->date;
        $income->amount = $request->amount;
        $income->note = $request->note;

        $income->save();


        if($income!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $income
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $income
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {

        Income::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
