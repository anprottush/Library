<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use App\Models\DBEntity\Admin\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class MailController extends Controller
{
    public function store(Request $request)
    {
        $mail = new Email();

        $mail->subject = $request->subject;
        $mail->name = $request->name;
        $mail->email_address = $request->email_address;
        $mail->message = $request->message;

        Mail::to($mail->email_address)->send(new SendMail($mail));

        $mail->save();

        if($mail!=null) {
            return response()->json([
                'success'=> true,
                'status code'=> Response::HTTP_CREATED,
                'message'=> 'E-mail sent successfully',
                'payload' => $mail
            ]);
        }
        else {
            return response()->json([
                'success'=> false,
                'message'=> 'E-mail sent failed',
                'payload' => $mail
            ], Response::HTTP_NO_CONTENT);
        }

    }
}
