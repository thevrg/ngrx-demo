import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Feature, FeatureId} from '../../../types/feature';
import {EditFeature, StartEditFeature, UpdateEditedFeature, UpdateFeature} from '../../../actions/feature';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {DetailsFormMode} from '../../../types/common';

@Component({
  selector: 'app-edit-feature-container',
  templateUrl: './edit-feature-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFeatureContainerComponent implements OnInit, OnDestroy {


  editedFeature: Feature = null;
  actionSubscription: Subscription;
  formMode$: Observable<DetailsFormMode>;
  editedDirty$: Observable<boolean>;


  constructor(private _store: Store<fromRoot.State>, route: ActivatedRoute, cd: ChangeDetectorRef) {

    this.editedDirty$ = this._store.select(fromRoot.isEditedFeatureDirty);
    this.formMode$ = this._store.select(fromRoot.getFeatureDetailsMode);

    this._store.select(fromRoot.getEditedFeature)
      .subscribe((editedFeature) => {
        this.editedFeature = editedFeature;
        console.log('Edited feature: ', editedFeature);
        cd.markForCheck();
      });

    this.actionSubscription =
      route.params.map(params => parseInt(params.id, 10))
        .distinctUntilChanged()
        .map(featureId => new StartEditFeature(featureId))
        .subscribe(this._store);
  }

  ngOnInit() {
  }

  onSave(feature: Feature) {
    this._store.dispatch(new UpdateFeature(feature));
  }

  onFeatureChange(feature: Feature) {
    this._store.dispatch(new UpdateEditedFeature(feature));
  }

  onStartEdit(featureId: FeatureId) {
    this._store.dispatch(new EditFeature(featureId));
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
  }
}
