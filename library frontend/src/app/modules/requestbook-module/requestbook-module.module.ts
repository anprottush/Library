import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestBookModuleRoutingModule } from './requestbook-module-routing.module';
import { RequestBookComponent } from './requestbook/requestbook.component';
import { RequestBookCreateComponent } from './requestbook/requestbook-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RequestBookComponent, RequestBookCreateComponent],
  imports: [CommonModule, RequestBookModuleRoutingModule,FormsModule,
    ReactiveFormsModule],
})
export class RequestBookModuleModule {}
