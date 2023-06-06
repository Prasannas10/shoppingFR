import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  { path:'cart', component:CartComponent, canActivate:[JwtAuthGuard]  },
  { path:'login', component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
