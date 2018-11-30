const dev = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "gmp-app-api-2-dev-attachmentsbucket-1cx5d41rg6b87"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://api.vanillaslender.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_wPC1P6UfN",
    APP_CLIENT_ID: "53fg6f4drpiv3ejh5hgdpj60g0",
    IDENTITY_POOL_ID: "eu-west-2:7c57622d-e429-4863-940a-c1cb32536ab7"
  },
  STRIPE_KEY: "pk_test_m2mv3LgWF9x3tv0c9HF0s6Y4"
};

const prod = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "gmp-app-api-2-prod-attachmentsbucket-wgy2ivzqh2fx"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://api.vanillaslender.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_jBJumizVl",
    APP_CLIENT_ID: "65juetjbe653pjc9tu0e62it1s",
    IDENTITY_POOL_ID: "eu-west-2:5926c386-e54c-47c2-8222-d806ec58daf1"
  },
  STRIPE_KEY: "pk_test_m2mv3LgWF9x3tv0c9HF0s6Y4"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};