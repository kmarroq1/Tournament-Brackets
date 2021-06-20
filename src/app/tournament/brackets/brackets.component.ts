import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css'],
})
export class BracketsComponent implements OnInit {
  public roster: string[];
  public currentPlayers: string[];
  public roundNumber: number;
  public matches: number[];
  constructor(private rosterService: RosterService) {
    this.roster = this.rosterService.getContestants();
    this.currentPlayers = this.roster;
    this.roundNumber = 1;
    this.initializeMatches();
  }

  initializeMatches() {
    this.matches = [];
    for (var index = 1; index < (this.currentPlayers.length / 2) + 1; index++)
      this.matches.push(index);
  }
  trackByFn(index: any, item: any) {
    return index;
  }

  onSubmit() {
    this.roundNumber++;
    this.currentPlayers.pop();
    this.currentPlayers.pop();
  }
  ngOnInit(): void {
    this.matches.length = this.currentPlayers.length / 2;
  }
}
