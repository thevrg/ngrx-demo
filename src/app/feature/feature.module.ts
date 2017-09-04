import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import {FeatureListComponent} from './components/feature-list/feature-list.component';
import {FeatureListContainerComponent} from './containers/feature-list/feature-list-container.component';
import {EditFeatureComponent} from './components/edit-feature/edit-feature.component';
import {EditFeatureContainerComponent} from './containers/edit-feature/edit-feature-container.component';
import {FeatureFormIsUnsavedGuard} from './navigation-guards/FeatureFormIsUnsavedGuard';
import {FeatureEffects} from './effects/feature-effects';
import 'rxjs/add/operator/map';


export const COMPONENTS = [FeatureListComponent, FeatureListContainerComponent, EditFeatureComponent, EditFeatureContainerComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,
    StoreModule.forFeature('feature', reducers),
    EffectsModule.forFeature([FeatureEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: FeatureListContainerComponent,
        children: [
          {
            path: ':id/edit',
            component: EditFeatureContainerComponent,
            canDeactivate: [FeatureFormIsUnsavedGuard],
            children: [],
          },
          {
            path: ':id/edit',
            component: EditFeatureContainerComponent,
            children: [],
            outlet: 'korte'
          }

        ]
      }

    ])],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [FeatureFormIsUnsavedGuard]
})
export class FeatureModule {}
