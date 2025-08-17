
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcM", /ALI-MD~H4sIAAAAAAAAA62VS2/rNhbHv0rBrY3q/TIQYCRKtuVX5NiOH0UXjERJtN4SZVsuAnTXLlrgAnMxu+Jupt0VXRXo57nLrvIRCjnJNEA7mQxwtSAkkjr8ncPzP+crkGakwmPcgN5XIC/JAVHcvtImx6AHjNr3cQm6wEMUgR5wZ8tdYcjFcqBWKerEWxhNOlsGjW9Ca8nCW8820yY9+M3GvgL3XZDXdzFxXzHI6Fq+XaWNtxwjh/GHc27Pr9Ge6kdd3nNcEq+nDq2ju01kXYH71iIiJUkDKw9xgksUj3HjIFK+Db8zxYuMTsN9LffFcyeJh+rZ2S1Oau4RgYmCjXJWJoM70eamb8NPB9dWozuCUNZDVQp3MIKFO9WvbzfhnDBGMY5n01IT5QSqj/gVCVLs2R5OKaHNm+M+t2g9myl7Fq3k6Na/c1bLRquEvZhu0yO59uFolvQj4WT0rbeBU3ewp8s1zi1pG0WLI2MX9imI/Y6w8kcJy8yKw0JRmHERZC/BnfI5V6L/J+7ZMD9AtnJPsnEqmEFQSbd5eieYq5Hh2nBdn5lj1HeNqGPpb8RXjOJG0XW37x/P7LDeiXI1oUa971v1qZnBxWa4u44s29m/wEe0Ll+jNNcb3QyZ8aE8ISMyjfP2bsStvdLrL3k5Eyf1+SgyGCUzjd1I6olaabQ5lUVzMxBCh9nnhSQ7smlO9/KS0F0Tjg4FGx6vLh5FuLE90OPuu6DEAaloiSjJ0sscy3YB8g4L7JaYXsILNM1ORiRfW7k12QyD1fJwOo12IuPHsVj7R8+WdDXc+5Ihs1egC/Iyc3FVYW9IKpqVzRRXFQpwBXpfXG6qdbrESUbxiHiteU7jZEHhVEFW/1F9fgwRrVCef55iCrrAL7NkikGPljXugssPhsrybN9QeKWvQ9HQBEFQNVGWBN4SFV7nWxeTx0OXJMEVRUkOepwiSaLAKrJy3/00HKaiyBJUZV2BlmJJfUmHusZBUYZ9keU16XUORfpUHIpp8gLX1xRJ4k1BhRYLeVkVLFGVIG+ywuscGv+pOARJUgxB4lTOgCzUIFQlqJvQNHQFqqJuvMqhsvL9l12Q4hN91HWbjQLXBT4pK7pK6zzOkPcs+udF5LpZndJFk7qwfcEl6L2YxpSSNKhaz+oUlW5IDhi2foCej+IK/0cAuMTesy9PRR1mXqtLURk6owmUQMveGvpLbHqy9NfwxJdtvKJymiqqCscpGqu1O9uFLkhRaww8fHj308evv3/48P7Hzz5+/f7hwze/Pfzw7v1nDz+8+64dvm2Hf3788Ovvv/z88K9/f99G8Mm3FsXDFJG4Aj0ApyRpxMCwZmknrFaDgW4FOgx08GcsnmvOo6bzXZ7B+fVGGiwW0TpxD4doEwwLrll1fKZZOuX1wNyQkJsM7au/MdJ2XzOPJO7Wl4ec5MH+uHLMmzIcDeCgGPEJLet6hm9NEgoOFQ0bN7PFbMuc5wWfHqNJw52PmyQM8nBmHhaZPCfzeUEKXb9qT/Pwgbj45WHxaDBNR318lrhDo1zbdsrMx/l1QJqZOjWX+qrRbP/2EIeDdbC88SY8f8yzleVMN/bxRp/L4/52tZr7E88N7uKdNbdIloT6YzW8VOP4qQuSpzpFLp8+wZem8nRd//PWH8Hb5GTvuy9sPLWp/1LqDbRGSI/MuHMTRXk/TyeK1BcNmbqxkzJqdJbPYcCJmbc4NeC+VUkeI+pnZQJ6AKVemV1yqszqNtvt1M9eOQzqrG3MHz2PUUX1PxX0N8VBUh53OWWWD1EVtir3t0c4buXQ6Hm+oIg+CxLol4eo4P4PONvq1MsJAAA=/ Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "false", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.l𓃮𓆪𝑅𝐷𝛸 𝛥𝛪𝛧𝛯𝛮|| "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "x",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
