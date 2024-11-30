import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdviceComponent } from './advice.component';
;  // Mettez à jour l'import ici

describe('AdviceComponent', () => { // Utilisez "AdviceComponent" ici
  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdviceComponent]  // Utilisez "AdviceComponent" ici
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
