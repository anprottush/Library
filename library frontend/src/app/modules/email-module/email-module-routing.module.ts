import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { EmailCreateComponent } from './email/emailcreate.component';

const routes: Routes = [
  { path: 'index', component: EmailComponent },
  { path: 'create', component: EmailCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailModuleRoutingModule {}
