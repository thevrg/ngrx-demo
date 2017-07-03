import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {Feature, FeatureId} from '../../../types/feature';
import {LoadFeatures} from '../../../actions/feature';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feature-list-container',
  templateUrl: './feature-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListContainerComponent implements OnInit {

  featureList$: Observable<Feature[]>;
  selectedId$: Observable<FeatureId>;

  constructor(private _store: Store<fromRoot.State>, private _router: Router) {
  }

  ngOnInit() {
    this.featureList$ = this._store.select(fromRoot.getFeatureList);
//    this.selectedId$ = this._store.select((state) => state.feature.selected);
    this.selectedId$ = this._store.select(fromRoot.getSelectedFeatureId);
    this._store.dispatch(new LoadFeatures());
  }

  featureSelected(featureId: FeatureId) {
    this._router.navigate(['feature-list', featureId, 'edit']);
    // this._store.dispatch(new StartEditFeature(featureId));
  }
}
