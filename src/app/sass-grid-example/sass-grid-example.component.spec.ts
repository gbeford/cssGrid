import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassGridExampleComponent } from './sass-grid-example.component';

describe('SassGridExampleComponent', () => {
  let component: SassGridExampleComponent;
  let fixture: ComponentFixture<SassGridExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassGridExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
