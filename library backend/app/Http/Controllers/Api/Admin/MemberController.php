<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use PharIo\Manifest\Url;

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
        $data = $request->only('name','date_of_birth','gender','religion','email','phone',
        'blood_group','address','joinning_of_date','photo','role','status','username','password');

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'date_of_birth' => ['required', 'string'],
            'gender' => ['required', 'string'],
            'religion' => ['required', 'string'],
            'email' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'blood_group' => ['required', 'string'],
            'address' => ['nullable', 'string'],
            'joinning_of_date' => ['nullable', 'string'],
            'photo' => ['required', 'image', 'mimes:pdf,doc,docx,xls,xlsx,pptx,jpg,jpeg,png,gif,svg', 'max:102400'],
            'role' => ['nullable', 'string'],
            'status' => ['nullable', 'string'],
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],


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


        $member = Member::create([
            'name' => $request->name,
            'date_of_birth' => $request->date_of_birth,
            'gender' => $request->gender,
            'religion' => $request->religion,
            'email' => $request->email,
            'phone' => $request->phone,
            'blood_group' => $request->blood_group,
            'address' => $request->address,
            'joinning_of_date' => $request->joinning_of_date,
            'photo' => $photoPath,
            'role' => $request->role,
            'status' => $request->status,
            'username' => $request->username,
            'password' => $request->password,

        ]);

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Data created successfully',
            'payload' => $member,
        ], 201);

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

        Member::destroy($id);
        return response()->json([
            'success'=> true,
            'message'=> 'Data deleted successfully'
        ],  Response::HTTP_OK);
    }
}
