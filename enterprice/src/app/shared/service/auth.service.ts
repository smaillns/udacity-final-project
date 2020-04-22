import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { authConfig } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;

  constructor() {

    // Set-up the authentication options for our flow
    this.authOptions = {
      domain: authConfig.domain,
      clientID: authConfig.clientId
    };

    // Set-up the authentication flow
    this.auth0 = new auth0.WebAuth(this.authOptions);
  }

  public authorize() {
    this.auth0.authorize({
      redirectUri: authConfig.callbackUrl,
      responseType: 'token id_token'
    });
  }

  public parseAccessToken() {
    this.auth0.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('Access token: ', authResult.accessToken);
        console.log('id token: ', authResult.idToken);
        localStorage.setItem('ucci_token', authResult.idToken);
      } else if (err) {
        console.log(err);
      }

    });
  }
}
