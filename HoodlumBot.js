{
  "name": "HoodlumBot",
  "version": "1.0.0",
  "description": "My own Discord bot",
  "main": "bot.js",
  "author": "FANCYHOODLUM",
  "dependencies": {}
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
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
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
});node bot.js


// !ping 
case 'ping' 
bot.sendmessage({
    to: channelID
    message: 'Pong!'
});
break;


})var Discord = require('discord.io');
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
     `!`
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
});{
  
  string token = "NDM3NzM4NTUxMDc4Mjg5NDE5.Db6bjQ.P_JT_FRPChd-2LL3Tn6E6PiC4R8";
await _client.LoginAsync(TokenType.Bot, token);
await _client.StartAsync();
}
def compute_base_permissions(member, guild):
    if guild.is_owner(member):
        return ALL

    role_everyone = guild.get_role(guild.id)  # get @everyone role
    permissions = role_everyone.permissions

    for role in member.roles:
        permissions |= role.permissions

    if permissions & ADMINISTRATOR == ADMINISTRATOR:
        return ALL

def compute_overwrites(base_permissions, member, channel):
    # ADMINISTRATOR overrides any potential permission overwrites, so there is nothing to do here.
    if base_permissions & ADMINISTRATOR == ADMINISTRATOR:
        return ALL

    permissions = base_permissions
    overwrite_everyone = overwrites.get(channel.guild_id)  # Find (@everyone) role overwrite and apply it.
    if overwrite_everyone:
        permissions &= ~overwrite_everyone.deny
        permissions |= overwrite_everyone.allow

    # Apply role specific overwrites.
    overwrites = channel.permission_overwrites
    allow = NONE
    deny = NONE
    for role_id in member.roles:
        overwrite_role = overwrites.get(role_id)
        if overwrite_role:
            allow |= overwrite_role.allow
            deny |= overwrite_role.deny

    permissions &= ~deny
    permissions |= allow

    # Apply member specific overwrite if it exist.
    overwrite_member = overwrites.get(member.user_id)
    if overwrite_member:
        permissions &= ~overwrite_member.deny
        permissions |= overwrite_member.allow

    return permissions

def compute_permissions(member, channel):
    base_permissions = compute_base_permissions(member, channel.guild)
    return compute_overwrites(base_permissions, member, channel)
{
    discord.ExecuteAndWait(async () =>
    {
        await discord.Connect("TNDM3NzM4NTUxMDc4Mjg5NDE5.Db6bjQ.P_JT_FRPChd-2LL3Tn6E6PiC4R8
", TokenType.Bot);   
    });
}
catch
{

}
