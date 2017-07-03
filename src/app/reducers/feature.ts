import {Feature, FeatureId} from '../../types/feature';
import * as featureActions from '../../actions/feature';
import {createSelector} from 'reselect';
import * as _ from 'lodash';
import {DetailsFormMode, EntityStatus} from '../../types/common';


export interface State {
  featureIdList: FeatureId[];
  featureById: { [featureId: number]: Feature };
  featureStatusById: { [featureId: number]: EntityStatus };
  selectedId: FeatureId | null;
  detailsMode: DetailsFormMode;
  edited: Feature | null;
}

export const initialState: State = {
  featureIdList: [],
  featureById: {},
  featureStatusById: {},
  selectedId: null,
  detailsMode: DetailsFormMode.HIDE,
  edited: null
};

// Selectors

export const getFeatureIdList = (state: State) => state.featureIdList;
export const getFeatureById = (state: State) => state.featureById;
export const getFeatureStatusById = (state: State) => state.featureStatusById;
export const getFeatureList = (state: State) => state.featureIdList
  .map(featureId => state.featureById[featureId])
  .filter(feature => !!feature);
export const getEdited = (state: State) => state.edited;
export const getSelectedFeatureId = (state: State) => state.selectedId;
export const getDetailsMode = (state: State) => state.detailsMode;
export const getSelectedFeature = createSelector(getFeatureList, getSelectedFeatureId,
  (featureList, selectedId) => featureList.find((feature) => feature.id === selectedId));

export const isEditedDirty = (state: State) => {
  if (state.edited && state.edited.id && state.featureStatusById[state.edited.id] === EntityStatus.LOADED) {
    const editedId = state.edited.id;
    return !_.isEqual(state.featureById[editedId], state.edited);
  } else {
    return false;
  }
};


export function reducer(state = initialState, action: featureActions.Any): State {

  let {featureIdList, featureById, featureStatusById, selectedId, detailsMode, edited} = state;
  let changed = false;

  switch (action.type) {

    case featureActions.FEATURES_LOADED: {
      const features = action.payload as Feature[];
      featureIdList = features.map(feature => feature.id);
      featureById = {...featureById};
      featureStatusById = {...featureStatusById};
      features.forEach(feature => {
        const featureId = feature.id;
        featureById[featureId] = feature;
        featureStatusById[featureId] = EntityStatus.LOADED;
      });
      changed = true;
      break;
    }
    case featureActions.FEATURE_LOADED:
    case featureActions.UPDATE_FEATURE: {
      const loadedFeature = action.payload as Feature;
      const featureId = loadedFeature.id;
      featureById = {...featureById, [featureId]: loadedFeature};
      featureStatusById = {...featureStatusById, [featureId]: EntityStatus.LOADED};
      featureById[featureId] = loadedFeature;
      featureStatusById[featureId] = EntityStatus.LOADED;
      changed = true;
      break;
    }
    case featureActions.SELECT_FEATURE: {
      const featureId = action.payload as FeatureId;
      selectedId = featureId;
      changed = true;
      break;
    }
    case featureActions.START_EDIT_FEATURE: {
      const featureId = action.payload as FeatureId;
      selectedId = featureId;
      detailsMode = DetailsFormMode.EDIT;
      edited = null;
      changed = true;
      break;
    }
    case featureActions.UPDATE_EDITED_FEATURE: {
      const feature = action.payload as Feature;
      edited = {...feature};
      changed = true;
      break;
    }
  }

  if (selectedId && edited === null && featureStatusById[selectedId] === EntityStatus.LOADED) {
    edited = featureById[selectedId];
  }

  return changed ? {
    featureIdList,
    featureById,
    featureStatusById,
    selectedId,
    detailsMode,
    edited
  } : state;

}

