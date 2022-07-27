import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-single-expense',
  templateUrl: './single-expense.component.html',
  styleUrls: ['./single-expense.component.css']
})
export class SingleExpenseComponent implements OnInit {

  expense!: Expense;
  isLoading: boolean = true;

  constructor(private expensesService: ExpensesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadExpense();
  }

  loadExpense() {
    const id = this.route.snapshot.params['id'];
    this.expensesService.getUniqueExpense(id)
      .subscribe(expense => {
        this.expense = expense;
        this.isLoading = false;
      })
  }

}
