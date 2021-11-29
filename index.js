require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.start(process.env.PORT || 3000);