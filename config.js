const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "917029916612"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '917029916612' 
global.devs = '917029916612';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU0yZmNGeXp2a2FwNEl3bytnSTN4VFhmL3U5ZzhNZFRIdU4rTStqMGxFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm9KSEx0SDllVzBoQlhlNGFPVnBtYU5KQ1dVMjgxanhKa3EwNnZMMEJubz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSnBqWEgycCtMWkdRK0xmSjJEaVBIVTZObGlwb1dHejhZUDNCYlhkM0Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvK25IYmNGUzU5WG9sUElKVG1IRmRlcFRaUTZyLzNRWVdiSkxIMCtPUUFrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNVnA0OUxneUpTa1ZFOGVFOVJ3Um10bnZldGxtWitCZ1prT1pyVGNLV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTY3BUV1NmRzYyM016L1R3c1dOeWw1QWZ6bHVSNGE2MUpPZVNydUlJeHc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUkV4MkFvb2dVOHdEdFc1cmd2YlVqUU5yenBZOEpscUQ5RjByMXMzdnFWYm52MUtwdm96azZXY010MzVjb0dLcW5nYUhOZ0dqMHRLMDNaeGJlK2hEZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1OCwiYWR2U2VjcmV0S2V5IjoiN1k0Vi9UWVVJTkRWTUV3Y2NUZ0I2RGsvRU5Bb1Y2c0hBSFNUSjRpSWg3WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicmtMb3p4WHFRYldMWmRVZ3pVdEYwdyIsInBob25lSWQiOiI4YWRiOWY4MC0wNjNhLTQ1YmItOTViMC03NmZjM2U1ZGU4Y2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS000aFZWem9icGxPWmlmSkJxTVhpNkF0cnNrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscmtJQ0RFYlEvRWpZd3hNTDZCMWVFQm5iZ0U9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWGRtdmNHRU1Ybzhxb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRtcDlCRS9tREcrZzFWbWZ6dUFzcWxsSDRBVTBVdkdwdG1ibXVpRzN5MkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllaOU92empWeTAvUWdSM2d6RmZNY0wxbzBGMzdUMnpVOGRSbzNnbnZ6Znp6aW1vbmFseGZVRUcrbXVDVjRydmE3ZkQxVTIrS2Z4Vy9SZXhMZzhIRUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuRTZ2QnkwQjhDYURMKzFjbTd1U1ZsbW9Za1hoOGZ0S0w4dldJZGwrYnFEa0NuVEVuRGgzcjhPVTQxWjQydnN2RjgyamR6UzJQSW5TY3JFZFhCNUlCUT09In0sIm1lIjp7ImlkIjoiOTE3MDI5OTE2NjEyOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVMO2w7Ftw7Z5IEdow7bDn2gifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDI5OTE2NjEyOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTVxZlFSUDVneHZvTlZabjg3Z0xLcFpSK0FGTkZMeHFiWm01cm9odDh0ZyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMDU3NDI4MH0= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️',
  packname:  process.env.PACK_NAME || '𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️',
   
  botname:   process.env.BOT_NAME === undefined ? "𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'i am alive𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
