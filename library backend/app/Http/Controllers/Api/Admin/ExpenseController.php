<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Expense;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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

        $expense = new Expense();

        $expense->name = $request->name;
        //$expense->date = $request->date;
        $expense->amount = $request->amount;
        //$expense->file = $request->file;
        $expense->note = $request->note;

        $expense->save();

        if($expense!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $expense
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $expense
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $expense = Expense::find($id);

        $expense->name = $request->name;
        //$expense->date = $request->date;
        $expense->amount = $request->amount;
        //$expense->file = $request->file;
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
