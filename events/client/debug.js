//here the event starts
const config = require(`${process.cwd()}/botconfig/config.json`);
module.exports = (client, info) => {
  if(!config[`debug-discordjs-logs`]) return;
  console.log(String(info).grey);
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.dev
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
