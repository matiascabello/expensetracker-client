import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Category } from '../interfaces/category.interface';
import { Expense } from '../interfaces/expense.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  balance$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getExpenses() {
    console.log('getExpenses called.');
    return this.http.get<Expense[]>('https://expensetrackerjs-api.herokuapp.com/expenses')
  }

  getUniqueExpense(id: number) {
    return this.http.get<Expense>(`https://expensetrackerjs-api.herokuapp.com/expenses/${id}`);
  }

  addExpense(expense: Expense) {
    return this.http.post('https://expensetrackerjs-api.herokuapp.com/expenses', expense);
  }

  updateExpense(id:number, expense: Expense) {
    return this.http.put(`https://expensetrackerjs-api.herokuapp.com/expenses/${id}`, expense);
  };

  deleteExpense(id: number) {
    return this.http.delete(`https://expensetrackerjs-api.herokuapp.com/expenses/${id}`)
      .pipe(
        tap(() => {
          this.balance$.next();
        })
      )
  }

  getBalance() {
    return this.http.get<{income: number, expense: number, balance: number}>('https://expensetrackerjs-api.herokuapp.com/balance')
  };

  getCategories() {
    return this.http.get<[Category]>('https://expensetrackerjs-api.herokuapp.com/categories')
  }

  getCategory(id: number) {
    return this.http.get<Category>(`https://expensetrackerjs-api.herokuapp.com/categories/${id}`)
  }

}
