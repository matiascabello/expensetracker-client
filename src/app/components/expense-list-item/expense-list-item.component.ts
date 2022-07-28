import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from 'src/app/directives/placeholder.directive';

import { Expense } from 'src/app/interfaces/expense.interface';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-expense-list-item',
  templateUrl: './expense-list-item.component.html',
  styleUrls: ['./expense-list-item.component.css']
})
export class ExpenseListItemComponent implements OnInit {

  closeSubs!: Subscription;
  deleteSubs!: Subscription;

  @ViewChild(PlaceholderDirective, {static: false}) alertHost!: PlaceholderDirective;

  constructor() {}

  ngOnInit(): void {
  }

  @Input()
  expense!: Expense;

  @Output()
  deleteExpense: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
   this.deleteExpense.emit(this.expense.id);
  }

  showAlert() {

    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);

    componentRef.instance.message = 'Are you sure that you want to delete this item?';
    this.closeSubs = componentRef.instance.close.subscribe(() => {
      this.closeSubs.unsubscribe();
      hostViewContainerRef.clear();
    })

    this.deleteSubs = componentRef.instance.delete.subscribe(()=> {
      this.deleteSubs.unsubscribe();
      this.onDelete();
      hostViewContainerRef.clear()
    })

  }

}
