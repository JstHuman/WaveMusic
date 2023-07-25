require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'OTU1NDYyNjY3OTE1NjI0NDg5.GwCF0B.LUfhBBn4-SFdqAhHio-MM60IuykRqhr8iXSvcQ', // your discord bot token
  prefix: process.env.PREFIX || '.', // bot prefix
  ownerID: process.env.OWNERID?.split(',') || ['807151980464046110'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '40c5ee08678d4e60aef46bedc6761fd4', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '2e8ef57a93454b31b035569f64fea7c8', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://CodeXDev:CodeXDev007@codex-public-04.twqkdck.mongodb.net/?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#3366ff', // embed colour
  logs: process.env.LOGS || '', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/TgWuNbcFbH',
    invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=955462667915624489&permissions=8&scope=bot',
    vote: process.env.VOTE || 'https://discord.gg/TgWuNbcFbH',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lavalink-coders.ml:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'coders',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
