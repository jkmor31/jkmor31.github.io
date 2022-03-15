import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlProjectsComponent } from './html-projects.component';

describe('HtmlProjectsComponent', () => {
  let component: HtmlProjectsComponent;
  let fixture: ComponentFixture<HtmlProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
