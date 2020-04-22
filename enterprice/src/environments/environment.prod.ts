const apiId = '2nio3dcn79'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const environment = {
  production: true
};

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'smaillns.auth0.com',            // Auth0 domain
  clientId: 'EsB8Mm1tOBmpXvXk23bNfgkGZ62GTSS6',          // Auth0 client id
  callbackUrl: 'http://www.ucci.uk/callback'
}
