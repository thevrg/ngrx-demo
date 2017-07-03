import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureListContainerComponent} from './containers/feature-list/feature-list-container.component';
import {EditFeatureContainerComponent} from './containers/edit-feature/edit-feature-container.component';
import {FeatureFormIsUnsavedGuard} from './navigation-guards/FeatureFormIsUnsavedGuard';

const routes: Routes = [
  {
    path: 'feature-list',
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FeatureFormIsUnsavedGuard]
})
export class AppRoutingModule {
}
