import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainManagementComponent } from './painmanagement.component';

describe('PainManagementComponent', () => {
  let component: PainManagementComponent;
  let fixture: ComponentFixture<PainManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a random advice on init', () => {
    component.ngOnInit();
    expect(component.selectedAdvice).toBeTruthy();
  });

  it('should show a different advice when the button is clicked', () => {
    const initialAdvice = component.selectedAdvice;
    component.showRandomAdvice();
    expect(component.selectedAdvice).not.toBe(initialAdvice);
  });
});
