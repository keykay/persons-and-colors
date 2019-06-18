import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarTitleComponent } from './topbar-title.component';

describe('TopbarTitleComponent', () => {
  let component: TopbarTitleComponent;
  let fixture: ComponentFixture<TopbarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
