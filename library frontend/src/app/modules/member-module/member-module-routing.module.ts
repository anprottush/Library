import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberCreateComponent } from './member/member-create.component';

const routes: Routes = [
  { path: '', component: MemberComponent },
  { path: 'add', component: MemberCreateComponent },
  { path: 'edit/:id', component: MemberCreateComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberModuleRoutingModule { }
