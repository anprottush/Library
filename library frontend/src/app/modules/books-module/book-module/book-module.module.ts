import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BookModuleRoutingModule } from "./book-module-routing.module";
import { BookCreateComponent } from "./book/book-create.component";
import { BookComponent } from "./book/book.component";



@NgModule({
  declarations: [
    BookComponent,
    BookCreateComponent,
  ],

  imports: [
    CommonModule,
    BookModuleRoutingModule,
  ],
})
export class BookModuleModule {}
