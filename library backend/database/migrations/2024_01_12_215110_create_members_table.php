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
        Schema::create('members', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->string('religion')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('blood_group')->nullable();
            $table->string('address')->nullable();
            $table->string('joinning_of_date')->nullable();
            $table->string('photo')->nullable();
            $table->string('role')->nullable();
            $table->string('status')->nullable();
            $table->string('username');
            $table->string('password');
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
