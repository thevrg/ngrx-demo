import {Action} from '@ngrx/store';
import {Feature, FeatureId} from '../types/feature';

export const LOAD_FEATURES = 'Load Features';
export const LOAD_FEATURE = 'Load Feature';
export const START_EDIT_FEATURE = 'Start Edit Feature';
export const FEATURES_LOADED = 'Features loaded';
export const FEATURE_LOADED = 'Feature loaded';
export const ADD_FEATURE = 'Add Feature';
export const UPDATE_FEATURE = 'Update Feature';
export const UPDATE_EDITED_FEATURE = 'Update Edited Feature';
export const REMOVE_FEATURE = 'Remove Feature';
export const TOGGLE_FEATURE = 'Toggle Feature';
export const SELECT_FEATURE = 'Select Feature';

export class AddFeature implements Action {
  readonly type = ADD_FEATURE;

  constructor(public payload: Feature) {
  }
}

export class UpdateFeature implements Action {
  readonly type = UPDATE_FEATURE;

  constructor(public payload: Feature) {
  }
}

export class UpdateEditedFeature implements Action {
  readonly type = UPDATE_EDITED_FEATURE;

  constructor(public payload: Feature) {
  }
}

export class RemoveFeature implements Action {
  readonly type = REMOVE_FEATURE;

  constructor(public payload: FeatureId) {
  }
}

export class ToggleFeature implements Action {
  readonly type = TOGGLE_FEATURE;

  constructor(public payload: FeatureId) {
  }
}

export class LoadFeatures implements Action {
  readonly type = LOAD_FEATURES;

  constructor() {
  }
}

export class SelectFeature implements Action {
  readonly type = SELECT_FEATURE;

  constructor(public payload: FeatureId) {
  }
}

export class LoadFeature implements Action {
  readonly type = LOAD_FEATURE;

  constructor(public payload: FeatureId) {
  }
}

export class FeaturesLoaded implements Action {
  readonly type = FEATURES_LOADED;

  constructor(public payload: Feature[]) {
  }
}

export class FeatureLoaded implements Action {
  readonly type = FEATURE_LOADED;

  constructor(public payload: Feature) {
  }
}

export class StartEditFeature implements Action {
  readonly type = START_EDIT_FEATURE;

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
