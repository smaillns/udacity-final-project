// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const apiId = '2nio3dcn79'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`


export const environment = {
  production: false
};


export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'smaillns.auth0.com',            // Auth0 domain
  clientId: 'EsB8Mm1tOBmpXvXk23bNfgkGZ62GTSS6',          // Auth0 client id
  callbackUrl: 'http://localhost:4200/client'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
