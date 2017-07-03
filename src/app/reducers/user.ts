import {User, UserId} from '../../types/user';
import {Action} from '@ngrx/store';
import {ADD_USER} from '../../actions/user';

export interface State {
  userList: User[];
  selected: UserId | null;
}

export const initialState: State = {
  userList: [],
  selected: null
};

export const reducer = (state = initialState, action: Action) => {

  let {userList, selected} = state;
  let changed = false;

  switch (action.type) {
    case ADD_USER:
      const newUser = action.payload as User;
      userList = [...userList, newUser];
      changed = true;
  }

  return changed ? {
    userList,
    selected
  } : state;
};
