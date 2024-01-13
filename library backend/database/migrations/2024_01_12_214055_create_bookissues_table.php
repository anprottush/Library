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
        Schema::create('bookissues', function (Blueprint $table) {
            $table->id();
            $table->string('member')->nullable();;
            $table->string('author')->nullable();;
            $table->string('book')->nullable();
            $table->bigInteger('book_no')->nullable();
            $table->string('issue_date')->nullable();
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
        Schema::dropIfExists('bookissues');
    }
};
