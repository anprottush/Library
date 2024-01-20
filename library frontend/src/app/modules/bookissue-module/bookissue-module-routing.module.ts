import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookIssueComponent } from './bookissue/bookissue.component';
import { BookIssueCreateComponent } from './bookissue/bookissuecreate.component';

const routes: Routes = [
  { path: 'index', component: BookIssueComponent },
  { path: 'create', component: BookIssueCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookIssueModuleRoutingModule { }
