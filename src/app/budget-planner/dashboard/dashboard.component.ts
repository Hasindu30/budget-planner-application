import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //income
  lastMonthsIncome =['January:$1000','February:$1500','March:$1200'];
  currentMonthIncome = '$2000';

  //expense
lastMonthsExpense = ['January:$800','February:$1000','March:$1200'];
currentMonthExpense = '$1500';

  //Todo
  todoTransactions =[
    {description: 'pay electricity bill'},
    {description: 'submit monthly report'},
    {description: 'buy groceries'},
    {description: 'call insurance company'},
  ];
  totalCurrentMonthIncome =2000;
  totalCurrentMonthExpense =2000;
  constructor(public router:Router){}

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }

  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
  onTodo() {
    this.router.navigate(['/budget-planner/todo']);
  }
  get CurrentMonthSavings(): number{
      return this.totalCurrentMonthIncome = this.totalCurrentMonthExpense;
  }

}
