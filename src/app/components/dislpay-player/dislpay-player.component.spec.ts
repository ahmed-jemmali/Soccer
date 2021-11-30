import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislpayPlayerComponent } from './dislpay-player.component';

describe('DislpayPlayerComponent', () => {
  let component: DislpayPlayerComponent;
  let fixture: ComponentFixture<DislpayPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislpayPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislpayPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
