import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './tournament/hello/hello.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';

const routes: Routes = [
  { path: 'Welcome', component: HelloComponent},
  { path: 'Registration', component: RegistrationComponent},
  { path: 'Brackets', component: BracketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
