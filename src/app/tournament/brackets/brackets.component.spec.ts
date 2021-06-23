import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosterService } from 'src/app/services/roster.service';
import { FormsModule } from '@angular/forms';
import { BracketsComponent } from './brackets.component';

describe('BracketsComponent', () => {
  let form: FormsModule;
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BracketsComponent],
      providers: [RosterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not allow insufficient amount of players', () => {
    expect(function () {
      component.onSubmit();
    }).toThrowError('Not enough players registered for a match');
  });

  it('should not allow unchecked radio button', () => {
    //number of matches doesn't match number of winners
    component.roundWinners.push('Sam');
    expect(function () {
      component.onSubmit();
    }).toThrowError('Please select a winner for each match');
  });

  it('should return winner information', () => {
    component.matches[0] = 1;
    component.currentPlayers.push('Sam','Clover');
    component.roundWinners.push('Sam');
    component.onSubmit();
    expect(component.message).toEqual('Winner: Sam');
  });
});
