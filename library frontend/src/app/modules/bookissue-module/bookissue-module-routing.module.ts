import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookIssueComponent } from './bookissue/bookissue.component';
import { BookIssueCreateComponent } from './bookissue/bookissue-create.component';

const routes: Routes = [
  { path: '', component: BookIssueComponent },
  { path: 'add', component: BookIssueCreateComponent },
  { path: 'edit/:id', component: BookIssueCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookIssueModuleRoutingModule { }
