import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestbookModuleRoutingModule } from './requestbook-module-routing.module';
import { RequestbookComponent } from './requestbook/requestbook.component';
import { RequestbookCreateComponent } from './requestbook/requestbookcreate.component';

@NgModule({
  declarations: [RequestbookComponent, RequestbookCreateComponent],
  imports: [CommonModule, RequestbookModuleRoutingModule],
})
export class RequestBookModuleModule {}
