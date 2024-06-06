import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KevPage } from './kev.page';

describe('KevPage', () => {
  let component: KevPage;
  let fixture: ComponentFixture<KevPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
