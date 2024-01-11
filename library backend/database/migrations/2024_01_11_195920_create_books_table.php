<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('author');
            $table->double('quantity');
            $table->double('price');
            $table->bigInteger('code_no');
            $table->string('cover_photo')->nullable();
            $table->string('book_category')->nullable();
            $table->bigInteger('isbn_no')->nullable();
            $table->string('rack')->nullable();
            $table->bigInteger('edition_number');
            $table->string('edition_date')->nullable();
            $table->string('publisher');
            $table->string('published_date')->nullable();
            $table->string('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
