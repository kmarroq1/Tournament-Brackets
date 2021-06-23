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

  it('should not submit', () => {
    expect(function () {
      component.onSubmit();
    }).toThrowError('Not enough players registered for a match');
  });
});
