import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestBookModuleRoutingModule } from './requestbook-module-routing.module';
import { RequestBookComponent } from './requestbook/requestbook.component';
import { RequestBookCreateComponent } from './requestbook/requestbookcreate.component';


@NgModule({
  declarations: [RequestBookComponent, RequestBookCreateComponent],
  imports: [CommonModule, RequestBookModuleRoutingModule],
})
export class RequestBookModuleModule {}
