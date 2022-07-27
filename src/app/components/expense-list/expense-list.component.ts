import { Component, OnInit } from '@angular/core';

import { Expense } from 'src/app/interfaces/expense.interface';
import { Thing } from 'src/app/interfaces/thing.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = [];
  isLoading: boolean = false;

  thingTest: Thing = {
    id: 234,
    name: 'Cool thing!',
    user: {
      id: 45,
      name: 'John Doe',
      books: ['Book 1', 'Book 2', 'Book 3']
    }
  }; ;

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
