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
      console.error(this.informationMessage);
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit(): void {}
}
