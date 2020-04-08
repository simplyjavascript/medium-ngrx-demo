import { createReducer, on } from "@ngrx/store";
import { User } from "../user.model";
import { UserActions } from "../actions";

export interface UserState {
  users: User[];
  isLoading: boolean;
  error: string;
}

export const INITIAL_STATE: UserState = {
  users: null,
  isLoading: false,
  error: "",
};

export const userReducer = createReducer(
  INITIAL_STATE,
  on(UserActions.fetchUsers, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(UserActions.fetchUsersSuccess, (state, action) => {
    return {
      ...state,
      users: action.users,
      isLoading: false,
    };
  }),

  on(UserActions.fetchUsersFail, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);
