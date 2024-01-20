import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookIssueModuleRoutingModule } from './bookissue-module-routing.module';
import { BookIssueComponent } from './bookissue/bookissue.component';
import { BookIssueCreateComponent } from './bookissue/bookissuecreate.component';


@NgModule({
  declarations: [
    BookIssueComponent,
    BookIssueCreateComponent

  ],
  imports: [
    CommonModule,
    BookIssueModuleRoutingModule
  ]
})
export class BookIssueModuleModule { }
