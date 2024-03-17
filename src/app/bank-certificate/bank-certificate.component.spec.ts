import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCertificateComponent } from './bank-certificate.component';

describe('BankCertificateComponent', () => {
  let component: BankCertificateComponent;
  let fixture: ComponentFixture<BankCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
