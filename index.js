require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.command('/square', async ({ command, ack, say }) => {
  try {
    await ack();
    let txt = command.text; // get the text from the command
    if (isNaN(txt)) {
      say(txt + ' is not a number');
    } else {
      say(txt + ' squared is ' + Math.pow(txt, 2));
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
});

app.message('Wassup', async ({ message, say }) => {
  try {
    await say(`Hello <@${message.user}>! Welcome to Safari Buddies!`);
  } catch (error) {
    console.log(error);
    console.error(error);
  }
});

app.start(process.env.PORT || 3000);