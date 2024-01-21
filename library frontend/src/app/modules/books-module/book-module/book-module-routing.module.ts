import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book/bookcreate.component';

const routes: Routes = [
  { path: 'index', component: BookComponent },
  { path: 'create', component: BookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookModuleRoutingModule {}
