{
    "name": "Hoodlumbot",
    "version": "1.0.1",
    "description": "My own Discord bot",
    "main": "bot.js",
    "author": "FANCYHOODLUM",
    "dependencies": {}
  }
  
  {
     "token": "NDM3NzM4NTUxMDc4Mjg5NDE5.Db6fFw.2lMGaZbU0cBj1tasm0RMWH3rIf0"
  }
  
  
  var Discord = require('discord.io');
  var logger = require('winston');
  var auth = require('./auth.json');
  // Configure logger settings
  logger.remove(logger.transports.Console);
  logger.add(logger.transports.Console, {
      colorize: true
  });
  logger.level = 'debug';
  // Initialize Discord Bot
  var bot = new Discord.Client({
     token: auth.token,
     autorun: true
  });
  bot.on('ready', function (evt) {
      logger.info('Connected');
      logger.info('Logged in as: ');
      logger.info(bot.username + ' - (' + bot.id + ')');
  });
  bot.on('message', function (user, userID, channelID, message, evt) {
     
      if (message.substring(0, 1) == '!') {
          var args = message.substring(1).split(' ');
          var cmd = args[0];
         
          args = args.splice(1);
          switch(cmd) {
              // !ping
              case 'ping':
                  bot.sendMessage({
                      to: channelID,
                      message: 'Pong!'
                  });
              break;
              // Just add any case commands if you want to..
           }
       }
  });
  view rawbot.js hosted with ❤ by GitHub
  
  npm install discord.io winston --save
  
  node bot.js
  