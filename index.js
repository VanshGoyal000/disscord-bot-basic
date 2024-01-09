// import { Client, GatewayIntentBits, Message } from 'discord.js';
// const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent] });
// client.on("messageCreate" , (Message)=>{
//     console.log(Message.content);
// });
// client.login(
//     "MTE4OTUzMDAxOTU3NjQyNjYwNw.G1LpEa.x3NWco8hTLdP6Nb7EUPIYsNyOhKZwGAX4sIgaI"
// )

const { Client, GatewayIntentBits } = require('discord.js');

// Create a new instance of Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Event: When the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event: When a message is received
client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message starts with the prefix '!'
  if (message.content.startsWith('!moj')) {
    // Reply with a simple greeting
    message.reply('chala ja bsdk');
  }
});

// Log in to Discord with the bot token
client.login('MTE4OTUzMDAxOTU3NjQyNjYwNw.G1LpEa.x3NWco8hTLdP6Nb7EUPIYsNyOhKZwGAX4sIgaI');