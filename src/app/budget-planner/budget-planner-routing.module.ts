import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login when the app starts
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'side-nav', component: SideNavComponent }, 
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'income', component: IncomeComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'todo', component: TodoComponent }, 
  { path: 'history', component: HistoryComponent }, 
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // Wildcard route to handle undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot since it's the main routing module
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
