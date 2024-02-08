import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncomeModuleRoutingModule } from './income-module-routing.module';
import { IncomeComponent } from './income/income.component';
import { IncomeCreateComponent } from './income/income-create.component';

@NgModule({
  declarations: [
    IncomeComponent,
    IncomeCreateComponent
  ],
  imports: [
    CommonModule,
    IncomeModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IncomeModuleModule { }
