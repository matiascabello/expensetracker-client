import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesFormComponent } from './components/expenses-form/expenses-form.component';
import { MainComponent } from './components/main/main.component';
import { SingleExpenseComponent } from './components/single-expense/single-expense.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'add', component: ExpensesFormComponent
  },
  {
    path: 'edit/:id', component: ExpensesFormComponent
  },
  {
    path: 'expense/:id', component: SingleExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
