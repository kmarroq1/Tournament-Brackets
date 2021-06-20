import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css'],
})
export class BracketsComponent implements OnInit {
  public currentPlayers: string[];
  public winners: string[];
  public roundNumber: number;
  public matches: number[];
  constructor(private rosterService: RosterService) {
    this.currentPlayers = this.rosterService.getContestants();
    this.roundNumber = 1;
    this.matches = [];
    this.winners = [];
  }

  addMatches() {
    for (var index = 1; index < this.currentPlayers.length / 2 + 1; index++)
      this.matches.push(index);
  }
  trackByFn(index: any, item: any) {
    return index;
  }

  onSubmit() {
    if (this.currentPlayers.length <= 1) {
      return;
    } else if (this.currentPlayers.length === 2) {
      this.matches.pop();
    } else if (this.currentPlayers.length === 4) {
      this.matches.pop();
      this.roundNumber++;
    } else {
      this.matches.pop();
      this.matches.pop();
      this.roundNumber++;
    }
    this.currentPlayers.splice(0, this.currentPlayers.length);
    for (let index = 0; index < this.winners.length; index++) {
      this.currentPlayers[index] = this.winners[index];
    }
    if (this.currentPlayers.length === 1) {
      this.winners = [];
      this.winners[0] = this.currentPlayers[0];
    } else {
      this.winners = [];
    }
  }
  ngOnInit(): void {
    this.addMatches();
  }
}
