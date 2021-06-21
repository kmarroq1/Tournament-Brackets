import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosterService } from '../../services/roster.service';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent Test', () => {
  let form: FormsModule;
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RegistrationComponent],
      providers: [RosterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should register two players', () => {
    component.players.push('Clover');
    component.players.push('Sam');
    component.registerContestants();

    expect(component.informationMessage).toEqual('Clover,Sam');
  });

  it('should not allow duplicate names', () => {
    component.players.push('Clover');
    component.players.push('Clover');
    component.registerContestants();
    expect(component.informationMessage.toString()).toEqual('Error: Contestant already exists');
  });

  it('should not include empty strings in roster', () => {
    component.players.push('Sam');
    component.players.push('');
    component.players.push('Clover');
    component.registerContestants();

    expect(component.informationMessage).toEqual('Sam,Clover');
  });

  it('should not allow zero players', () => {
    component.players.push('');

    expect(function () {
      component.registerContestants();
    }).toThrowError('Error: Invalid roster');
  });

  it('should not allow invalid number of players', () => {
    component.players.push('Clover');
    component.players.push('Sam');
    component.players.push('Alex');
    expect(function () {
      component.registerContestants();
    }).toThrowError('Error: Only 2, 4, or 8 contestants allowed');
  });
});
