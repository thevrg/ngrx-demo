import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {Feature, FeatureId} from '../../../types/feature';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {


  @Input()
  featureList: Feature[];

  @Input()
  selectedId: FeatureId;

  @Output()
  featureSelected = new EventEmitter<FeatureId>();

  constructor() {
  }

  ngOnInit() {
  }

  selectFeature(featureId: FeatureId) {
    this.featureSelected.emit(featureId);
  }


}
