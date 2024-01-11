<?php

namespace App\Models\DBEntity\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookIssue extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'member',
        'book',
        'book_no',
        'issue_date',
        'notes',
    ];
}
