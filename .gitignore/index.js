
const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var vers = "11";

var BAN = ['juif', 'shoah', 'cremation', 'juiverie'];
BAN.lenght = 4;

var prefix = "!";
var role = "";
var ran = 0;
var author = "";

var on = true;

var playto = "vers : " + vers;

var pinned = false;

clientDiscord.on('ready', ()=> {
	
	clientDiscord.user.setPresence({ game: { name: playto, type: 0}});

    //console.log("BOT ready");
});

clientDiscord.login(process.env.TOKENEPI);

	clientDiscord.on('message', message => {

		author = message.author.tag;
		
		if(message.author.bot){
		   	return;
		   }
		   
		if(on == true){

			if(message.content === prefix + "nsfw"){
				
				message.channel.send("c'est pas gentil d'être mechant avec les brigands 🍆 \n test");
			}
			
			for (var i = 0; i < BAN.lenght; i++) {
				
				if(message.content === BAN[i]){
				
					message.delete();
					
					return;
					
				}
			}
			
			if(message.content === prefix + "dab"){
				random();
				if(ran <= 5)
				   {
				   	message.channel.send("https://tenor.com/view/luigi-dab-gif-9672617");
				   }
				if(ran > 5 && ran <= 10)
				   {
				   	message.channel.send("https://tenor.com/view/thanos-dab-fortnite-gif-12100710");
				   }
				if(ran > 10 && ran <= 15)
				   {
				   	message.channel.send("https://tenor.com/view/bettywhite-dab-gif-5044603");
				   }
				if(ran > 15 && ran <= 20)
				   {
				   	message.channel.send("https://tenor.com/view/dab-dancing-idgaf-gif-5661979");
				   }
				if(ran > 20 && ran <= 25)
				   {
				   	message.channel.send("https://tenor.com/view/martin-weill-quotidien-dab-gif-9229974");
				   }
				if(ran > 25 && ran <= 30)
				   {
				   	message.channel.send("https://tenor.com/view/squid-ward-dab-parade-gif-11976669");
				   }
				if(ran > 30 && ran <= 35)
				   {
				   	message.channel.send("https://tenor.com/view/dab-gif-7297587");
				   }
				if(ran > 35 && ran <= 40)
				   {
				   	message.channel.send("https://tenor.com/view/dab-pogba-bad-pogba-gif-7345779");
				   }
				if(ran > 40 && ran <= 45)
				   {
				   	message.channel.send("https://tenor.com/view/lame-grandma-dabs-dabbing-cool-gif-8205280");
				   }
				if(ran > 45 && ran <= 50)
				   {
				   	message.channel.send("https://tenor.com/view/bill-gates-dab-gatesdab-billgatesdab-gif-12977596");
				   }
					if(ran > 50 && ran <= 55)
				   {
				   	message.channel.send("https://tenor.com/view/dab-epic-lit-legs-gif-8214134");
				   }
					if(ran > 55 && ran <= 60)
				   {
				   	message.channel.send("https://tenor.com/view/dab-gif-10913292");
				   }
					if(ran > 65 && ran <= 70)
				   {
				   	message.channel.send("https://tenor.com/view/trummote-donald-trump-infinite-dab-fortnite-fortnite-dance-gif-13273299");
				   }
					if(ran > 70 && ran <= 75)
				   {
				   	message.channel.send("https://tenor.com/view/rio-dab-sspin-gif-12684706");
				   }
					if(ran > 75 && ran <= 80)
				   {
				   	message.channel.send("https://tenor.com/view/dancing-niqab-hijab-muslim-muslima-gif-7813970");
				   }
					if(ran > 80 && ran <= 85)
				   {
				   	message.channel.send("https://tenor.com/view/dab-fidgetspinners-jacksfilms-gif-8790973");
				   }
					if(ran > 85 && ran <= 90)
				   {
				   	message.channel.send("https://fr.wikipedia.org/wiki/Dab");
				   }
					if(ran > 90 && ran <= 95)
				   {
				   	message.channel.send("https://tenor.com/view/dab-dabbing-euses-gif-7302013");
				   }
					if(ran > 95 && ran <= 100)
				   {
				   	message.channel.send("https://tenor.com/view/peterson-farm-bros-dinosaur-dab-dabbing-farm-gif-8466991");
				   }
			}
			
		
			
			if(message.content === perfix + "help"){
				
			   message.channel.send({
				   embed: {
				   //color: 3447003,
				   description: "test",
					   
				   fields: [
					   {
					   	name: "test1",
						value: "test2"
					   },
					   {
					   	name: "test3",
						value: "test4"
					   }
				   ],
			   }
			});
			}
			
			if(message.content === prefix + "pin"){
			
				//message.channel.send("**VOTRE PROCHAIN MESSAGE SERA EPINGLER**");
				pinned = true;
			}
			if(pinned == true){
				
				if(message.content === prefix + "pin"){
					message.channel.send("*▶ tapez votre message à épingler*")
					//return;
				}
				else{
					message.pin();
					pinned = false;
					message.channel.send("**✅ Message épinglé !**");
				}
			}
		}
  });

  clientDiscord.on('guildMemberAdd', member => {

});

function random(min, max){
	min = Math.ceil(1);
	max = Math.floor(100);
	ran = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice try !");
}
