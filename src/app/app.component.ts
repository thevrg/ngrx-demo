import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {State} from './reducers';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app works!';
  actionStatePairs: Array<[Action, State]> = [];
  subscription: Subscription;

  constructor(private _actions$: Actions, private _store: Store<State>) {
  }

  ngOnInit(): void {
    this.subscription = this._actions$.withLatestFrom(this._store)
      .map(value => value as [Action, State])
      .distinctUntilChanged()
      .subscribe((actionStatePair => this.actionStatePairs.push(actionStatePair)));

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
