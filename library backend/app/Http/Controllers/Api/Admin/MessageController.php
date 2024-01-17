<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DBEntity\Admin\Message;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        return response()->json([
            'success'=> true,
            'status code'=> Response::HTTP_CREATED,
            'message'=> 'Message sent successfully',
            'payload' => 'sex'
        ]);
        // $chat = new Message();


        // $chat->name = $request->name;
        // $chat->message = $request->message;

        // //Mail::to($mail->email_address)->send(new SendMail($mail));

        // //$chat->save();

        // if($chat!=null) {
        //     return response()->json([
        //         'success'=> true,
        //         'status code'=> Response::HTTP_CREATED,
        //         'message'=> 'Message sent successfully',
        //         'payload' => $chat
        //     ]);
        // }
        // else {
        //     return response()->json([
        //         'success'=> false,
        //         'message'=> 'Message sent failed',
        //         'payload' => $chat
        //     ], Response::HTTP_NO_CONTENT);
        // }

    }
}
