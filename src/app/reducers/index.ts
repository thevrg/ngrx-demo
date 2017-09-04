import * as fromFeature from '../feature/reducers/index';
import * as fromUser from '../user/reducers/user';
import {environment} from '../../environments/environment';
import {
  ActionReducer, ActionReducerMap, createFeatureSelector, createSelector,
  MetaReducer
} from '@ngrx/store';
// import {compose} from '@ngrx/core';
// import {storeFreeze} from 'ngrx-store-freeze';

export interface State {
  // feature: fromFeature.State;
  // user: fromUser.State;
  x: string;
}

export const getFeatureState = createFeatureSelector('feature');
// export const getFeatureList = createSelector(getFeatureState, fromFeature.getFeatureList);
// export const getEditedFeature = createSelector(getFeatureState, fromFeature.getEdited);
// export const getSelectedFeatureId = createSelector(getFeatureState, fromFeature.getSelectedFeatureId);
// export const getFeatureDetailsMode = createSelector(getFeatureState, fromFeature.getDetailsMode);
// export const isEditedFeatureDirty = createSelector(getFeatureState, fromFeature.isEditedDirty);

export const reducers: ActionReducerMap<State> = {
  // feature: fromFeature.reducer
  //  , user: fromUser.reducer
} as ActionReducerMap<State>;


// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
