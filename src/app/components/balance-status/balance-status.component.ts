import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-balance-status',
  templateUrl: './balance-status.component.html',
  styleUrls: ['./balance-status.component.css']
})
export class BalanceStatusComponent implements OnInit, OnDestroy {

  accountStatus: {income: number, expense: number, balance: number} = {
    income: 0,
    expense: 0,
    balance: 0
  };

  subscription!: Subscription

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {

    this.getBalance();

    this.subscription = this.expensesService.balance$.subscribe(() => {
      this.getBalance();
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getBalance() {
    this.expensesService.getBalance()
      .subscribe(response => {
        this.accountStatus.income = response.income;
        this.accountStatus.expense = response.expense;
        this.accountStatus.balance = response.balance;
      })
  }

}
