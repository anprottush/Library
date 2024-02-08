import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCategoryComponent } from './bookcategory/bookcategory.component';
import { BookCategoryCreateComponent } from './bookcategory/bookcategory-create.component';

const routes: Routes = [
  { path: '', component: BookCategoryComponent },
  { path: 'add', component: BookCategoryCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCategoryModuleRoutingModule {}
