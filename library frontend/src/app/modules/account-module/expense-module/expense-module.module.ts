import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseModuleRoutingModule } from './expense-module-routing.module';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseCreateComponent } from './expense/expensecreate.component';

@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseCreateComponent

  ],
  imports: [
    CommonModule,
    ExpenseModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExpenseModuleModule { }
