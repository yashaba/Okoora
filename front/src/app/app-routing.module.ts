import {  Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

import { AuthGuard } from './services/auth/auth.service';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';


export const appRoutes: Routes = [

  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'todo',
    component: TodosPageComponent,
    canActivate: [AuthGuard]
  },

]

