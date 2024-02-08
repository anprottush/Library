<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use App\Models\DBEntity\Admin\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class MailController extends Controller
{
    public function store(Request $request)
    {

        $data = $request->only('subject','date','amount','file','note');

        $validator = Validator::make($data, [
            'subject' => ['required', 'string', 'max:100'],
            'name' => ['required', 'string', 'max:100'],
            'email_address' => ['required', 'string'],
            'message' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'status code'=> Response::HTTP_BAD_REQUEST,
                'message'=> 'E-mail sent failed because some error occured. please try to solve the error',
                'error' => $validator->errors(),
            ], 400);
        }

        $mail = Email::create([
            'subject' => $request->subject,
            'name' => $request->name,
            'email_address' => $request->email_address,
            'message' => $request->message,
        ]);

        Mail::to($mail->email_address)->send(new SendMail($mail));

        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'E-mail sent successfully',
            'payload' => $mail
        ], 201);

    }



}
