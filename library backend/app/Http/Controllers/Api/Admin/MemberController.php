<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Member;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MemberController extends Controller
{
    public function getall()
    {

        $members = Member::paginate(10);
        if($members!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $members
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $members
            ], Response::HTTP_NOT_FOUND);
        }


    }


    public function getbyid($id)
    {
        $member = Member::find($id);
        if($member!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data retrieve successfully',
                'payload' => $member

            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data not found',
                'payload' => $member
            ], Response::HTTP_NOT_FOUND);
        }

    }

    public function store(Request $request)
    {
        $member = new Member();

        $member->name = $request->name;
        $member->date_of_birth = $request->date_of_birth;
        $member->gender = $request->gender;
        $member->religion = $request->religion;
        $member->email = $request->email;
        $member->phone = $request->phone;
        $member->blood_group = $request->blood_group;
        $member->address = $request->address;
        $member->joinning_of_date = $request->joinning_of_date;
        $member->photo = $request->photo;
        $member->role = $request->role;
        $member->status = $request->status;
        $member->username = $request->username;
        $member->password = $request->password;

        $member->save();

        if($member!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'Data created successfully',
                'payload' => $member
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data creation failed',
                'payload' => $member
            ], Response::HTTP_NO_CONTENT);
        }

    }

    public function update(Request $request, $id)
    {
        $member = Member::find($id);

        $member->name = $request->name;
        $member->date_of_birth = $request->date_of_birth;
        $member->gender = $request->gender;
        $member->religion = $request->religion;
        $member->email = $request->email;
        $member->phone = $request->phone;
        $member->blood_group = $request->blood_group;
        $member->address = $request->address;
        $member->joinning_of_date = $request->joinning_of_date;
        $member->photo = $request->photo;
        $member->role = $request->role;
        $member->status = $request->status;
        $member->username = $request->username;
        $member->password = $request->password;

        $member->save();

        if($member!=null) {
            return response()->json([
                'success'=> true,
                'message'=> 'Data updated successfully',
                'payload' => $member
            ], Response::HTTP_OK);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'Data update failed',
                'payload' => $member
            ], Response::HTTP_BAD_REQUEST);
        }

    }

    public function delete($id)
    {
        //User::find($id)->delete();
        Member::destroy($id);
        //return response()->json(null, 204);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
