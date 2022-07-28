import { Component, OnInit } from '@angular/core';

import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = [];
  isLoading: boolean = false;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {

    this.loadExpenses();

  }

  loadExpenses() {

    this.isLoading = true;
    this.expensesService.getExpenses()
      .subscribe(expenses => {
        this.expenses = expenses;
        this.isLoading = false;
    });

  }

  deleteExpense(id: number) {
    this.expensesService.deleteExpense(id)
      .subscribe(() => {
        // Update list of expenses
        this.expensesService.getExpenses()
          .subscribe(expenses => {
            this.expenses = expenses;
          })
      })
  }

}
