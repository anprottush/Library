import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseCreateComponent } from './expense/expensecreate.component';

const routes: Routes = [
  { path: 'index', component: ExpenseComponent },
  { path: 'create', component: ExpenseCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseModuleRoutingModule {}
