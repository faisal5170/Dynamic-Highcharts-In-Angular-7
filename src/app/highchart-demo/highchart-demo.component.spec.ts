import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartDemoComponent } from './highchart-demo.component';

describe('HighchartDemoComponent', () => {
  let component: HighchartDemoComponent;
  let fixture: ComponentFixture<HighchartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
