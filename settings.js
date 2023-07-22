const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = true //auto block 212 (true to on, false to off)
global.autokickmorroco = true //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['989935689926'] //ur owner number
global.ownernomer = "989935689926" //ur owner number2
global.ownername = "MARK,," //ur owner name
global.ytname = "YT: sorry , try agian !" //ur yt chanel name
global.socialm = "GitHub: sorry , try agian !" //ur github or insta name
global.location = "sorry , try agian !" //ur location

//new
global.botname = " 𝚂𝙸𝚁.𝙼𝙰𝚁𝙺 𝚆𝙷𝙰𝚃𝚂𝙿𝙿 𝚄𝚂𝙴𝚁 𝙱𝙾𝚃"
global.ownernumber = '989935689926'
global.ownername = '𝗠𝗔𝗥𝗞 𝗕𝗼𝘁 𝗠𝗱 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽'
global.ownerNumber = ["989935689926@s.whatsapp.net"]
global.ownerweb = "https://chat.whatsapp.com/K4qlJgORgeyJpEM15bB6mf"
global.websitex = "https://telegra.ph/file/5f965eea22feacbd7f1a7.jpg"
global.wagc = "https://chat.whatsapp.com/K4qlJgORgeyJpEM15bB6mf"
global.themeemoji = '🪀'
global.wm = "mark Bot Inc."
global.botscript = 'sorry , try agian !' //script link
global.packname = "𝗠𝘈𝘙𝗞"
global.author = ""
global.creator = "989935689926@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("https://telegra.ph/file/5f965eea22feacbd7f1a7.jpg") //ur thumb pic
global.log0 = fs.readFileSync("https://telegra.ph/file/5f965eea22feacbd7f1a7.jpg") //ur logo pic
global.err4r = fs.readFileSync("https://telegra.ph/file/5f965eea22feacbd7f1a7.jpg" //ur error pic
global.thumb = fs.readFileSync("https://telegra.ph/file/5f965eea22feacbd7f1a7.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '𝘠𝘖𝘜 𝘋𝘙𝘐𝘝𝘌 𝘐𝘚 𝘙𝘌𝘈𝘋𝘠 𝘚𝘐𝘙..🙂
	    ℳ𝒶𝓇𝓀 ℬℴ𝓉 ℳ𝒹 ⇾ *+989935689926*', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
