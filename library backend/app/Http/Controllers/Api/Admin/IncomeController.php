<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Income;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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

        $income = new Income();

        $income->name = $request->name;
        //$income->date = $request->date;
        $income->amount = $request->amount;
        //$income->file = $request->file;
        $income->note = $request->note;

        $income->save();

        if($income!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $income
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $income
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $income = Income::find($id);

        $income->name = $request->name;
        //$income->date = $request->date;
        $income->amount = $request->amount;
        //$income->file = $request->file;
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
