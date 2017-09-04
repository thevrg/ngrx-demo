import {environment} from '../../environments/environment';
import {
  ActionReducer, ActionReducerMap, createFeatureSelector, createSelector,
  MetaReducer
} from '@ngrx/store';

export interface State {
  // feature: fromFeature.State;
  // user: fromUser.State;
  x: string;
}

export const reducers: ActionReducerMap<State> = {
  // feature: fromFeature.reducer
  //  , user: fromUser.reducer
} as ActionReducerMap<State>;


// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    const newState = reducer(state, action);
    console.log('Dispatching\n  action', action, '\n  new state', newState);
    return newState;
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
