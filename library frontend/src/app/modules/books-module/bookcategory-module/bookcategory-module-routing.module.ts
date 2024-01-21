import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookcategoryComponent } from './bookcategory/bookcategory.component';
import { BookcategoryCreateComponent } from './bookcategory/bookcategorycreate.component';

const routes: Routes = [
  { path: 'index', component: BookcategoryComponent },
  { path: 'create', component: BookcategoryCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookcategoryModuleRoutingModule {}
