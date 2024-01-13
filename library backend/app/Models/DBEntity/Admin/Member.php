<?php

namespace App\Models\DBEntity\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Member extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'date_of_birth',
        'gender',
        'religion',
        'email',
        'phone',
        'blood_group',
        'address',
        'joinning_of_date',
        'photo',
        'role',
        'status',
        'username',
        'password',
    ];

}
