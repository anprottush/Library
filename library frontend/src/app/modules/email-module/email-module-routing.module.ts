import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { EmailCreateComponent } from './email/email-create.component';

const routes: Routes = [
  { path: '', component: EmailComponent },
  { path: 'add', component: EmailCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailModuleRoutingModule {}
