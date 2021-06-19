import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public players: string[];
  public informationMessage: string;
  public edited: boolean;
  constructor(private rosterService: RosterService) {
    this.players = ['', '', '', '', '', '', '', ''];
    this.informationMessage = '';
    this.edited = false;
  }

  registerContestants() {
    let modifiedPlayers = this.players.filter(name => name !== '');
    if (modifiedPlayers.length === 0 || modifiedPlayers.length % 2 !== 0) {
      this.informationMessage = 'Invalid roster';
      this.edited = true;
      throw new Error(this.informationMessage);
    }

    try {
      this.players
        .filter((player) => player !== '')
        .forEach((player) => {
          this.rosterService.addContestant(player);
        });
    } catch (exception) {
      this.informationMessage = exception;
      console.error(exception);
    }
    this.edited = true;
  }

  editedForm() {
    if (this.edited && this.informationMessage === '') {
      return this.rosterService.getContestants().toString();
    } else if (this.edited && this.informationMessage !== '') {
      return 'Error: ' + this.informationMessage;
    } else {
      return '';
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit(): void {}
}
