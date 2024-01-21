import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookModuleRoutingModule } from './book-module-routing.module';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book/bookcreate.component';

@NgModule({
  declarations: [BookComponent, BookCreateComponent],
  imports: [CommonModule, BookModuleRoutingModule],
})
export class BookModuleModule {}
