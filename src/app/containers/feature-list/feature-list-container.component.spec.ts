import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListContainerComponent } from './feature-list-container.component';

describe('FeatureListContainerComponent', () => {
  let component: FeatureListContainerComponent;
  let fixture: ComponentFixture<FeatureListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
