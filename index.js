async function main() {
  const axios = require("axios");
  const oauth = require("axios-oauth-client");
  const getClientCredentials = oauth.client(axios.create(), {
    url: "https://XXXXX.authentication.eu10.hana.ondemand.com/oauth/token",
    grant_type: "client_credentials",
    client_id: "YYYY",
    client_secret: "XXXXXXXXXXXXX=",
  });

  const auth = await getClientCredentials();

  console.log(auth);
}

main();
