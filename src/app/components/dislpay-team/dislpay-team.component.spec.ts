import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislpayTeamComponent } from './dislpay-team.component';

describe('DislpayTeamComponent', () => {
  let component: DislpayTeamComponent;
  let fixture: ComponentFixture<DislpayTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislpayTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislpayTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
