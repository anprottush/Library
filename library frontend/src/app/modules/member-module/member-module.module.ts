import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberModuleRoutingModule } from './member-module-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberCreateComponent } from './member/member-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MemberComponent,
    MemberCreateComponent,
  ],
  imports: [
    CommonModule,
    MemberModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MemberModuleModule { }
