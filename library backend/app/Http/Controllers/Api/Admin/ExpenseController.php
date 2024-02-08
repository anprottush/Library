<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class ExpenseController extends Controller
{
    public function getall()
    {
        $expenses = Expense::paginate(10);
        if($expenses!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $expenses
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $expenses
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $expense = Expense::find($id);
        if($expense!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $expense

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $expense
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {

        $data = $request->only('name','date','amount','file','note');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'date' => ['required', 'string'],
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

        $expense = Expense::create([
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
            'payload' => $expense
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $expense = Expense::find($id);

        $expense->name = $request->name;
        $expense->date = $request->date;
        $expense->amount = $request->amount;
        $expense->note = $request->note;

        $expense->save();

        if($expense!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $expense
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $expense
            ], Response::HTTP_BAD_REQUEST);
        }


    }

    public function delete($id)
    {

        Expense::destroy($id);

        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
