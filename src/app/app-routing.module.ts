import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "admin", component : AdminTemplateComponent, canActivate : [AuthGuard],

    children : [
      {path : "home", component : HomeComponent},
      {path : "profile", component : ProfileComponent},
      {path : "books", component : BooksComponent},
      {path : "new-book", component : NewBookComponent},
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
