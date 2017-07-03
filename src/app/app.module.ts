import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, initialState} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import { FeatureListContainerComponent } from './containers/feature-list/feature-list-container.component';
import {FeatureEffects} from './effects/feature-effects';
import { EditFeatureComponent } from './components/edit-feature/edit-feature.component';
import {FeatureListComponent} from './components/feature-list/feature-list.component';
import {EditFeatureContainerComponent} from './containers/edit-feature/edit-feature-container.component';
import {FeatureFormIsUnsavedGuard} from './navigation-guards/FeatureFormIsUnsavedGuard';

@NgModule({
  declarations: [
    AppComponent,
    FeatureListComponent,
    FeatureListContainerComponent,
    EditFeatureComponent,
    EditFeatureContainerComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducers, initialState),
    EffectsModule.runAfterBootstrap(FeatureEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
