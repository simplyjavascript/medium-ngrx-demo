import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { UserState, userReducer } from "./users.reducer";

export interface AppState {
  users: UserState;
}
export const reducers: ActionReducerMap<AppState> = {
  users: userReducer,
};
