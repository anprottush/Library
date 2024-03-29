<?php

namespace App\Models\DBEntity\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'author',
        'quantity',
        'price',
        'code_no',
        'photo',
        'book_category',
        'isbn_no',
        'rack',
        'edition_number',
        'edition_date',
        'publisher',
        'published_date',
        'notes',
    ];




}
