import {Action} from '@ngrx/store';
import {Feature, FeatureId} from '../types/feature';

export const LOAD_ALL = '[Features] Load All';
export const LOAD_ONE = '[Features] Load One';
export const START_EDIT = '[Features] Start Edit';
export const ALL_LOADED = '[Features] All Loaded';
export const ONE_LOADED = '[Features] One Loaded';
export const ADD = '[Features] Add One';
export const UPDATE = '[Features] Update One';
export const UPDATE_EDITED = '[Features] Update Edited';
export const REMOVE_ONE = '[Features] Remove One';
export const TOGGLE_ONE = '[Features] Toggle Feature';
export const SELECT = '[Features] Select';

export class AddFeature implements Action {
  readonly type = ADD;

  constructor(public payload: Feature) {
  }
}

export class UpdateFeature implements Action {
  readonly type = UPDATE;

  constructor(public payload: Feature) {
  }
}

export class UpdateEditedFeature implements Action {
  readonly type = UPDATE_EDITED;

  constructor(public payload: Feature) {
  }
}

export class RemoveFeature implements Action {
  readonly type = REMOVE_ONE;

  constructor(public payload: FeatureId) {
  }
}

export class ToggleFeature implements Action {
  readonly type = TOGGLE_ONE;

  constructor(public payload: FeatureId) {
  }
}

export class LoadFeatures implements Action {
  readonly type = LOAD_ALL;

  constructor() {
  }
}

export class SelectFeature implements Action {
  readonly type = SELECT;

  constructor(public payload: FeatureId) {
  }
}

export class LoadFeature implements Action {
  readonly type = LOAD_ONE;

  constructor(public payload: FeatureId) {
  }
}

export class FeaturesLoaded implements Action {
  readonly type = ALL_LOADED;

  constructor(public payload: Feature[]) {
  }
}

export class FeatureLoaded implements Action {
  readonly type = ONE_LOADED;

  constructor(public payload: Feature) {
  }
}

export class StartEditFeature implements Action {
  readonly type = START_EDIT;

  constructor(public payload: FeatureId) {
  }
}

export type Any = AddFeature | RemoveFeature | UpdateFeature
  | StartEditFeature
  | UpdateEditedFeature
  | ToggleFeature
  | LoadFeatures | FeaturesLoaded
  | LoadFeature | FeatureLoaded
  | SelectFeature;
