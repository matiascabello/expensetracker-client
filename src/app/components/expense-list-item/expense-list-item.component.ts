import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-list-item',
  templateUrl: './expense-list-item.component.html',
  styleUrls: ['./expense-list-item.component.css']
})
export class ExpenseListItemComponent implements OnInit {

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
  }

  @Input()
  expense!: Expense;

  @Output()
  deleteExpense: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
   this.deleteExpense.emit(this.expense.id);
  }

}
