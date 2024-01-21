import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookcategoryModuleRoutingModule } from './bookcategory-module-routing.module';
import { BookcategoryComponent } from './bookcategory/bookcategory.component';
import { BookcategoryCreateComponent } from './bookcategory/bookcategorycreate.component';

@NgModule({
  declarations: [BookcategoryComponent, BookcategoryCreateComponent],
  imports: [CommonModule, BookcategoryModuleRoutingModule],
})
export class BookcategoryModuleModule {}
