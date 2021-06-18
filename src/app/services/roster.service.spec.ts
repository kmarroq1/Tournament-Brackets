import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService Test', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should not allow duplicate names', () => {
    service.addContestant('Clover');
    expect(function(){service.addContestant('Clover');}).toThrowError('Contestant cannot be registered');
  });

  it('should not allow null names', () => {
    let name:string = null;
    expect(function(){service.addContestant(name);}).toThrowError('Contestant cannot be registered');
  });

  it('should not allow empty string names', () => {
    expect(function(){service.addContestant('');}).toThrowError('Contestant cannot be registered');
  });

  it('should add one contestant', () => {
    service.addContestant('Clover');
    expect(service.getContestants.toString).toBeTruthy('Clover');
  });

  it('should add several contestants', () => {
    service.addContestant('Clover');
    service.addContestant('Sam');
    service.addContestant('Alex');
    expect(service.getContestants.toString).toBeTruthy('Clover, Sam, Alex');
  });
});
