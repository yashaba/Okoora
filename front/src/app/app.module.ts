import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
