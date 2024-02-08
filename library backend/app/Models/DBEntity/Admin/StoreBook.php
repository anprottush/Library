<?php

namespace App\Models\DBEntity\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StoreBook extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'author',
        'quantity',
        'price',
        'code_no',
        'photo',
        'category',
        'isbn_no',
        'edition_number',
        'edition_date',
        'publisher',
        'published_date',
        'notes',
        'description',
        'images',
    ];


}
