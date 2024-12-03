import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatFormField, MatInput, MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './new-book/new-book.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard.ts.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminTemplateComponent,
    LoginComponent,
    ProfileComponent,
    BooksComponent,
    NewBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListItem,
    MatNavList,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatInput,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, AuthorizationGuard, provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
