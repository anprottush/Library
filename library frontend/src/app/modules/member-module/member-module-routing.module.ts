import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberCreateComponent } from './member/membercreate.component';

const routes: Routes = [
  { path: 'index', component: MemberComponent },
  { path: 'create', component: MemberCreateComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberModuleRoutingModule { }
