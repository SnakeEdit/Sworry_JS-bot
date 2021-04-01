const Discord = require('discord.js');
const bot = new Discord.Client();
//включение файла конфига
let config = require('./config.json');
//считывание токена и префикса
let token = config.token;
let prefix = config.prefix;
//Определение текущего времени
Data = new Date ();
Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();
//Ссылка приглашение бота
bot.on('ready',() => {
	console.log('Зачем меня, ${bot.user.username} призвали?');
	bot.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log(link);
	});
});
//команда бота
bot.on('message', msg => {
	if (msg.content === prefix + 'time') 
	{
		msg.reply('Текущее время в Волгограде -' +Hour + ':' + Minutes + ':' + Seconds);
	}
});
bot.login(token);