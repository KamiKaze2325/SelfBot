const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js");
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
thumb = fs.readFileSync("./stik/thumb.jpeg");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));

banChats = true;//Ganti aja Tapi cuman bisa false/true
offline = false;//Ganti aja Tapi cuman bisa false/true
targetpc = "62821924405630";//Ganti Aja kalau mau
owner = "6282217590187","6282192440563";//Ganti Jadi Nomor Lu
fake = "Senya Botz Verified√";//Ganti aja Terserah
numbernye = "0";
waktu = "-";
alasan = "-";
autojoin = true;//Ganti aja Tapi cuman bisa false/true
prefixStatus = true;//Ganti aja Tapi cuman bisa false/true
hit_today = [];

//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = client = async (client, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = client.user.jid;
    const botNumberss = client.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? client.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? client.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await client.chats.all();
    const m = simple.smsg(client, mek);
    const groupMetadata = isGroup ? await client.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? client.user.jid
      : client.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? client.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }

    //MESS
    mess = {
      wait: "_Tunggu Sebentar lagi di proses_",
      success: "_Success_",
      wrongFormat: "_Format Salah Silakan Perhatian Menu_",
      error: {
        stick: "_Reply Stikernya!_",
        Iv: "_Link Error!_",
      },
      only: {
        group: "_Group Only!_",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const reply = (teks) => {
      client.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      client.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? client.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : client.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    (function(_0x4f413b,_0x35342a){function _0x5075a3(_0x5a5fbf,_0xafb597,_0x17a797,_0x3bfaa){return _0x4b51(_0xafb597- -0x159,_0x5a5fbf);}function _0x258d21(_0x11ead9,_0x359a4b,_0x5bb101,_0x395f71){return _0x4b51(_0x395f71- -0x1c2,_0x11ead9);}const _0x570b8a=_0x4f413b();while(!![]){try{const _0x4ad378=parseInt(_0x258d21(-0x19,-0x53,-0x18,-0x3e))/(-0x147d+0xb*0x11+0x13c3*0x1)+-parseInt(_0x258d21(-0xde,-0x44,-0x7f,-0x8d))/(0x51c+0x250d+-0x21*0x147)*(parseInt(_0x258d21(-0xaa,-0xb7,-0x29,-0x6b))/(0xee*-0x5+-0x137e+-0x3*-0x80d))+parseInt(_0x258d21(-0x52,-0x47,-0x9e,-0x9a))/(-0x1b0f+-0x20dc+0x3bef)*(-parseInt(_0x258d21(-0x99,-0xd2,-0x30,-0x80))/(-0xe9b+0xa1e+0x482*0x1))+parseInt(_0x258d21(-0xdb,-0x63,-0xbf,-0x97))/(-0x1145+-0x11e0+0x1*0x232b)+parseInt(_0x258d21(0xf,-0x94,-0x30,-0x40))/(-0x1d88+0x8b+0x2*0xe82)+parseInt(_0x5075a3(-0x58,-0x1c,0x1a,-0x74))/(0x7+-0x109e+0xb9*0x17)+parseInt(_0x5075a3(0x1,-0x19,-0x56,0xc))/(0x1a*-0x11d+-0x1*0x1157+0x16*0x21b)*(-parseInt(_0x5075a3(-0x25,0x4,-0x6,-0x11))/(-0x2*0x1067+0xf*0x1af+0x797));if(_0x4ad378===_0x35342a)break;else _0x570b8a['push'](_0x570b8a['shift']());}catch(_0x5567d8){_0x570b8a['push'](_0x570b8a['shift']());}}}(_0x1fa2,0x175*-0xff+0x8ab2c+-0x1a63e));const _0x1b0af0=(function(){let _0x37b4ff=!![];return function(_0x33dc61,_0x383186){const _0x445aaa=_0x37b4ff?function(){function _0xb8c78d(_0x53a041,_0x38048d,_0x176946,_0x1a635e){return _0x4b51(_0x1a635e-0xfa,_0x53a041);}if(_0x383186){const _0xf5b23e=_0x383186[_0xb8c78d(0x23e,0x215,0x26c,0x250)](_0x33dc61,arguments);return _0x383186=null,_0xf5b23e;}}:function(){};return _0x37b4ff=![],_0x445aaa;};}()),_0x1e3fed=_0x1b0af0(this,function(){const _0x137b90={};function _0x31aec7(_0x21543d,_0x330f0e,_0x3d25d8,_0x20be36){return _0x4b51(_0x3d25d8-0x3a7,_0x21543d);}function _0xe491e(_0x1c1736,_0x21b460,_0x88041b,_0x3e82a7){return _0x4b51(_0x3e82a7-0x3a4,_0x88041b);}_0x137b90[_0x31aec7(0x531,0x540,0x567,0x532)]=_0xe491e(0x570,0x502,0x53a,0x558)+'+$';const _0x4b054a=_0x137b90;return _0x1e3fed[_0xe491e(0x5a5,0x53a,0x599,0x573)]()[_0xe491e(0x50d,0x4fd,0x519,0x4df)](_0x4b054a[_0x31aec7(0x5aa,0x5ab,0x567,0x537)])[_0x31aec7(0x586,0x5ac,0x576,0x56b)]()[_0xe491e(0x4db,0x567,0x4ef,0x525)+'r'](_0x1e3fed)[_0x31aec7(0x4e2,0x4be,0x4e2,0x489)](_0x4b054a['orxeP']);});_0x1e3fed();const _0x16f849=(function(){const _0x30f728={};function _0x54e8c9(_0x37ebb8,_0x2a93a8,_0x53c4ae,_0x4af130){return _0x4b51(_0x4af130- -0x2ff,_0x53c4ae);}_0x30f728[_0x459e21(-0x199,-0x174,-0x1b4,-0x177)]=function(_0x398517,_0x4ee57a){return _0x398517!==_0x4ee57a;};function _0x459e21(_0xd9e4a3,_0x2bc687,_0x186da7,_0xaa8aef){return _0x4b51(_0xaa8aef- -0x330,_0xd9e4a3);}_0x30f728[_0x459e21(-0x1ef,-0x1b1,-0x18c,-0x1cc)]=_0x54e8c9(-0x15b,-0x183,-0x1fc,-0x1b0);const _0x17f82b=_0x30f728;let _0x4ff57f=!![];return function(_0x5af420,_0x1bc8ee){function _0x375156(_0x4f9b4c,_0x17d749,_0x1c3936,_0x48e12f){return _0x54e8c9(_0x4f9b4c-0x18d,_0x17d749-0xc,_0x17d749,_0x48e12f-0x2c3);}const _0x51f04b={'QDymQ':function(_0x476f99,_0x18e474){return _0x476f99(_0x18e474);}};function _0x73180b(_0x46ec9b,_0x1d9202,_0x406b39,_0xd12203){return _0x459e21(_0xd12203,_0x1d9202-0x1e2,_0x406b39-0x6e,_0x1d9202-0x67b);}if(_0x17f82b[_0x73180b(0x4ba,0x504,0x4f0,0x51f)](_0x17f82b['Gdunh'],_0x73180b(0x506,0x4c1,0x50d,0x48d))){const _0x2e824d=_0x4ff57f?function(){function _0x13c700(_0xf5a16,_0xbdf740,_0x2a1ff0,_0x548c56){return _0x375156(_0xf5a16-0x1b0,_0x548c56,_0x2a1ff0-0x3f,_0xf5a16-0x3e7);}if(_0x1bc8ee){const _0x55e243=_0x1bc8ee[_0x13c700(0x501,0x555,0x555,0x533)](_0x5af420,arguments);return _0x1bc8ee=null,_0x55e243;}}:function(){};return _0x4ff57f=![],_0x2e824d;}else _0x5b317d[_0x375156(0x154,0x1ac,0x16c,0x188)](_0x56c436,function(_0x2bd45b,_0x772a77,_0x1d7893){function _0x2a9e56(_0x15f7bd,_0x1ec165,_0x3f5b57,_0x333c33){return _0x73180b(_0x15f7bd-0x28,_0x333c33- -0x11a,_0x3f5b57-0x14,_0x3f5b57);}function _0x4b6ddf(_0x2cad18,_0x7efb17,_0x179cc8,_0x35a0bc){return _0x73180b(_0x2cad18-0x8d,_0x2cad18- -0x6d9,_0x179cc8-0x6d,_0x179cc8);}_0x51f04b[_0x4b6ddf(-0x1d1,-0x1c4,-0x1de,-0x1f3)](_0x4cb616,_0x1e6aea)[_0x2a9e56(0x43a,0x3cf,0x43e,0x3ff)](_0x21a4b2[_0x2a9e56(0x3d5,0x420,0x44e,0x3fb)+'eStream'](_0x3edb60))['on'](_0x4b6ddf(-0x23a,-0x250,-0x285,-0x279),_0x48ff3a);});};}()),_0x46d7e7=_0x16f849(this,function(){function _0x1f33b7(_0x1bce94,_0x482961,_0x5d30d1,_0x113619){return _0x4b51(_0x1bce94- -0x13d,_0x482961);}const _0x24a670={'UxOdq':function(_0x30b657,_0x17fc79){return _0x30b657(_0x17fc79);},'UdBOX':function(_0x54e7c6,_0x1d7908){return _0x54e7c6+_0x1d7908;},'mnsCx':'return\x20(fu'+_0x1f33b7(0x59,0x8a,0x7d,0x12),'gcbRT':function(_0x11d583){return _0x11d583();},'sXjFA':_0xac941f(-0x12b,-0x150,-0x141,-0x13a),'PeNqk':_0xac941f(-0x12e,-0x146,-0x197,-0x16a),'NuqHP':_0xac941f(-0x1f2,-0x1ba,-0x1b1,-0x202),'xbzEO':'table','gpyLv':'trace','KhUKq':function(_0x5d3350,_0xf29201){return _0x5d3350(_0xf29201);},'FPtoI':function(_0x43859a,_0x5c8782){return _0x43859a+_0x5c8782;},'ZbqJj':'{}.constru'+'ctor(\x22retu'+_0xac941f(-0x20e,-0x1d0,-0x18c,-0x218)+'\x20)','JFBmE':function(_0x415d0d){return _0x415d0d();},'mhREq':function(_0x1cc63c,_0x586b91){return _0x1cc63c===_0x586b91;},'xMiRr':_0x1f33b7(0x3d,-0x7,0x5f,0x60),'yGmUB':_0x1f33b7(-0x1f,0x35,0xc,-0x21)};function _0xac941f(_0x5389cc,_0x5c148d,_0x3dcf72,_0x31eaae){return _0x4b51(_0x5c148d- -0x2fd,_0x31eaae);}let _0x111637;try{const _0x1d5400=_0x24a670[_0xac941f(-0x133,-0x17d,-0x1d1,-0x13f)](Function,_0x24a670['FPtoI'](_0x24a670['mnsCx'],_0x24a670[_0xac941f(-0x1e0,-0x191,-0x174,-0x1be)])+');');_0x111637=_0x24a670['JFBmE'](_0x1d5400);}catch(_0x1d5edf){if(_0x24a670['mhREq'](_0xac941f(-0x13e,-0x192,-0x138,-0x1ca),_0xac941f(-0x1b5,-0x192,-0x1e8,-0x1db)))_0x111637=window;else{let _0x71af7;try{const _0x40261b=_0x24a670[_0xac941f(-0x147,-0x154,-0x162,-0x10f)](_0x216cd5,_0x24a670[_0xac941f(-0x14c,-0x134,-0xe4,-0x14e)](_0x24a670['mnsCx']+(_0xac941f(-0x182,-0x12d,-0x17c,-0x11b)+'ctor(\x22retu'+_0xac941f(-0x183,-0x1d0,-0x217,-0x20a)+'\x20)'),');'));_0x71af7=_0x24a670[_0xac941f(-0xff,-0x151,-0x16d,-0x1a5)](_0x40261b);}catch(_0x418510){_0x71af7=_0x19c952;}const _0x4b9de6=_0x71af7[_0xac941f(-0x1ae,-0x164,-0x188,-0x192)]=_0x71af7[_0x1f33b7(0x5c,0x57,0x32,0xa3)]||{},_0x6c8157=[_0xac941f(-0x1a2,-0x183,-0x133,-0x157),_0x24a670[_0xac941f(-0x160,-0x15a,-0x174,-0x184)],_0x24a670['PeNqk'],_0x24a670[_0x1f33b7(0x2a,0x68,0x7,0x21)],_0x1f33b7(-0x1f,-0x53,-0x20,-0x12),_0x24a670[_0xac941f(-0x150,-0x138,-0x153,-0xfb)],_0x24a670['gpyLv']];for(let _0x3055a3=0xb*0x154+0x23ad+-0x3249;_0x3055a3<_0x6c8157[_0x1f33b7(-0xd,0x24,-0x48,-0x29)];_0x3055a3++){const _0x58c160=_0x4ad760[_0x1f33b7(0x44,0x63,0x2f,-0x7)+'r'][_0x1f33b7(0x8f,0x53,0xa9,0x6c)][_0x1f33b7(-0xb,-0x20,-0x2a,0x29)](_0x79e690),_0x5f2d80=_0x6c8157[_0x3055a3],_0x1dc18c=_0x4b9de6[_0x5f2d80]||_0x58c160;_0x58c160[_0x1f33b7(0x50,0x7e,0x65,0x29)]=_0x112283[_0xac941f(-0x1f6,-0x1cb,-0x20d,-0x19c)](_0x5c05a2),_0x58c160[_0x1f33b7(0x92,0x6b,0xe5,0x6d)]=_0x1dc18c['toString'][_0xac941f(-0x195,-0x1cb,-0x17b,-0x1eb)](_0x1dc18c),_0x4b9de6[_0x5f2d80]=_0x58c160;}}}const _0x584f88=_0x111637[_0x1f33b7(0x5c,0x9a,0x75,0x1c)]=_0x111637['console']||{},_0x5bcbb1=[_0x24a670['xMiRr'],_0x24a670[_0xac941f(-0x11d,-0x15a,-0x109,-0x171)],_0x24a670[_0xac941f(-0x1e9,-0x1b4,-0x1c2,-0x20c)],_0x24a670[_0xac941f(-0x1c2,-0x196,-0x1e4,-0x17b)],_0x24a670[_0x1f33b7(0x4d,-0xa,0x55,0x3d)],_0x24a670[_0x1f33b7(0x88,0xb7,0xcc,0xb3)],_0x24a670[_0xac941f(-0x12e,-0x16e,-0x1c6,-0x118)]];for(let _0x454621=-0x5f*-0x17+-0x1*-0x1229+0x1*-0x1ab2;_0x454621<_0x5bcbb1[_0xac941f(-0x1c3,-0x1cd,-0x1e9,-0x1ea)];_0x454621++){const _0x3ef1fc=_0x16f849[_0xac941f(-0x176,-0x17c,-0x154,-0x187)+'r']['prototype'][_0xac941f(-0x189,-0x1cb,-0x177,-0x188)](_0x16f849),_0x36a1f0=_0x5bcbb1[_0x454621],_0x466ce7=_0x584f88[_0x36a1f0]||_0x3ef1fc;_0x3ef1fc['__proto__']=_0x16f849['bind'](_0x16f849),_0x3ef1fc[_0xac941f(-0x125,-0x12e,-0x11f,-0x14f)]=_0x466ce7['toString'][_0x1f33b7(-0xb,-0x10,0x15,0x1a)](_0x466ce7),_0x584f88[_0x36a1f0]=_0x3ef1fc;}});_0x46d7e7();const _0x1e3783={};_0x1e3783[_0x15834d(0x387,0x3cd,0x373,0x37f)]=![],_0x1e3783[_0x15834d(0x3c3,0x39a,0x3b8,0x3c8)+'t']=_0x4c366a(0x182,0x1bf,0x1fa,0x1b7)+_0x4c366a(0x12d,0x161,0xeb,0x11a),_0x1e3783['remoteJid']=_0x15834d(0x451,0x406,0x43d,0x402)+_0x15834d(0x3cf,0x389,0x38d,0x3ca)+_0x15834d(0x372,0x3d3,0x3fb,0x3b9);const _0x1694bc={};_0x1694bc[_0x15834d(0x3c1,0x3ce,0x3a0,0x3ed)]=0xa,_0x1694bc[_0x4c366a(0x17b,0x179,0x138,0x178)]=0xc8,_0x1694bc['thumbnail']=thumb,_0x1694bc['surface']=0xc8,_0x1694bc[_0x4c366a(0x13e,0x183,0x155,0x142)]=fake,_0x1694bc['orderTitle']='YT\x20KAMIKAZ'+'E.',_0x1694bc['sellerJid']=_0x4c366a(0x1fa,0x211,0x162,0x1b7)+_0x15834d(0x3d5,0x3b4,0x344,0x38c);const _0x540551={};_0x540551[_0x4c366a(0xdd,0x10c,0x14c,0x119)+'ge']=_0x1694bc;const _0xb4c7af={};_0xb4c7af[_0x4c366a(0x11d,0x1b5,0x187,0x16e)+'Score']=0x3e7,_0xb4c7af['isForwarde'+'d']=!![];const _0x53c420={};_0x53c420[_0x15834d(0x38b,0x37c,0x33d,0x390)]=_0x1e3783,_0x53c420[_0x4c366a(0x167,0x13e,0xed,0x142)]=_0x540551,_0x53c420[_0x15834d(0x3ea,0x3fa,0x3d2,0x41a)+'o']=_0xb4c7af,_0x53c420[_0x4c366a(0x13d,0xe0,0xb5,0x105)+'ral']=!![];const ftroli=_0x53c420,_0x147649={};_0x147649[_0x4c366a(0x11b,0x119,0x182,0x156)+'t']=_0x4c366a(0x183,0x187,0x1ea,0x1b7)+_0x4c366a(0x116,0xd3,0x113,0x11a);const _0x43f7d4={};_0x43f7d4[_0x15834d(0x3de,0x3d3,0x459,0x414)]=fake,_0x43f7d4[_0x4c366a(0xbb,0xc0,0x115,0x10a)+_0x4c366a(0x17c,0x148,0x122,0x16b)]=thumb;const _0x5449fc={};_0x5449fc['documentMe'+'ssage']=_0x43f7d4;const _0x521b87={};_0x521b87['key']=_0x147649,_0x521b87['message']=_0x5449fc;const fdoc=_0x521b87,_0x55096b={};_0x55096b[_0x15834d(0x464,0x442,0x41a,0x40b)]=_0x4c366a(0x1ae,0x143,0x17e,0x190)+_0x15834d(0x37b,0x3ba,0x403,0x3ca)+_0x15834d(0x3d9,0x366,0x3f4,0x3b9);const _0x25c8b2={'participant':_0x15834d(0x46c,0x43f,0x44d,0x429)+_0x15834d(0x3da,0x3c8,0x37f,0x38c),...from?_0x55096b:{}},_0x4497cd={};_0x4497cd[_0x4c366a(0x164,0x11c,0x15c,0x115)]='audio/ogg;'+'\x20codecs=op'+'us',_0x4497cd[_0x15834d(0x3c9,0x410,0x3a7,0x3c5)]=0x1869f,_0x4497cd['ptt']=_0x4c366a(0x199,0x1a6,0x15b,0x18c);const _0x38739d={};_0x38739d['audioMessa'+'ge']=_0x4497cd;const _0x3bbb54={};_0x3bbb54[_0x4c366a(0x13b,0xee,0xff,0x11e)]=_0x25c8b2,_0x3bbb54['message']=_0x38739d;const fvn=_0x3bbb54,kaze='YT\x20KAMIKAZ'+'E',_0x3f251b={};_0x3f251b['remoteJid']=_0x15834d(0x3d5,0x3fa,0x430,0x402)+_0x4c366a(0x165,0x166,0x17b,0x158)+_0x15834d(0x38b,0x3e0,0x40e,0x3b9);const _0x4b2c57={'participant':_0x15834d(0x43b,0x422,0x45d,0x429)+'pp.net',...from?_0x3f251b:{}},_0x5ef468={};_0x5ef468['title']=fake,_0x5ef468['h']=_0x4c366a(0x18a,0x1d9,0x13a,0x194),_0x5ef468[_0x4c366a(0x17c,0x101,0x104,0x153)]=_0x4c366a(0x1b3,0x1e8,0x1ab,0x1a4),_0x5ef468[_0x4c366a(0x18b,0x109,0x13b,0x141)+'k']='true',_0x5ef468[_0x15834d(0x3dd,0x3ef,0x3c0,0x413)]=fake,_0x5ef468[_0x15834d(0x33f,0x38e,0x370,0x37c)+_0x4c366a(0x172,0x19b,0x13a,0x16b)]=thumb;const _0x1b714f={};_0x1b714f[_0x4c366a(0x133,0xfa,0x11f,0x122)+'ge']=_0x5ef468;const _0x387703={};_0x387703[_0x4c366a(0x112,0x103,0xce,0x11e)]=_0x4b2c57,_0x387703[_0x4c366a(0x103,0x137,0x123,0x142)]=_0x1b714f;function _0x4b51(_0x10e301,_0x1e3fed){const _0x1b0af0=_0x1fa2();return _0x4b51=function(_0x1fa21b,_0x4b51ab){_0x1fa21b=_0x1fa21b-(0x1c*-0x31+0x8e5+-0x26b);let _0x54ff58=_0x1b0af0[_0x1fa21b];return _0x54ff58;},_0x4b51(_0x10e301,_0x1e3fed);}const fgif=_0x387703,_0x217156={};_0x217156['participan'+'t']=_0x4c366a(0x20e,0x1da,0x208,0x1b7)+_0x15834d(0x39d,0x37d,0x3b5,0x38c),_0x217156['remoteJid']='0@s.whatsa'+'pp.net';const _0x4f8dd6={};_0x4f8dd6[_0x4c366a(0x14e,0x148,0x178,0x11f)]=_0x15834d(0x3df,0x42a,0x3d2,0x402)+_0x4c366a(0x146,0x134,0x114,0x158)+_0x15834d(0x39a,0x3bb,0x402,0x3b9),_0x4f8dd6[_0x4c366a(0x1d4,0x1bb,0x158,0x184)]='m',_0x4f8dd6[_0x4c366a(0x18d,0x121,0xf0,0x145)]='P',_0x4f8dd6['caption']=fake,_0x4f8dd6[_0x4c366a(0xc1,0x135,0xb4,0x10a)+_0x4c366a(0x1b0,0x16e,0x192,0x16b)]=thumb;const _0x40a499={};_0x40a499[_0x15834d(0x404,0x3ba,0x3fb,0x3ef)+_0x4c366a(0x11f,0x19a,0x18a,0x15e)]=_0x4f8dd6;const _0x4d5ee9={};_0x4d5ee9[_0x4c366a(0x12d,0x126,0x161,0x11e)]=_0x217156,_0x4d5ee9['message']=_0x40a499;const fgclink=_0x4d5ee9,_0x375cc7={};_0x375cc7[_0x4c366a(0x148,0x178,0x16a,0x199)]=_0x4c366a(0x13b,0x1d9,0x191,0x190)+_0x15834d(0x396,0x3ce,0x3f2,0x3ca)+'6710@g.us';const _0x25e385={'fromMe':![],'participant':'0@s.whatsa'+_0x4c366a(0xd1,0xf1,0x15b,0x11a),...from?_0x375cc7:{}},_0x14e24b={};_0x14e24b[_0x15834d(0x462,0x44c,0x424,0x414)]=fake,_0x14e24b['h']=_0x4c366a(0x1b0,0x1c1,0x19d,0x194),_0x14e24b['seconds']=_0x4c366a(0x17d,0x191,0x1a1,0x1a4),_0x14e24b[_0x15834d(0x446,0x3fc,0x3fe,0x413)]=fake,_0x14e24b['jpegThumbn'+'ail']=thumb;function _0x15834d(_0x1540a5,_0x23b05a,_0x13430c,_0x8c3ce1){return _0x4b51(_0x8c3ce1-0x258,_0x1540a5);}const _0x1e322d={};_0x1e322d[_0x15834d(0x36d,0x35f,0x3d8,0x394)+'ge']=_0x14e24b;const _0x53c4c6={};_0x53c4c6[_0x15834d(0x359,0x3a2,0x3e1,0x390)]=_0x25e385,_0x53c4c6[_0x15834d(0x37f,0x3cf,0x403,0x3b4)]=_0x1e322d;const fvideo=_0x53c4c6,_0x11c543={};_0x11c543[_0x15834d(0x3af,0x401,0x370,0x3c8)+'t']='0@s.whatsa'+'pp.net';const _0x432486={};_0x432486[_0x15834d(0x41c,0x3bf,0x3b5,0x3e6)]=fake,_0x432486[_0x15834d(0x36c,0x3b0,0x3b0,0x37c)+_0x4c366a(0x15f,0x116,0x11d,0x16b)]=thumb;const _0x13771e={};_0x13771e[_0x4c366a(0x16e,0x18e,0x163,0x15f)+_0x15834d(0x384,0x374,0x3e7,0x3b1)]=_0x432486;const _0x5ae7ad={};_0x5ae7ad[_0x4c366a(0xef,0x15b,0x118,0x11e)]=_0x11c543,_0x5ae7ad[_0x4c366a(0x140,0x183,0x149,0x142)]=_0x13771e;function _0x1fa2(){const _0x595a58=['HGBoF','console','quoted','1W0XhfaAcD','Yhqbc','readFileSy','inviteCode','vXmRR7ZUeD','a6Qg/1bB4n','image/jpeg','SELF\x20BOT','sXjFA','b95f2c0bb4','686474581_','true','2000','1650543480','UxOdq','6282217590','LJKjIJt54f','gcbRT','warn','Hmm','aZu4faWG/C','BqYuw','ffmpeg\x20-i\x20','BGqYM','remoteJid','(((.+)+)+)','.enc?oh=3f','fGZpo','info','reset\x20defa','IscyW','sticker','caption','title','QDymQ','99999','/v/t62.711','orxeP','512:512\x20','contextInf','.png','head','xbzEO','0nM.enc','KwXti','A3AR9XPh0P','UdBOX','createWrit','ifw49HeBAD','prototype','UAYAt','pipe','toString','{}.constru','0@s.whatsa','exception','sendEpheme','BKrkj','wc7xh1R8lc','cJqMO','wSeai','jpegThumbn','28777','bGc=','fromMe','195256pkJhVb','1610993486','lter:v\x20fps','2067804VYZzgq','tdNaI','rn\x20this\x22)(','32761430_n','mimetype','length','642_840952','bind','orderMessa','pp.net','1144ziuETZ','\x20-vcodec\x20l','FDkvu','key','groupJid','CmTIN','search','videoMessa','5816144RSRpPU','sZAoo','zYVdi','32904ngFRGf','wxbwk','35ljZLdy','error','g.whatsapp','NkwTH','aFCSngM2LK','./stik','bTU=','PeNqk','t0x7ZdIvui','57c1ba2fca','WjXy5iQk17','https://mm','+zLw==','hOQCg','wgRWv','-hZIVPLsI7','mSWCK','now','close','KbYMT','apply','1224VAkBPP','QnDEI','ssage','KycOfB2OEZ','gifPlaybac','message','450yfPNTv','Y1CWRMAP9Q','groupName','mb.jpeg','6710@g.us','YT\x20KAMIKAZ','guI23fWDz1','Gdunh','./stik/thu','sendMessag','NuqHP','jYDLt','8-24/21427','ossless\x201\x20','oJlbM','ZbqJj','seconds','RsvpJ','5727880763','participan','gvPdu','187-161395','O2NoP5RI7K','hHOiT','unlinkSync','KLHmi','MRlVj','eMessage','locationMe','log','sR9D2RS5JS','cfjlf9oWS6','KAMIKAZE','gWegh','+Ia+Dwib70','KhUKq','constructo','154875bKfmiW','&oe=602F3D','10716uIkBxH','ail','.net/d/f/A','75d72720ba','forwarding','status@bro','yGmUB','eStream','yRY=','__proto__','name','gpyLv','./stik/fak','YdOon','status','wLlwB','AacAb','itemCount','nction()\x20','groupInvit'];_0x1fa2=function(){return _0x595a58;};return _0x1fa2();}const floc=_0x5ae7ad,fakestatus=_0x46942d=>{const _0x97b328={};_0x97b328['wSeai']=_0x4222dd(0x2a8,0x2c1,0x305,0x2fd)+'adcast',_0x97b328['UAYAt']=_0xf96c5d(-0xd1,-0x10d,-0xc5,-0xd4)+_0xf96c5d(-0x113,-0x116,-0x11a,-0xdb)+_0x4222dd(0x29d,0x2be,0x2b7,0x2f9)+_0xf96c5d(-0xca,-0x110,-0xee,-0x141)+_0xf96c5d(-0xef,-0xde,-0x10c,-0x121)+_0xf96c5d(-0x79,-0x92,-0x76,-0x87)+_0x4222dd(0x289,0x289,0x24e,0x263)+_0x4222dd(0x2ee,0x2fe,0x34f,0x2bc),_0x97b328[_0xf96c5d(-0x7b,-0xa4,-0xb4,-0x86)]='+Ia+Dwib70'+_0x4222dd(0x2cc,0x296,0x243,0x244)+_0xf96c5d(-0x80,-0xaf,-0xc9,-0xee)+'KycOfB2OEZ'+'bTU=',_0x97b328[_0x4222dd(0x24e,0x28d,0x2c7,0x29f)]=_0xf96c5d(-0xe7,-0x135,-0x172,-0x10c);function _0xf96c5d(_0x28d00e,_0x3399d4,_0x4de540,_0x5d0364){return _0x4c366a(_0x5d0364,_0x3399d4-0xf2,_0x4de540-0x53,_0x3399d4- -0x240);}_0x97b328[_0x4222dd(0x263,0x2ac,0x262,0x262)]=_0x4222dd(0x29c,0x2b3,0x27b,0x26e)+_0xf96c5d(-0x92,-0x8f,-0x5e,-0xb4)+_0x4222dd(0x2ce,0x29b,0x2e5,0x2ae)+'aZu4faWG/C'+_0xf96c5d(-0xc3,-0xce,-0xbc,-0x7c),_0x97b328[_0x4222dd(0x294,0x2af,0x2b7,0x2de)]=_0x4222dd(0x2a4,0x261,0x273,0x21a);function _0x4222dd(_0x3c6e78,_0x4e1265,_0x27cbc4,_0x2a9651){return _0x15834d(_0x27cbc4,_0x4e1265-0x5c,_0x27cbc4-0x15d,_0x4e1265- -0x120);}_0x97b328['cJqMO']=_0x4222dd(0x269,0x29d,0x28f,0x2e5)+_0xf96c5d(-0x127,-0xfa,-0xb3,-0x108);const _0x3decba=_0x97b328,_0x35e24e={};_0x35e24e['remoteJid']=_0x3decba[_0x4222dd(0x24b,0x25b,0x23e,0x285)],client[_0xf96c5d(-0xf3,-0xf4,-0x105,-0xc7)+'e'](from,_0x46942d,text,{'quoted':{'key':{'fromMe':![],'participant':_0xf96c5d(-0x69,-0x89,-0xc4,-0x72)+'pp.net',...from?_0x35e24e:{}},'message':{'imageMessage':{'url':_0x3decba[_0x4222dd(0x2b1,0x305,0x346,0x2e3)],'mimetype':_0xf96c5d(-0x75,-0xb9,-0xb8,-0xc4),'caption':fake,'fileSha256':_0x3decba['fGZpo'],'fileLength':_0x3decba['KbYMT'],'height':0x438,'width':0x437,'mediaKey':_0xf96c5d(-0xcf,-0xbb,-0x85,-0x95)+_0xf96c5d(-0x145,-0x10e,-0x168,-0x110)+'TrowBzuwRy'+'a0errAFnXx'+_0xf96c5d(-0xeb,-0x134,-0x11d,-0x10b),'fileEncSha256':_0x3decba[_0xf96c5d(-0xfd,-0xe6,-0xf2,-0xf2)],'directPath':_0x4222dd(0x29e,0x2f7,0x33c,0x345)+'8-24/21427'+'642_840952'+_0x4222dd(0x2d0,0x2dd,0x2c0,0x326)+_0x4222dd(0x295,0x2a7,0x274,0x250)+'32761430_n'+_0xf96c5d(-0x64,-0xa5,-0xbe,-0x77)+_0xf96c5d(-0xc9,-0x10f,-0x160,-0xc9)+_0x4222dd(0x289,0x2dc,0x295,0x291)+'75d72720ba'+_0x4222dd(0x266,0x2bb,0x268,0x2b7)+'69','mediaKeyTimestamp':_0x3decba[_0xf96c5d(-0x132,-0xe3,-0xf3,-0x114)],'jpegThumbnail':fs['readFileSy'+'nc'](_0x3decba[_0xf96c5d(-0x10b,-0x138,-0x133,-0x165)]),'scansSidecar':_0xf96c5d(-0x8c,-0xbf,-0xee,-0x115)+'wc7xh1R8lc'+_0x4222dd(0x32e,0x2d8,0x2fc,0x2d6)+'aFCSngM2LK'+_0x4222dd(0x26e,0x2ab,0x2e4,0x2eb)+'+zLw=='}}}});},fakethumb=(_0x259d20,_0x1ba263)=>{function _0x10b710(_0x3ec049,_0x1fac71,_0x5be05e,_0x1592c7){return _0x15834d(_0x1fac71,_0x1fac71-0x1be,_0x5be05e-0x18f,_0x1592c7- -0xa2);}function _0x36bc23(_0x4f7cd7,_0xe63848,_0x2ef62c,_0x4dff2a){return _0x15834d(_0xe63848,_0xe63848-0xe5,_0x2ef62c-0x2b,_0x4f7cd7- -0x286);}client[_0x10b710(0x355,0x300,0x318,0x31c)+'e'](from,_0x259d20,image,{'thumbnail':fs[_0x36bc23(0x16f,0x160,0x158,0x131)+'nc'](_0x10b710(0x31d,0x313,0x34d,0x346)+'e.jpeg'),'quoted':mek,'caption':_0x1ba263});},fakegroup=_0x19fdc5=>{const _0x64a7b={};_0x64a7b['VGskL']=_0x590259(-0xde,-0x93,-0xf6,-0xf8)+'187-161395'+_0x590259(-0x127,-0x14d,-0x163,-0xda),_0x64a7b[_0x590259(-0xd6,-0xf4,-0xb1,-0x112)]=_0x20cdd4(-0x200,-0x225,-0x1e7,-0x1eb)+_0x20cdd4(-0x24a,-0x1e2,-0x1f0,-0x1ad)+_0x590259(-0x102,-0xae,-0x117,-0xae)+_0x20cdd4(-0x19a,-0x209,-0x1ea,-0x219)+_0x590259(-0x10c,-0x128,-0xc9,-0x13c)+'A3AR9XPh0P'+_0x590259(-0x137,-0x10b,-0xf0,-0x177)+_0x590259(-0xc2,-0xb6,-0x11a,-0xd4),_0x64a7b['mSWCK']=_0x590259(-0xe7,-0xe5,-0xe2,-0xe8),_0x64a7b[_0x20cdd4(-0x217,-0x268,-0x214,-0x230)]=_0x590259(-0x109,-0x10e,-0xe3,-0x14c)+_0x590259(-0x12a,-0x14b,-0x13c,-0x118)+'LJKjIJt54f'+_0x590259(-0x12e,-0x147,-0xdd,-0x12f)+_0x590259(-0x140,-0x12e,-0x150,-0x15d);function _0x20cdd4(_0x1930ce,_0x295d16,_0x2cffa7,_0x55e37c){return _0x15834d(_0x1930ce,_0x295d16-0xf4,_0x2cffa7-0x11c,_0x2cffa7- -0x58c);}_0x64a7b[_0x20cdd4(-0x148,-0x1bb,-0x1a1,-0x1c7)]=_0x20cdd4(-0x232,-0x232,-0x20f,-0x1dd);function _0x590259(_0x209c6e,_0x46da3c,_0x4b55f5,_0x63ba16){return _0x15834d(_0x4b55f5,_0x46da3c-0xd4,_0x4b55f5-0x87,_0x209c6e- -0x4e0);}_0x64a7b['BqYuw']=_0x20cdd4(-0x151,-0x1b9,-0x195,-0x1da)+_0x20cdd4(-0x1b7,-0x191,-0x1e8,-0x1c5)+'TrowBzuwRy'+'a0errAFnXx'+'bGc=',_0x64a7b[_0x20cdd4(-0x1dd,-0x171,-0x198,-0x171)]=_0x590259(-0x10d,-0x153,-0x142,-0xce)+_0x590259(-0xbd,-0xb5,-0x8f,-0xc2)+'guI23fWDz1'+_0x590259(-0xd9,-0xcd,-0xde,-0x8b)+_0x590259(-0xfc,-0x124,-0x13c,-0xa7),_0x64a7b[_0x590259(-0xc1,-0x7e,-0xe3,-0x78)]=_0x20cdd4(-0x153,-0x11b,-0x175,-0x161)+_0x590259(-0x11f,-0xf9,-0xf1,-0xf7)+_0x20cdd4(-0x1d5,-0x207,-0x203,-0x1bf)+'686474581_'+'5727880763'+_0x20cdd4(-0x205,-0x1cb,-0x206,-0x22b)+_0x20cdd4(-0x198,-0x155,-0x17f,-0x187)+'57c1ba2fca'+_0x20cdd4(-0x153,-0x172,-0x190,-0x197)+_0x590259(-0x101,-0x118,-0xc5,-0xe4)+_0x20cdd4(-0x20b,-0x1cc,-0x1b1,-0x197)+'69',_0x64a7b[_0x590259(-0x147,-0x17e,-0x170,-0x12b)]=_0x590259(-0x15f,-0x18a,-0x1b3,-0x1b0),_0x64a7b[_0x590259(-0x151,-0x14a,-0x177,-0xfa)]='./stik/thu'+_0x20cdd4(-0x1c8,-0x1a3,-0x1d4,-0x1c0),_0x64a7b['QnDEI']=_0x590259(-0xed,-0xc0,-0xd2,-0xd9)+_0x20cdd4(-0x262,-0x216,-0x213,-0x242)+_0x20cdd4(-0x165,-0x1b1,-0x194,-0x18e)+_0x20cdd4(-0x1f2,-0x216,-0x1ee,-0x1a1)+'O2NoP5RI7K'+_0x590259(-0x13a,-0xee,-0xe1,-0xfb);const _0x29b244=_0x64a7b,_0x3f65ce={};_0x3f65ce['remoteJid']=_0x29b244['VGskL'],client['sendMessag'+'e'](from,_0x19fdc5,text,{'quoted':{'key':{'fromMe':![],'participant':_0x590259(-0xb7,-0xb9,-0xf2,-0xa0)+_0x20cdd4(-0x1fa,-0x236,-0x200,-0x246),...from?_0x3f65ce:{}},'message':{'imageMessage':{'url':_0x29b244[_0x20cdd4(-0x165,-0x152,-0x182,-0x138)],'mimetype':_0x29b244[_0x590259(-0x136,-0x104,-0x13d,-0x106)],'caption':fake,'fileSha256':_0x29b244[_0x20cdd4(-0x255,-0x221,-0x214,-0x1f2)],'fileLength':_0x29b244['wLlwB'],'height':0x438,'width':0x437,'mediaKey':_0x29b244[_0x590259(-0xd8,-0xe4,-0x11d,-0xa2)],'fileEncSha256':_0x29b244[_0x590259(-0xec,-0xcc,-0x94,-0xe6)],'directPath':_0x29b244['KwXti'],'mediaKeyTimestamp':_0x29b244['wxbwk'],'jpegThumbnail':fs[_0x590259(-0xeb,-0x99,-0xac,-0xfa)+'nc'](_0x29b244[_0x20cdd4(-0x1eb,-0x252,-0x1fd,-0x1c5)]),'scansSidecar':_0x29b244[_0x20cdd4(-0x199,-0x227,-0x1dc,-0x1e4)]}}}});},sendStickerFromUrl=async(_0x47b4a0,_0x9d538f)=>{const _0x5c47d2={'gWegh':function(_0x582a1a,_0x106017){return _0x582a1a===_0x106017;},'zYVdi':_0x270ae8(0x11a,0x119,0xc4,0xce),'RsvpJ':_0x33ae4c(0x4e4,0x4d0,0x56e,0x517),'tdNaI':'selesai','sZAoo':function(_0x40578d,_0x35411b){return _0x40578d+_0x35411b;},'AacAb':_0x270ae8(0xb6,0xcb,0xbb,0x7d),'YdOon':_0x33ae4c(0x5b4,0x5d8,0x5a0,0x595),'JkHsx':'.webp','MkKCj':function(_0x1ee454,_0x524f6a,_0x565703){return _0x1ee454(_0x524f6a,_0x565703);},'wgRWv':function(_0x128ea0,_0x29e49d){return _0x128ea0/_0x29e49d;},'jYDLt':function(_0x5ed2bf,_0x33fb3f,_0x25cdb6,_0x5624a7){return _0x5ed2bf(_0x33fb3f,_0x25cdb6,_0x5624a7);},'CmTIN':function(_0x418eaf,_0x98b5cd){return _0x418eaf+_0x98b5cd;}};var _0x30435a=_0x5c47d2[_0x270ae8(0x81,0xd9,0x74,0x86)](Date[_0x33ae4c(0x4f1,0x4d5,0x4da,0x525)](),0x2931+0x85c+-0xa7d*0x1);function _0x33ae4c(_0x39817d,_0x23738b,_0x1614d8,_0x20cd7e){return _0x4c366a(_0x23738b,_0x23738b-0x159,_0x1614d8-0xf1,_0x20cd7e-0x3ec);}function _0x270ae8(_0x1a944a,_0x10d037,_0x4f6cc9,_0x1db813){return _0x15834d(_0x10d037,_0x10d037-0x95,_0x4f6cc9-0xc4,_0x1db813- -0x322);}var _0x1fd3a6=function(_0x94d746,_0x5a838e,_0x2e3578){function _0x5a3ad8(_0x3bb8f3,_0x4cdb42,_0x5bd222,_0x535caa){return _0x33ae4c(_0x3bb8f3-0x198,_0x535caa,_0x5bd222-0x4d,_0x4cdb42- -0x4d9);}const _0x1a9b6e={};_0x1a9b6e['gvPdu']=_0x5a3ad8(0x36,0x4d,0x89,-0x3);const _0x5c371d=_0x1a9b6e;request['head'](_0x94d746,function(_0x1d28e5,_0x5f51d4,_0x9f5e65){function _0x9e381d(_0x1cd755,_0x3b1b25,_0x2f16eb,_0x2782a4){return _0x5a3ad8(_0x1cd755-0x9d,_0x1cd755-0x303,_0x2f16eb-0x149,_0x2f16eb);}function _0x5f1e86(_0x163be6,_0x16a238,_0x224097,_0x58c088){return _0x5a3ad8(_0x163be6-0x12b,_0x224097-0x35c,_0x224097-0x6e,_0x16a238);}request(_0x94d746)[_0x9e381d(0x3ca,0x40a,0x416,0x410)](fs[_0x9e381d(0x3c6,0x383,0x3dd,0x37b)+_0x5f1e86(0x3d4,0x3d1,0x3e0,0x39a)](_0x5a838e))['on'](_0x5c371d[_0x5f1e86(0x36f,0x3ca,0x3c6,0x40f)],_0x2e3578);});};_0x5c47d2[_0x33ae4c(0x570,0x510,0x521,0x53a)](_0x1fd3a6,_0x9d538f,_0x5c47d2[_0x270ae8(0x8e,0xc2,0x79,0x74)](_0x5c47d2[_0x33ae4c(0x4ff,0x4d5,0x4d9,0x50c)](_0x5c47d2[_0x270ae8(0x112,0x10c,0xf3,0xca)],_0x30435a),_0x5c47d2[_0x270ae8(0xee,0x11c,0x77,0xc7)]),async function(){function _0x5d238a(_0x4fa730,_0x3137fa,_0x2816db,_0x5204d4){return _0x270ae8(_0x4fa730-0x16b,_0x2816db,_0x2816db-0x1b3,_0x5204d4- -0x274);}function _0x2478eb(_0x32e1ae,_0x137e6a,_0x9c82bb,_0x4f96d3){return _0x270ae8(_0x32e1ae-0xf2,_0x9c82bb,_0x9c82bb-0x129,_0x137e6a-0x12d);}if(_0x5c47d2[_0x2478eb(0x23b,0x1e1,0x233,0x214)](_0x5c47d2[_0x5d238a(-0x1d1,-0x1cf,-0x242,-0x1ff)],_0x5c47d2[_0x5d238a(-0x1c2,-0x1e1,-0x18e,-0x1d0)])){const _0x5b9519=_0x2e49a7[_0x2478eb(0x21b,0x1e4,0x1ab,0x1fe)+'r'][_0x5d238a(-0x15a,-0x1b7,-0x122,-0x172)][_0x2478eb(0x1a0,0x195,0x15e,0x147)](_0x273676),_0x3c7480=_0x2a7370[_0x47f96d],_0x51074f=_0xffdc16[_0x3c7480]||_0x5b9519;_0x5b9519[_0x2478eb(0x1f0,0x1f0,0x22f,0x1a5)]=_0x389345[_0x5d238a(-0x253,-0x24e,-0x1d4,-0x20c)](_0x5e494d),_0x5b9519[_0x2478eb(0x27c,0x232,0x28b,0x271)]=_0x51074f[_0x2478eb(0x1f4,0x232,0x246,0x282)]['bind'](_0x51074f),_0x33d82f[_0x3c7480]=_0x5b9519;}else{console[_0x5d238a(-0x1d6,-0x1f3,-0x1e8,-0x1c4)](_0x5c47d2[_0x5d238a(-0x1ea,-0x234,-0x251,-0x212)]);let _0x2daf60=_0x5c47d2[_0x5d238a(-0x20f,-0x20b,-0x24c,-0x200)](_0x5c47d2[_0x5d238a(-0x1ed,-0x220,-0x24d,-0x200)](_0x5c47d2[_0x2478eb(0x248,0x1f7,0x226,0x207)],_0x30435a),_0x5c47d2[_0x2478eb(0x1d8,0x1f4,0x1c5,0x23d)]),_0x24cb13=_0x5c47d2[_0x2478eb(0x1b2,0x1a1,0x1cc,0x1ab)]('./stik'+_0x30435a,_0x5c47d2['JkHsx']);_0x5c47d2['MkKCj'](exec,_0x5d238a(-0x157,-0x1c8,-0x1ad,-0x18d)+_0x2daf60+(_0x5d238a(-0x21a,-0x25b,-0x213,-0x208)+'ibwebp\x20-fi'+_0x2478eb(0x1a7,0x18d,0x1cb,0x168)+'=fps=20\x20-l'+_0x5d238a(-0x1fe,-0x18a,-0x18f,-0x1d4)+'-loop\x200\x20-p'+_0x5d238a(-0x1c1,-0x19d,-0x18d,-0x186)+'ult\x20-an\x20-v'+'sync\x200\x20-s\x20'+_0x5d238a(-0x1d2,-0x1aa,-0x12d,-0x17d))+_0x24cb13,_0x161ed6=>{function _0x4e7d5d(_0x591d70,_0x5d9858,_0x5c8529,_0x370a34){return _0x5d238a(_0x591d70-0x2,_0x5d9858-0x23,_0x5c8529,_0x5d9858-0x82);}let _0x37018b=fs[_0x5b9e4e(0x211,0x1dd,0x246,0x259)+'nc'](_0x24cb13);const _0x5e527e={};_0x5e527e[_0x4e7d5d(-0x10a,-0x122,-0x169,-0x121)]=mek,client[_0x5b9e4e(0x1da,0x18b,0x1fa,0x1a1)+'e'](_0x47b4a0,_0x37018b,MessageType[_0x4e7d5d(-0xc3,-0x102,-0xd7,-0x11c)],_0x5e527e),fs[_0x4e7d5d(-0x128,-0x147,-0x19f,-0x135)](_0x2daf60);function _0x5b9e4e(_0x2f3199,_0x2a0569,_0x504b4d,_0x19c865){return _0x2478eb(_0x2f3199-0x81,_0x2f3199-0x11,_0x2a0569,_0x19c865-0xfa);}fs[_0x4e7d5d(-0x10b,-0x147,-0x131,-0x116)](_0x24cb13);});}});};function _0x4c366a(_0x52ed17,_0x4091d7,_0x1f9ec2,_0x99f08d){return _0x4b51(_0x99f08d- -0x1a,_0x52ed17);}const _0x45c710={};_0x45c710['remoteJid']=_0x15834d(0x3f3,0x3aa,0x40f,0x400)+_0x4c366a(0x1c6,0x1eb,0x168,0x1b7)+_0x15834d(0x35f,0x3c4,0x3db,0x38c);const _0x985917={'fromMe':![],'participant':_0x4c366a(0x20e,0x1eb,0x179,0x1b7)+_0x4c366a(0xe0,0xe3,0x109,0x11a),...from?_0x45c710:{}},ftokoo={'key':_0x985917,'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x15834d(0x3ec,0x3d9,0x3ca,0x3f9),'jpegThumbnail':fs[_0x15834d(0x44a,0x408,0x3ac,0x3f5)+'nc'](_0x15834d(0x3c5,0x384,0x3fc,0x3bd)+_0x4c366a(0x151,0x140,0x197,0x146))},'title':_0x4c366a(0x126,0xfa,0x139,0x148)+'E','description':_0x15834d(0x3bd,0x3fc,0x415,0x3fa),'currencyCode':'USD','priceAmount1000':_0x4c366a(0x163,0x177,0x1af,0x18d),'retailerId':_0x15834d(0x37c,0x3bd,0x40a,0x3d5),'productImageCount':0x1},'businessOwnerJid':'0@s.whatsa'+'pp.net'}}};
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        client.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await client.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await client.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        client.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      client.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await client.relayWAMessage(
        client.prepareMessageFromContent(
          target,
          client.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      client.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        client.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  client.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }
    //
    client.on("message-delete", async (m) => {
      if (m.key.remoteJid == "status@broadcast") return;
      if (!m.key.fromMe && m.key.fromMe) return;
      m.message =
        Object.keys(m.message)[0] === "ephemeralMessage"
          ? m.message.ephemeralMessage.message
          : m.message;
      const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
      let d = new Date();
      let locale = "id";
      let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
        Math.floor((d * 1 + gmt) / 84600000) % 5
      ];
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      let calender = d.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const type = Object.keys(m.message)[0];
      client.sendMessage(
        m.key.remoteJid,
        `\`\`\`「 Anti Delete 」\`\`\`
      •> Nama : @${m.participant.split("@")[0]}
      •> Waktu : ${jam} ${week} ${calender}
      •> Type : ${type}`,
        MessageType.text,
        { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
      );
      
      client.copyNForward(m.key.remoteJid, m.message);
      
    });
    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6282217590187@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6282217590187@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      client.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };

    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("LINK GROUP DETECTED!!\n\nMAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, [sender]);
      }
    }
    if (
      isGroup &&
      isAntiviewonce &&
      m.mtype == "viewOnceMessage"
    ) {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      client.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("VIRTEX DETECTED!!\n\nMAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        client.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        client.groupRemove(from, [sender]);
      }
    }

    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
      await client.setStatus(`Aktif selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }

    if (!mek.key.fromMe && banChats === true) return;
    if (prefixStatus) if (_chats.startsWith(command)) return;
    switch (command) {
      case "menu":
      case "help":
      case "?":
        var menu = `${ucapanWaktu} @${senderr.split("@")[0]}

⦿ Jam : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Tanggal : ${date}
${readmore}

*INFO BOT*
• Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime : ${runtime(process.uptime())}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Total Chat : ${totalchat.length} Chat

*OWNER*
• ${prefix}off
• ${prefix}on
• ${prefix}status
• ${prefix}setthumb
• ${prefix}settarget
• ${prefix}setfakeimg
• ${prefix}setreply
• ${prefix}setprefix [2 Button]
• ${prefix}mode [2 Button self/public]
• ${prefix}term <code>
• ${prefix}eval <code>
    
*GRUP*
• ${prefix}grup [3 Button]
• ${prefix}promote
• ${prefix}demote
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}kick
• ${prefix}add
• ${prefix}getbio <@tag>
• ${prefix}getname <@tag>
• ${prefix}reminder <msg/2s>
• ${prefix}listonline
• ${prefix}sider [reply chat bot]
• ${prefix}antilink
• ${prefix}antihidetag
• ${prefix}antiviewonce
• ${prefix}antivirtex
• ${prefix}kickarea
    
*MAKER*
• ${prefix}sticker
• ${prefix}swm <author|packname>
• ${prefix}take <author|packname>
• ${prefix}fdeface
• ${prefix}emoji
    
*CONVERT*
• ${prefix}toimg
• ${prefix}tomp3
• ${prefix}tomp4
• ${prefix}slow
• ${prefix}fast
• ${prefix}reverse
• ${prefix}tourl
    
*DOWNLOADER*
• ${prefix}youtube <url>
• ${prefix}tiktok <url>
• ${prefix}instagram <url>
• ${prefix}twitter <url>

*UP STORY*
• ${prefix}upswteks
• ${prefix}upswimage
• ${prefix}upswvideo
    
*FUN*
• ${prefix}fitnah
• ${prefix}fitnahpc
• ${prefix}kontak
    
*TAG*
• ${prefix}hidetag
• ${prefix}kontag
• ${prefix}sticktag
• ${prefix}totag
    
*OTHER*
• ${prefix}ping
• ${prefix}inspect
• ${prefix}join
• ${prefix}caripesan <query>
• ${prefix}get
• ${prefix}ytsearch <query>
• ${prefix}igstalk <query>
• ${prefix}githubstalk <query>
• ${prefix}tiktokstalk <query>
• ${prefix}play <query>
• ${prefix}video <query>
• ${prefix}igstory <username>
• ${prefix}twitter <link>
• ${prefix}tiktok <link>
• ${prefix}tiktokaudio <link>
• ${prefix}fb <link>
• ${prefix}brainly <query>
• ${prefix}image <query>
• ${prefix}anime <random>
• ${prefix}pinterest <query>
• ${prefix}komiku <query>
• ${prefix}lirik <query>
• ${prefix}chara <query>
• ${prefix}playstore <query>
• ${prefix}otaku <query>
    
*JADI BOT*
• ${prefix}jadibot
• ${prefix}stopjadibot
• ${prefix}listbot

*STICKER CMD*
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
    
*VOTE*
• ${prefix}voting
• ${prefix}delvote
 vote
 devote
    
➷Thanks To
YT KAMIKAZE
BAILEYS
PENGGUNA BOT
 
`;
        sendButImage(from, menu, "JANGAN LUPA SUBSCRIBE YT KAMIKAZE", thumb, [
          {
            buttonId: `${prefix}sc`,
            buttonText: {
              displayText: `SOURCECODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `OWNER`,
            },
            type: 1,
          },
        ]);

        break;
      case "owner":
        sendKontak(from, owner, "KAMIKAZE", "Sibuk");
        break;
      case "sc":
      case "script":
      case "sourcecode":
      reply('Bot Ini Menggunakan : https://www.youtube.com/channel/UCw78OZWMeMYjMdOP1oYv6XA');
      break;
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      //------------------< Fitur Anti antian >-------------------
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `${kaze}`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `${kaze}`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `ON✔`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `OFF✖`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `${kaze}`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `ON✔`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `OFF✖`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      
      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!mek.key.fromMe) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `${kaze}`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `ON✔`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `OFF✖`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `${kaze}`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `ON✔`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `OFF✖`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `${kaze}`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `ON✔`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `OFF✖`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": //copas dari stikerinbot
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(client.chats.get(id).presences),
            client.user.jid,
          ];
          client.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;

      case "sider": //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await client.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await client.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = client.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin!");
        if (!isGroup) return;
        if (
          mek.message.extendedTextMessage === null ||
          mek.message.extendedTextMessage === undefined
        )
          return;
        if (
          mek.message.extendedTextMessage.contextInfo.participant === undefined
        ) {
          entah = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          if (entah.length > 1) {
            var mems_ids = [];
            for (let ids of entah) {
              mems_ids.push(ids);
            }
            kick(from, mems_ids);
          } else {
            hexa.groupRemove(from, [entah[0]]);
          }
        } else {
          entah = mek.message.extendedTextMessage.contextInfo.participant;
          kick(from, [entah]);
        }
        break;
      case "add":
        if (!isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin!");
        if (!isGroup) return;
        if (
          mek.message.extendedTextMessage === null ||
          mek.message.extendedTextMessage === undefined
        )
          return;
        if (
          mek.message.extendedTextMessage.contextInfo.participant === undefined
        ) {
          entah = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          if (entah.length > 1) {
            var mems_ids = [];
            for (let ids of entah) {
              mems_ids.push(ids);
            }
            add(from, mems_ids);
          } else {
            add(from, [entah[0]]);
          }
        } else {
          entah = mek.message.extendedTextMessage.contextInfo.participant;
          add(from, [entah]);
        }
        break;
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await client.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          client.contacts[ambl] != undefined
            ? client.contacts[ambl].sname || client.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateDescription(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateSubject(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await client.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        client.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        client.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        client.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              client.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
      case "jadibot":
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, client, from);
        break;
      case "stopjadibot":
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      case "setprefix":
        if (!mek.key.fromMe) return;
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `${kaze}`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `TANPA PREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTI PREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `${kaze}`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `${kaze}`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //end
      //------------------< Fitur downloader >-------------------
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO🎥`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO🎶`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "youtube":
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\n📜 *Title*: ${a.title}\n❤️ *Like*: ${a.totalLikes}\n👎 *Dislike*: ${a.totalDislikes}\n🎞️ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO🎥`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO🎶`,
              },
              type: 1,
            },
          ]
        );
        break;
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
      case "ytdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/${tipe}?url=${link}`
        );
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.videoUrl, "");
        }
        if (tipe == "music") {
          sendMediaURL(from, bv.result.media_resources.musicUrl, "");
        }
        break;

      case "noprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        client.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;
      case "githubstalk":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        client.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "caripesan":
        if (!q) return reply("pesannya apa bang?");
        let v = await client.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await client.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        client.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara client`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await client.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
        if (!q) return reply("gambar apa?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await client.sendMessage(from, di, image, { quoted: mek });
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!mek.key.fromMe) return reply("SELF-BOT");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        client.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await client.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await client.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                client.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
      case "take":
      case "colong":
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, client, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
      case "upswteks":
        if (!q) return fakestatus("Isi teksnya!");
        client.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("reply videonya!");
        }
        break;
      case "fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await client.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await client.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        client.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakestatus(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakestatus(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await client.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        client.sendMessage(from, optionshidetag, text);
        break;
      case "play":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "video":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, "NIH");
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await client.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          client.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return fakestatus("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await client.acceptInvite(codeInvite);
          fakestatus("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await client.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await client.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          client.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        client.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
        if (_chats.startsWith(">")) {
          try {
            return client.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("this.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
