import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseCreateComponent } from './expense/expense-create.component';

const routes: Routes = [
  { path: '', component: ExpenseComponent },
  { path: 'add', component: ExpenseCreateComponent },
  { path: 'edit/:id', component: ExpenseCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseModuleRoutingModule {}
