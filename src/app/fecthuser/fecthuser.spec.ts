import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fecthuser } from './fecthuser';

describe('Fecthuser', () => {
  let component: Fecthuser;
  let fixture: ComponentFixture<Fecthuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fecthuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fecthuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
