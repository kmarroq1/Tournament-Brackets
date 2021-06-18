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

  addContestant(newContestant: string | null) {
    if (newContestant === null || newContestant === "" || this.contestants.includes(newContestant, 0)) {
      throw new Error('Contestant cannot be registered');
    }

    try {
      this.contestants.push(newContestant);
    } catch (exception) {
      console.error(exception);
    }
  }
  
}
