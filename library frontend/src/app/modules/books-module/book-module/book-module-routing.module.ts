import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookCreateComponent } from "./book/book-create.component";
import { BookComponent } from "./book/book.component";



const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'add', component: BookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookModuleRoutingModule {}
