import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ExpensesFormComponent } from './components/expenses-form/expenses-form.component';
import { BalanceStatusComponent } from './components/balance-status/balance-status.component';
import { ExpenseListItemComponent } from './components/expense-list-item/expense-list-item.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpensesService } from './services/expenses.service';
import { RemoveComma } from './pipes/removecomma.pipe';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { SingleExpenseComponent } from './components/single-expense/single-expense.component';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExpensesFormComponent,
    BalanceStatusComponent,
    ExpenseListItemComponent,
    ExpenseListComponent,
    RemoveComma,
    ConfirmationModalComponent,
    SingleExpenseComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
