import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCategoryComponent } from './bookcategory/bookcategory.component';
import { BookCategoryCreateComponent } from './bookcategory/bookcategorycreate.component';

const routes: Routes = [
  { path: 'index', component: BookCategoryComponent },
  { path: 'create', component: BookCategoryCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCategoryModuleRoutingModule {}
