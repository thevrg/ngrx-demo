import {User, UserId} from '../../../types/user';
import {ADD_USER, Any} from '../actions/user';

export interface State {
  userList: User[];
  selected: UserId | null;
}

const initialState: State = {
  userList: [],
  selected: null
};

export const reducer = (state = initialState, action: Any) => {

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
