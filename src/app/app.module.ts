import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RosterService } from './services/roster.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './tournament/hello/hello.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RegistrationComponent,
    BracketsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RosterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
