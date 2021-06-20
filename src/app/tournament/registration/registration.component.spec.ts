import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosterService } from '../../services/roster.service';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent Test', () => {
  let form: FormsModule;
  let component: RegistrationComponent;
  let service: RosterService;
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
    const input = fixture.nativeElement.querySelector('input');
    input.contestantName1 = 'Clover';
    input.contestantName2 = 'Sam';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.players.toString()).toEqual('Clover,Sam');
  });

  it('should not allow duplicate names', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.contestantName1 = 'Clover';
    input.contestantName2 = 'Clover';
    input.dispatchEvent(new Event('input'));

    expect(component.informationMessage).toEqual('Contestant already exists');
  });

  it('should not include empty strings in roster', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.contestantName1 = '';
    input.contestantName2 = 'Clover';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(service.getContestants().toString()).toEqual('Clover');
  });

  it('should not allow zero players', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.informationMessage).toEqual('Error: Invalid roster');
  });

  it('should not allow odd number of players', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.contestantName1 = 'Clover';
    input.contestantName2 = 'Sam';
    input.contestantName3 = 'Alex';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.informationMessage).toEqual('Error: Uneven number of contestants not allowed');
  });
});
