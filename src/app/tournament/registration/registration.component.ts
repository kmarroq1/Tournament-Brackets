import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public players: string[];
  public informationMessage: string;
  constructor(private rosterService: RosterService) {
    this.players = ['', '', '', '', '', '', '', ''];
    this.informationMessage = '';
  }

  registerContestants() {
    let modifiedPlayers = this.players.filter((name) => name !== '');
    if (modifiedPlayers.length === 0) {
      this.informationMessage = 'Error: Invalid roster';
      throw new Error(this.informationMessage);
    } else if (modifiedPlayers.length % 2 !== 0 || modifiedPlayers.length === 6) {
      this.informationMessage =
        'Error: Only 2, 4, or 8 contestants allowed';
      throw new Error(this.informationMessage);
    }

    try {
      modifiedPlayers.forEach((player) => {
        this.rosterService.addContestant(player);
      });
      this.informationMessage = this.rosterService.getContestants().toString();
    } catch (exception) {
      this.informationMessage = exception;
      this.resetPlayers();
      this.rosterService.resetContestants();
      console.error(this.informationMessage);
    }
  }

  autofill(playersToAutofill:number) {
    this.resetPlayers();
    if (playersToAutofill === 2) {
      this.players.splice(0, playersToAutofill,'Clover', 'Alex');
    } else if (playersToAutofill === 4) {
      this.players.splice(0, playersToAutofill, 'Clover', 'Alex', 'Sam', 'Bunny');
    } else if(playersToAutofill ===8) {
      this.players.splice(0, playersToAutofill, 'Clover', 'Alex', 'Sam', 'Bunny', 'Dave', 'Kim', 'Gavin', 'Zakiria');
    }
  }

  resetPlayers(){
    this.players = ['', '', '', '', '', '', '', ''];
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit(): void {}
}
