import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../login/store/agent-list.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn: boolean;
  constructor(private store: Store<AppState>) {
    this.store.select('agentList').subscribe((state) => {
      this._isLoggedIn = state.isLoggedIn;
    });
  }

  isAuthenticated = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this._isLoggedIn);
      }, 600);
    });
  };

  isValidUser = (LL_ID: string, password: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        this.store.select('agentList').subscribe((agentState) => {
          let index = agentState.validUserNames.findIndex((creds) => {
            return (
              JSON.stringify(creds) ===
              JSON.stringify({
                LL_ID: LL_ID,
                password: password,
              })
            );
          });
          if (index === -1) {
            resolve(false);
          } else {
            resolve(true);
          }
        });
      }, 800);
    });
  };
}
