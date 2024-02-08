import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailModuleRoutingModule } from './email-module-routing.module';
import { EmailComponent } from './email/email.component';
import { EmailCreateComponent } from './email/email-create.component';

@NgModule({
  declarations: [EmailComponent, EmailCreateComponent],
  imports: [CommonModule, EmailModuleRoutingModule],
})
export class EmailModuleModule {}
