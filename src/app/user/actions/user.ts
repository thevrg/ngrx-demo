import {Action} from '@ngrx/store';
import {User} from '../../../types/user';
export const ADD_USER = 'Add User';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {
  }
}

export type Any = AddUser;
