import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberModuleRoutingModule } from './member-module-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberCreateComponent } from './member/membercreate.component';


@NgModule({
  declarations: [
    MemberComponent,
    MemberCreateComponent,
  ],
  imports: [
    CommonModule,
    MemberModuleRoutingModule
  ]
})
export class MemberModuleModule { }
