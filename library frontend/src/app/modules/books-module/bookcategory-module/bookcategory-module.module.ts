import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCategoryModuleRoutingModule } from './bookcategory-module-routing.module';
import { BookCategoryComponent } from './bookcategory/bookcategory.component';
import { BookCategoryCreateComponent } from './bookcategory/bookcategory-create.component';

@NgModule({
  declarations: [BookCategoryComponent, BookCategoryCreateComponent],
  imports: [CommonModule, BookCategoryModuleRoutingModule],
})
export class BookCategoryModuleModule {}
