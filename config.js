/*▓██   ██▓ ▄▄▄       ██ ▄█▀▄▄▄      
 ▒██  ██▒▒████▄     ██▄█▒▒████▄    
  ▒██ ██░▒██  ▀█▄  ▓███▄░▒██  ▀█▄  
  ░ ▐██▓░░██▄▄▄▄██ ▓██ █▄░██▄▄▄▄██ 
  ░ ██▒▓░ ▓█   ▓██▒▒██▒ █▄▓█   ▓██▒
   ██▒▒▒  ▒▒   ▓▒█░▒ ▒▒ ▓▒▒▒   ▓▒█░
 ▓██ ░▒░   ▒   ▒▒ ░░ ░▒ ▒░ ▒   ▒▒ ░
 ▒ ▒ ░░    ░   ▒   ░ ░░ ░  ░   ▒   
 ░ ░           ░  ░░  ░        ░  ░
 ░ ░                               

Hello,
Thanks for using Yaka bot.
I am,

██╗   ██╗ █████╗ ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
╚██╗ ██╔╝██╔══██╗██║ ██╔╝██╔══██╗██╔════╝██║  ██║██║
 ╚████╔╝ ███████║█████╔╝ ███████║███████╗███████║██║
  ╚██╔╝  ██╔══██║██╔═██╗ ██╔══██║╚════██║██╔══██║██║
   ██║   ██║  ██║██║  ██╗██║  ██║███████║██║  ██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝
                                                    */
                                                   
require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

let gg = process.env.MODS;
if (!gg) {
  gg = "769649261";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://ThatOneGirlWithBigBootyAndBoobs2023:SendMeUrBoobsPic4535@cluster2023.bblquhi.mongodb.net/?retryWrites=true&w=majority"; // paste your own MongoDB url..
global.sessionId = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"mEWVUkDm64F8gfDgJLWaUa1VprFs+5KUcdVncVPhJWw="},"public":{"type":"Buffer","data":"sU28nMJWfUrcjet4UNzM0YL5nkCEn96ckOjZRDjoOmY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+Htpez3uSpT21VRgWkWFZqUWYtjEUbA0fuii3NtFC3k="},"public":{"type":"Buffer","data":"ntx0esfQ2oRY1rQqhiyRddX019IND8zoheGUoDk9mVc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OOQ/y92x/iYh9Pqwo+XTCOKv0Rk6hfSbOBDJqqEXnXE="},"public":{"type":"Buffer","data":"hP5tDsZegFinXiHIbWh0ch6fvkthMmvo8yAYs4o8Ano="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SH3u3nGUPZ9BTpq3X82+vXVTpmZ0OfgNoX0Jb2hqpGs="},"public":{"type":"Buffer","data":"VlYsvrZLl4aZ1zZnDrz1kvotRo/ejZc6F1yJH7+Y8B8="}},"signature":{"type":"Buffer","data":"wJA3jchE0Y+dACZhLhyLaa0wKIsCOQA3D0Bb///SYNQpKdcez8gVp6gfhq/dKmYCa0i4Fd5vOkLhFB1WhKftBg=="},"keyId":1},"registrationId":11,"advSecretKey":"99CRcGy3JuPpw7WWUcvZnP6B3PPmZ4VBwuxPHZkoJAc=","processedHistoryMessages":[{"key":{"remoteJid":"221769649261@s.whatsapp.net","fromMe":true,"id":"6E35B9E5BBF5CF00C36347AD4F9A8577"},"messageTimestamp":1746566976}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"b9U2n1EVRsiRlLekyvE9oQ","phoneId":"82f2cd4e-d5c6-4863-bd3e-f3cb86737177","identityId":{"type":"Buffer","data":"Ui+WmSOEsxlZNcMZADynCGwQqYk="},"registered":true,"backupToken":{"type":"Buffer","data":"3OahSApJ8LXEe+7YeYvmbv4U2Oc="},"registration":{},"pairingCode":"TK6RKSCZ","me":{"id":"221769649261:6@s.whatsapp.net","name":"【𝗡𝗼𝘀𝘁】"},"account":{"details":"CIrbiNkGEK7+6cAGGAMgACgA","accountSignatureKey":"Cg1AjHyjJICaJZH8kRudvEh7qLtNH6N/7n4RQb65uEs=","accountSignature":"yu20fZBy6ZfxNmQ6DMKLw4oIztxboy/BilJ9uVg2VgxkcdQLw95LEQWOWIV9il8cwU3MpShsoPbdKTxhnBXiBw==","deviceSignature":"5eZjp8Td86s0RggEXSgElVpGPISkKetOfanodYylF+8ctzfLDCJQWFvjs9+Nl2xrWvpbwIfznfUdao0AhEWzBg=="},"signalIdentities":[{"identifier":{"name":"221769649261:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQoNQIx8oySAmiWR/JEbnbxIe6i7TR+jf+5+EUG+ubhL"}}],"platform":"smba","lastAccountSyncTimestamp":1746566972,"myAppStateKeyId":"AAAAABn4"}";
global.prefa = process.env.PREFIX || "/";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCAYZ930Rq1EFiRNRJuSeGGrKljCnOb8-U"; // paste Your own Api Key..
global.packname = process.env.PACKNAME || `👹 𝕐𝕒𝕜𝕒ᵐᵈ`;
global.author = process.env.AUTHOR || "by: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

