import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { adminGuard } from './admin.guard';
import { userGuard } from './user.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent,canActivate: [adminGuard] },
  { path: "product", component: ProductComponent,canActivate: [userGuard]},
  { path: "forbidden", component: ForbiddenComponent },
  { path: "logout", component: LogoutComponent },
  { path: "", redirectTo:"login",pathMatch:"full"},
  {path: '**', redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
