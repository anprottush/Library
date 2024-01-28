import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookIssueComponent } from './bookissue/bookissue.component';
import { BookIssueCreateComponent } from './bookissue/bookissue-create.component';

const routes: Routes = [
  { path: 'index', component: BookIssueComponent },
  { path: 'create', component: BookIssueCreateComponent },
  { path: 'edit/:id', component: BookIssueCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookIssueModuleRoutingModule { }
