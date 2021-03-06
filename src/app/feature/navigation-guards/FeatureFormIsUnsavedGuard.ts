///<reference path="../../../../node_modules/@angular/router/src/interfaces.d.ts"/>
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {EditFeatureContainerComponent} from '../containers/edit-feature/edit-feature-container.component';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {State, isEditedDirty} from '../reducers';
@Injectable()
export class FeatureFormIsUnsavedGuard implements CanDeactivate<EditFeatureContainerComponent> {

  isEditedFeatureDirty$: Observable<boolean>;

  constructor(private _store: Store<State>) {
    this.isEditedFeatureDirty$ = this._store.select(isEditedDirty);
  }

  canDeactivate(component: EditFeatureContainerComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot) {
    return this.isEditedFeatureDirty$.map(dirty => dirty ?
      window.confirm('There are unsaved changes! Do you really want to loose them?')
      : true);
  }

}
