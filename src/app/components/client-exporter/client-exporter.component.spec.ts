import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientExporterComponent } from './client-exporter.component';

describe('ClientExporterComponent', () => {
  let component: ClientExporterComponent;
  let fixture: ComponentFixture<ClientExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientExporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
