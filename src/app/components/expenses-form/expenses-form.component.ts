import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css'],
})
export class ExpensesFormComponent implements OnInit {

  @ViewChild('f', {static: true}) expenseForm!: NgForm;

  expense: Expense = {
    type: '',
    amount: 0,
    description: '',
    date: '',
    category_id: 0
  };

  categories!: [Category]

  isEditingForm: boolean = false;
  expenseId!: number;

  constructor(private expensesService: ExpensesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // Check if the active form is the edit expense form.
    this.route.url.subscribe(url => this.isEditingForm = url[0].path === 'edit' ? true : false);

    // If the form is the edit expense form, load the data of the expense and fill the form inputs. 

    if (this.isEditingForm === true) {

      this.expenseId = this.route.snapshot.params['id'];
      this.expensesService.getUniqueExpense(this.expenseId).subscribe(expense => {
        this.expense = expense;
        this.expenseForm.setValue({
          type: this.expense.type,
          detail: this.expense.description,
          amount: this.expense.amount,
          date: this.expense.date,
          category: this.expense.category_id
        })
      });
 
    }
  
  // Get categories list

  this.expensesService.getCategories().subscribe(response => {
    this.categories = response;
    console.log(this.categories)
  })
  
  }

  onSubmit() {

    console.log(this.expenseForm);

    this.expense.type = this.expenseForm.value.type;
    this.expense.description = this.expenseForm.value.detail;
    this.expense.amount = this.expenseForm.value.amount;
    this.expense.date = this.expenseForm.value.date;
    this.expense.category_id = this.expenseForm.value.category;

    if(this.isEditingForm) {
      this.expensesService.updateExpense(this.expenseId, this.expense).subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);

      });
    } else {
      this.expensesService.addExpense(this.expense).subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      });
    }

  }

}