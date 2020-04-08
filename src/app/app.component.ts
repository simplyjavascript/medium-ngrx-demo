import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/users/user.model";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/users/reducers";
import { fetchUsers } from "src/users/actions/users.action";
import { selectAllUsers } from "src/users/selectors/users.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(fetchUsers());
    this.users$ = this.store.pipe(select(selectAllUsers));
  }
}
