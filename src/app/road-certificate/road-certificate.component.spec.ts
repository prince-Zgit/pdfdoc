import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadCertificateComponent } from './road-certificate.component';

describe('RoadCertificateComponent', () => {
  let component: RoadCertificateComponent;
  let fixture: ComponentFixture<RoadCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
