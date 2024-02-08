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
        Schema::create('store_books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('author');
            $table->double('quantity');
            $table->double('price');
            $table->bigInteger('code_no');
            $table->string('photo')->nullable();
            $table->string('category')->nullable();
            $table->bigInteger('isbn_no')->nullable();
            $table->bigInteger('edition_number');
            $table->string('edition_date')->nullable();
            $table->string('publisher');
            $table->string('published_date')->nullable();
            $table->string('notes')->nullable();
            $table->string('description')->nullable();
            $table->string('images')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('store_books');
    }
};
