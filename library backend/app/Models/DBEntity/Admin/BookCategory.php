<?php

namespace App\Models\DBEntity\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'cover_photo',
        'status',
    ];


}
