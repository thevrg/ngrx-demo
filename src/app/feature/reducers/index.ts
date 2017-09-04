import {Feature, FeatureId} from '../types/feature';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DetailsFormMode, EntityStatus} from '../../../types/common';
import * as fromFeature from './feature';

export {initialState, State} from './feature';

// Selectors

export const getFeatureState = createFeatureSelector('feature');

export const getFeatureIdList = createSelector(getFeatureState, fromFeature.getFeatureIdList);
export const getFeatureById = createSelector(getFeatureState, fromFeature.getFeatureById);
export const getFeatureStatusById = createSelector(getFeatureState, fromFeature.getFeatureStatusById);
export const getFeatureList = createSelector(getFeatureState, fromFeature.getFeatureList);
export const getEdited = createSelector(getFeatureState, fromFeature.getEdited);
export const getSelectedFeatureId = createSelector(getFeatureState, fromFeature.getSelectedFeatureId);
export const getDetailsMode = createSelector(getFeatureState, fromFeature.getDetailsMode);
export const getSelectedFeature = createSelector(getFeatureState, fromFeature.getSelectedFeature);

export const isEditedDirty = createSelector(getFeatureState, fromFeature.isEditedDirty);


export const reducers = fromFeature.reducer;

