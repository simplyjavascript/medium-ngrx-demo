import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, tap } from "rxjs/operators";
import { fetchUsersSuccess } from "../actions/users.action";
import { UserService } from "../users.service";
import { UserActions } from "../actions";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  users$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.fetchUsers),
      tap(() => console.log("fetching user response..")),
      concatMap((action) => this.userService.fetchAllUsers()),
      map((response) => fetchUsersSuccess({ users: response.data }))
    )
  );
}
