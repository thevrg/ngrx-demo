import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureContainerComponent } from './edit-feature-container.component';

describe('FeatureListContainerComponent', () => {
  let component: EditFeatureContainerComponent;
  let fixture: ComponentFixture<EditFeatureContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeatureContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeatureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
