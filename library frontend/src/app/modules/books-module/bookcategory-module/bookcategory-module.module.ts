import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCategoryModuleRoutingModule } from './bookcategory-module-routing.module';
import { BookCategoryComponent } from './bookcategory/bookcategory.component';
import { BookCategoryCreateComponent } from './bookcategory/bookcategory-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookCategoryComponent, BookCategoryCreateComponent],
  imports: [CommonModule, BookCategoryModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule],
})
export class BookCategoryModuleModule {}
