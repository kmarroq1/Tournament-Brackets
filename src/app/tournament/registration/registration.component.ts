import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players : string[];
  public informationMessage : string;
  constructor(private rosterService : RosterService) {
    this.players = ['', '', '', '', '', '', '', ''];
    this.informationMessage = '';
   }

   registerContestants() {
     if(this.players.length === 0 || this.players.length%2 !== 0) {
      throw new Error('Invalid roster')
     }

    try {
      
    } catch(exception) {
      console.error(exception);
    }
   }

  ngOnInit(): void {
  }

}
