import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private contestants: string[];
  constructor() {
    this.contestants = [];
   }

  getContestants() : string[] {
    return this.contestants;
  }

  addContestant(newContestant: string) {
    this.contestants.push(newContestant);
  }
}
