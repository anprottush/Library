import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookIssueModuleRoutingModule } from './bookissue-module-routing.module';
import { BookIssueComponent } from './bookissue/bookissue.component';
import { BookIssueCreateComponent } from './bookissue/bookissue-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookIssueComponent,
    BookIssueCreateComponent

  ],
  imports: [
    CommonModule,
    BookIssueModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BookIssueModuleModule { }
