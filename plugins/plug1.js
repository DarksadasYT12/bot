const _0x2f5412=_0x2253;(function(_0x790156,_0x21845a){const _0x561559=_0x2253,_0x14ebcd=_0x790156();while(!![]){try{const _0xb71c1a=parseInt(_0x561559(0x148))/0x1+parseInt(_0x561559(0xcc))/0x2*(-parseInt(_0x561559(0x16e))/0x3)+parseInt(_0x561559(0x14f))/0x4*(-parseInt(_0x561559(0x13c))/0x5)+parseInt(_0x561559(0x172))/0x6+-parseInt(_0x561559(0xd0))/0x7*(parseInt(_0x561559(0xdb))/0x8)+-parseInt(_0x561559(0x114))/0x9*(parseInt(_0x561559(0x135))/0xa)+parseInt(_0x561559(0x11d))/0xb*(parseInt(_0x561559(0x141))/0xc);if(_0xb71c1a===_0x21845a)break;else _0x14ebcd['push'](_0x14ebcd['shift']());}catch(_0x5524e2){_0x14ebcd['push'](_0x14ebcd['shift']());}}}(_0x1653,0x6598f));function _0x2253(_0x39084f,_0x327f48){const _0x165345=_0x1653();return _0x2253=function(_0x2253fa,_0x580e05){_0x2253fa=_0x2253fa-0xaf;let _0x41b47b=_0x165345[_0x2253fa];return _0x41b47b;},_0x2253(_0x39084f,_0x327f48);}const config=require('../config'),os=require('os'),{cmd,commands}=require(_0x2f5412(0x170)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x2f5412(0xba));cmd({'pattern':_0x2f5412(0x120),'desc':_0x2f5412(0x14a),'react':'✅','category':_0x2f5412(0x138),'filename':__filename},async(_0x5c6784,_0x2c18a6,_0x1e7ca2,{isGroup:_0xe963b1,isBotAdmins:_0x4d6001,isAdmins:_0x5e9cb3,args:_0x246e28,reply:_0x5cad32})=>{const _0xc1196e=_0x2f5412;try{if(!_0xe963b1)return _0x5cad32(_0xc1196e(0xc7));if(!_0x4d6001)return _0x5cad32(_0xc1196e(0xe9));if(!_0x5e9cb3)return _0x5cad32('You\x20must\x20be\x20an\x20admin\x20to\x20use\x20this\x20command.');const _0x368852=_0x2c18a6[_0xc1196e(0xe0)][_0xc1196e(0x108)],_0x12df7a=await _0x5c6784['groupRequestParticipantsList'](_0x368852);if(_0x12df7a[_0xc1196e(0xcd)]===0x0)return _0x5cad32(_0xc1196e(0xda));const _0xbd3c6a=_0x12df7a[_0xc1196e(0x115)](_0x249255=>_0x249255[_0xc1196e(0x107)][_0xc1196e(0x163)](config[_0xc1196e(0x143)]));if(_0xbd3c6a[_0xc1196e(0xcd)]===0x0)return _0x5cad32('No\x20+94\x20users\x20found\x20in\x20the\x20waiting\x20list.');const _0x6d2380=_0xbd3c6a[_0xc1196e(0xbb)](_0x47d8fa=>_0x47d8fa[_0xc1196e(0x107)]),_0x1a7c7c=await _0x5c6784['groupRequestParticipantsUpdate'](_0x368852,_0x6d2380,_0xc1196e(0x120));console['log'](_0x1a7c7c),_0x5cad32(_0xc1196e(0x12d)+_0x6d2380[_0xc1196e(0x110)]('\x0a'));}catch(_0x56d528){console['log'](_0x56d528),await _0x5c6784['sendMessage'](from,{'react':{'text':'❌','key':_0x2c18a6[_0xc1196e(0xe0)]}}),_0x5cad32(_0xc1196e(0xf3)+_0x56d528);}}),cmd({'pattern':_0x2f5412(0x151),'desc':_0x2f5412(0x12e),'use':'.requests','react':'📝','category':_0x2f5412(0x138),'filename':__filename},async(_0x4710eb,_0x3a1c0f,_0x4557ac,{from:_0x18a8e7,isGroup:_0x12738c,reply:_0x19d1c3})=>{const _0x1e65c3=_0x2f5412;if(!_0x12738c)return await _0x19d1c3(_0x1e65c3(0xc2));const _0x3a3598=_0x4710eb[_0x1e65c3(0xc0)][_0x1e65c3(0x107)],_0x10cc1e=await _0x4710eb['groupMetadata'](_0x18a8e7),_0x2ff610=_0x10cc1e[_0x1e65c3(0x111)][_0x1e65c3(0xf9)](_0x46a3b1=>_0x46a3b1[_0x1e65c3(0x107)]===_0x3a3598&&_0x46a3b1['admin']);if(!_0x2ff610)return await _0x19d1c3(_0x1e65c3(0xd7));try{const _0x4eea6f=await _0x4710eb[_0x1e65c3(0xb4)](_0x18a8e7);if(_0x4eea6f['length']===0x0)return await _0x19d1c3(_0x1e65c3(0x12c));let _0x29bb3a=_0x1e65c3(0x162);return _0x4eea6f[_0x1e65c3(0xed)]((_0x2f9a6b,_0x1e1c4a)=>{const _0x5a1bc6=_0x1e65c3;_0x29bb3a+=_0x1e1c4a+0x1+_0x5a1bc6(0x11c)+_0x2f9a6b[_0x5a1bc6(0x107)][_0x5a1bc6(0xc5)]('@')[0x0]+'\x0a';}),await _0x19d1c3(_0x29bb3a,{'mentions':_0x4eea6f[_0x1e65c3(0xbb)](_0x476109=>_0x476109[_0x1e65c3(0x107)])});}catch(_0x1c815b){return console[_0x1e65c3(0xe2)](_0x1e65c3(0x13a),_0x1c815b),await _0x19d1c3('Failed\x20to\x20retrieve\x20join\x20requests.\x20Please\x20try\x20again\x20later.');}}),cmd({'pattern':_0x2f5412(0xb6),'desc':'Accept\x20group\x20join\x20request(s)','use':'.accept\x20<request\x20numbers>','react':'✔️','category':_0x2f5412(0x138),'filename':__filename},async(_0x33f35b,_0xbb7f07,_0x474a4c,{from:_0xf95d80,isGroup:_0x49b676,reply:_0x530d73,match:_0x455a13})=>{const _0x311192=_0x2f5412;if(!_0x49b676)return await _0x530d73(_0x311192(0xc2));const _0x25270d=_0x33f35b[_0x311192(0xc0)][_0x311192(0x107)],_0x552451=await _0x33f35b['groupMetadata'](_0xf95d80),_0x426f0b=_0x552451[_0x311192(0x111)][_0x311192(0xf9)](_0x1f888b=>_0x1f888b[_0x311192(0x107)]===_0x25270d&&_0x1f888b['admin']);if(!_0x426f0b)return await _0x530d73(_0x311192(0xb0));try{const _0x3ceb48=await _0x33f35b[_0x311192(0xb4)](_0xf95d80);if(_0x3ceb48[_0x311192(0xcd)]===0x0)return await _0x530d73(_0x311192(0x12c));if(!_0x455a13)return await _0x530d73(_0x311192(0xee));const _0x1346ad=_0x455a13['split'](',')['map'](_0x14323a=>parseInt(_0x14323a[_0x311192(0xc4)]())-0x1),_0x3ecd96=_0x1346ad[_0x311192(0x115)](_0x38ba2f=>_0x38ba2f>=0x0&&_0x38ba2f<_0x3ceb48[_0x311192(0xcd)]);if(_0x3ecd96[_0x311192(0xcd)]===0x0)return await _0x530d73('_Invalid\x20request\x20number(s)._');for(let _0x181a57 of _0x3ecd96){await _0x33f35b[_0x311192(0x12b)](_0xf95d80,[_0x3ceb48[_0x181a57][_0x311192(0x107)]],_0x311192(0xb6));}return await _0x530d73(_0x311192(0xc3)+_0x3ecd96['length']+_0x311192(0xf8));}catch(_0x14a442){return console[_0x311192(0xe2)](_0x311192(0x152),_0x14a442),await _0x33f35b[_0x311192(0xfd)](_0xf95d80,{'react':{'text':'❌','key':_0xbb7f07['key']}}),await _0x530d73(_0x311192(0xd1));}}),cmd({'pattern':'reject','desc':_0x2f5412(0xf2),'use':_0x2f5412(0xeb),'react':'❌','category':'group','filename':__filename},async(_0x77c20f,_0x47aa28,_0x309968,{from:_0x4b929c,isGroup:_0x485f65,reply:_0xd91ad9,match:_0xcedf0d})=>{const _0x27e3b4=_0x2f5412;if(!_0x485f65)return await _0xd91ad9(_0x27e3b4(0xc2));const _0x4c4a60=_0x77c20f[_0x27e3b4(0xc0)]['jid'],_0x5896ea=await _0x77c20f[_0x27e3b4(0x168)](_0x4b929c),_0x335f7a=_0x5896ea['participants'][_0x27e3b4(0xf9)](_0x28efb0=>_0x28efb0[_0x27e3b4(0x107)]===_0x4c4a60&&_0x28efb0[_0x27e3b4(0x158)]);if(!_0x335f7a)return await _0xd91ad9(_0x27e3b4(0xd7));try{const _0xd653f6=await _0x77c20f[_0x27e3b4(0xb4)](_0x4b929c);if(_0xd653f6[_0x27e3b4(0xcd)]===0x0)return await _0xd91ad9(_0x27e3b4(0x12c));if(!_0xcedf0d)return await _0xd91ad9(_0x27e3b4(0x123));const _0x469727=_0xcedf0d[_0x27e3b4(0xc5)](',')[_0x27e3b4(0xbb)](_0x59d22a=>parseInt(_0x59d22a[_0x27e3b4(0xc4)]())-0x1),_0x236959=_0x469727[_0x27e3b4(0x115)](_0x5d4b0f=>_0x5d4b0f>=0x0&&_0x5d4b0f<_0xd653f6[_0x27e3b4(0xcd)]);if(_0x236959['length']===0x0)return await _0xd91ad9(_0x27e3b4(0x121));for(let _0x46fbf7 of _0x236959){await _0x77c20f[_0x27e3b4(0x12b)](_0x4b929c,[_0xd653f6[_0x46fbf7][_0x27e3b4(0x107)]],_0x27e3b4(0x15a));}return await _0xd91ad9('_Rejected\x20'+_0x236959[_0x27e3b4(0xcd)]+_0x27e3b4(0xf8));}catch(_0x5c2fbd){return console['error'](_0x27e3b4(0xfe),_0x5c2fbd),await _0x77c20f[_0x27e3b4(0xfd)](_0x4b929c,{'react':{'text':'❌','key':_0x47aa28[_0x27e3b4(0xe0)]}}),await _0xd91ad9(_0x27e3b4(0xd4));}}),cmd({'pattern':_0x2f5412(0x167),'react':'📢','alias':[_0x2f5412(0xb2)],'desc':'Tags\x20everyperson\x20of\x20group\x20without\x20mentioning\x20their\x20numbers','category':_0x2f5412(0x138),'filename':__filename,'use':_0x2f5412(0x14e)},async(_0x3de743,_0x4af0d3,_0x41c16a,{from:_0x320497,l:_0x2fb24c,quoted:_0x9aab88,body:_0x38efb2,isCmd:_0x312c75,command:_0xe732eb,args:_0x3e8a30,q:_0x56deb1,isGroup:_0x52e4b1,sender:_0xb18d42,senderNumber:_0x46ec13,botNumber2:_0x32a09f,botNumber:_0x2983ab,pushname:_0x3a9f42,isMe:_0x412604,isOwner:_0x3ace49,groupMetadata:_0x5af5cf,groupName:_0x3d6a01,participants:_0x19ce93,isItzcp:_0x40aeb9,groupAdmins:_0x197d88,isBotAdmins:_0x19f18b,isAdmins:_0x588aa1,reply:_0x105c42})=>{const _0x1fdc6e=_0x2f5412;if(!_0x3ace49||!_0x588aa1)return;try{if(!_0x41c16a['isGroup'])return _0x105c42(mg[_0x1fdc6e(0x109)]);if(!_0x19f18b)return _0x105c42(mg[_0x1fdc6e(0xb7)]);_0x3de743['sendMessage'](_0x41c16a[_0x1fdc6e(0xe5)],{'text':_0x56deb1?text:'','mentions':_0x19ce93['map'](_0x3fb3cc=>_0x3fb3cc['id'])},{'quoted':_0x4af0d3});}catch(_0x4ad9c5){_0x105c42(_0x1fdc6e(0x139)),_0x2fb24c(_0x4ad9c5);}}),cmd({'pattern':_0x2f5412(0x15b),'react':'🥏','alias':[_0x2f5412(0xd6)],'desc':_0x2f5412(0xf6),'category':'group','use':'.kick','filename':__filename},async(_0x596cf4,_0x351f91,_0x1fc37c,{from:_0x537118,l:_0x41af16,quoted:_0x3064ac,body:_0x25fbab,isCmd:_0x91ae30,command:_0x341292,mentionByTag:_0x29744d,args:_0x423ae7,q:_0x5a918f,isGroup:_0x29d655,sender:_0x20d669,senderNumber:_0x27e5ff,botNumber2:_0x3efc5e,botNumber:_0xfeaa39,pushname:_0x3f0871,isMe:_0x1765af,isOwner:_0x3a5319,groupMetadata:_0x52c281,groupName:_0x89e10c,participants:_0x1288cb,groupAdmins:_0x4932f8,isBotAdmins:_0x4b5640,isCreator:_0x373867,isDev:_0xf8f1e2,isAdmins:_0x122f46,reply:_0x390b9f})=>{const _0x4d1d47=_0x2f5412;try{if(!_0x29d655)return _0x390b9f(_0x4d1d47(0x15d));if(!_0x122f46){if(!_0x1765af)return _0x596cf4[_0x4d1d47(0xfd)](_0x537118,{'text':'🚫\x20*This\x20is\x20admin\x20only\x20command*'},{'quoted':_0x351f91});}if(!_0x4b5640)return _0x390b9f(_0x4d1d47(0x173));const _0x3b7b42=await _0x29744d;let _0x280e68=await _0x3b7b42||_0x351f91[_0x4d1d47(0x10a)]['contextInfo'][_0x4d1d47(0xe4)];if(!_0x280e68)return _0x390b9f('🚫\x20*Couldn\x27t\x20find\x20any\x20user\x20in\x20context*');await _0x596cf4['groupParticipantsUpdate'](_0x537118,[_0x280e68],_0x4d1d47(0xd6)),await _0x596cf4[_0x4d1d47(0xfd)](_0x537118,{'text':'*Removed\x20🚫*'},{'quoted':_0x351f91});}catch(_0x30a5b2){_0x390b9f(_0x4d1d47(0x16a)+_0x30a5b2),console[_0x4d1d47(0xce)](_0x30a5b2);}}),cmd({'pattern':_0x2f5412(0xdf),'react':'🥏','alias':['addadmin'],'desc':_0x2f5412(0xbf),'category':_0x2f5412(0x138),'use':_0x2f5412(0x11b),'filename':__filename},async(_0x323bae,_0x5ec835,_0x2a128f,{from:_0x1fbd2d,l:_0x16bb7e,quoted:_0x2097a1,body:_0x253171,isCmd:_0x452257,command:_0x32f330,mentionByTag:_0x488d14,args:_0x29af7d,q:_0x3246b0,isGroup:_0x2b29ae,sender:_0x53eccb,senderNumber:_0x25469d,botNumber2:_0x3e4d46,botNumber:_0x25c599,pushname:_0x21d75b,isMe:_0x3efa87,isOwner:_0x46cda2,groupMetadata:_0x43ba0e,groupName:_0x15090a,participants:_0x3ec857,groupAdmins:_0x52978c,isBotAdmins:_0xa42e3e,isCreator:_0x284631,isDev:_0x17953d,isAdmins:_0x5b9f03,reply:_0x55bf0a})=>{const _0x8fd60c=_0x2f5412;try{if(!_0x2b29ae)return _0x55bf0a(_0x8fd60c(0x15d));if(!_0x5b9f03){if(!_0x3efa87)return _0x323bae['sendMessage'](_0x1fbd2d,{'text':'🚫\x20*This\x20is\x20admin\x20only\x20command*'},{'quoted':_0x5ec835});}if(!_0xa42e3e)return _0x55bf0a('*Bot\x20must\x20be\x20admin\x20first\x20❗*');const _0x17d945=await _0x488d14;let _0x15e773=await _0x17d945||_0x5ec835[_0x8fd60c(0x10a)][_0x8fd60c(0xe1)][_0x8fd60c(0xe4)];if(!_0x15e773)return _0x55bf0a(_0x8fd60c(0xfa));const _0x589f7b=await getGroupAdmins(_0x3ec857);if(_0x589f7b['includes'](_0x15e773))return _0x55bf0a('*User\x20all\x20ready\x20and\x20admin\x20✅*');await _0x323bae['groupParticipantsUpdate'](_0x1fbd2d,[_0x15e773],'promote'),await _0x323bae[_0x8fd60c(0xfd)](_0x1fbd2d,{'text':_0x8fd60c(0x176)},{'quoted':_0x5ec835});}catch(_0xa98d55){_0x55bf0a(_0x8fd60c(0x16a)+_0xa98d55),console[_0x8fd60c(0xce)](_0xa98d55);}}),cmd({'pattern':_0x2f5412(0x125),'react':'🥏','alias':['removeadmin'],'desc':_0x2f5412(0x13d),'category':_0x2f5412(0x138),'use':_0x2f5412(0x174),'filename':__filename},async(_0x370b16,_0x34068a,_0x4d1f52,{from:_0xf92b3a,l:_0x3cbcaa,quoted:_0x7b1da8,body:_0x1225f2,isCmd:_0x4de531,command:_0x3defae,mentionByTag:_0x5114fc,args:_0xcbb678,q:_0x41a323,isGroup:_0x3086e7,sender:_0x396811,senderNumber:_0x49187c,botNumber2:_0x35d521,botNumber:_0x4bdef9,pushname:_0x46f7c9,isMe:_0x2fe516,isOwner:_0x4e97eb,groupMetadata:_0x270226,groupName:_0x1cebf8,participants:_0x523a3b,groupAdmins:_0x46ad2,isBotAdmins:_0x1760e1,isCreator:_0x4ec552,isDev:_0x1607c5,isAdmins:_0x35e9fd,reply:_0x10276a})=>{const _0xe82baa=_0x2f5412;try{if(!_0x3086e7)return _0x10276a('This\x20is\x20Group\x20only\x20Command');if(!_0x35e9fd){if(!_0x2fe516)return _0x370b16[_0xe82baa(0xfd)](_0xf92b3a,{'text':'🚫\x20*This\x20is\x20admin\x20only\x20command*'},{'quoted':_0x34068a});}if(!_0x1760e1)return _0x10276a(_0xe82baa(0xe6));const _0x767f2a=await _0x5114fc;let _0x169a22=await _0x767f2a||_0x34068a[_0xe82baa(0x10a)][_0xe82baa(0xe1)][_0xe82baa(0xe4)];if(!_0x169a22)return _0x10276a('🚫\x20*Couldn\x27t\x20find\x20any\x20user\x20in\x20context*');const _0x5dbef8=await getGroupAdmins(_0x523a3b);if(!_0x5dbef8[_0xe82baa(0xef)](_0x169a22))return _0x10276a(_0xe82baa(0x15e));await _0x370b16[_0xe82baa(0x13f)](_0xf92b3a,[_0x169a22],'demote'),await _0x370b16[_0xe82baa(0xfd)](_0xf92b3a,{'text':_0xe82baa(0xbc)},{'quoted':_0x34068a});}catch(_0x501582){_0x10276a(_0xe82baa(0x16a)+_0x501582),console[_0xe82baa(0xce)](_0x501582);}}),cmd({'pattern':_0x2f5412(0x137),'react':'🔒','alias':[_0x2f5412(0x154),_0x2f5412(0x136)],'desc':_0x2f5412(0x16f),'category':_0x2f5412(0x138),'use':'.mute','filename':__filename},async(_0x4e51d7,_0x353fc7,_0x258173,{from:_0xf12b25,l:_0x257d2f,quoted:_0x1cd063,body:_0x420430,isCmd:_0x530a62,command:_0x420572,args:_0xf81d99,q:_0x1051f9,isGroup:_0x2b1a32,sender:_0x97a118,senderNumber:_0x3ee7f6,botNumber2:_0x2daf1c,botNumber:_0x13296c,pushname:_0x4583ff,isMe:_0x3e9685,isOwner:_0x4eda50,groupMetadata:_0x25a9eb,groupName:_0x581e02,participants:_0x1899bf,groupAdmins:_0xf07b22,isBotAdmins:_0x1db7a0,isCreator:_0x463720,isDev:_0x1e2115,isAdmins:_0x51e201,reply:_0x466aec})=>{const _0xf842b7=_0x2f5412;try{if(!_0x2b1a32)return _0x466aec(_0xf842b7(0xe7));if(!_0x1db7a0)return _0x466aec(_0xf842b7(0xea));if(!_0x51e201){if(!_0x3e9685)return _0x466aec(_0xf842b7(0x142));}await _0x4e51d7[_0xf842b7(0xdc)](_0xf12b25,_0xf842b7(0xd2)),await _0x4e51d7['sendMessage'](_0xf12b25,{'text':_0xf842b7(0xaf)},{'quoted':_0x353fc7});}catch(_0x4d4587){_0x466aec('*Error\x20!!*'),console[_0xf842b7(0xce)](_0x4d4587);}}),cmd({'pattern':_0x2f5412(0x130),'react':'🔓','alias':['open','unmute_cyber'],'desc':_0x2f5412(0x13e),'category':_0x2f5412(0x138),'use':_0x2f5412(0x16b),'filename':__filename},async(_0x53074f,_0x1de55a,_0x58a825,{from:_0x27d0c1,l:_0x12eac0,quoted:_0x111f21,body:_0x534b0c,isCmd:_0x4e2cc2,command:_0x52b101,args:_0x4852c5,q:_0x47592c,isGroup:_0x3601b4,sender:_0x22781b,senderNumber:_0x359b9a,botNumber2:_0x1ed162,botNumber:_0x920dc9,pushname:_0x3ef1d2,isMe:_0x3af9c3,isOwner:_0x1dcd99,groupMetadata:_0x429407,groupName:_0x2167d1,participants:_0x38e46f,groupAdmins:_0x2bf674,isBotAdmins:_0x3a23d5,isCreator:_0x2d3893,isDev:_0x1e4842,isAdmins:_0x72a9a5,reply:_0x40939c})=>{const _0x318985=_0x2f5412;try{if(!_0x3601b4)return _0x40939c(_0x318985(0xe7));if(!_0x3a23d5)return _0x40939c(_0x318985(0xea));if(!_0x72a9a5){if(!_0x3af9c3)return _0x40939c('🚫\x20*You\x20must\x20be\x20admin\x20frist*');}await _0x53074f['groupSettingUpdate'](_0x27d0c1,_0x318985(0x161)),await _0x53074f[_0x318985(0xfd)](_0x27d0c1,{'text':_0x318985(0xb8)},{'quoted':_0x1de55a});}catch(_0x3e2f05){_0x40939c(_0x318985(0x139)),console['log'](_0x3e2f05);}}),cmd({'pattern':_0x2f5412(0x110),'desc':_0x2f5412(0x13b),'category':'main','use':_0x2f5412(0x118)},async(_0x21f6da,_0x4e4ee3,_0x1430d2,{from:_0x3382eb,l:_0x527162,quoted:_0x477aa2,body:_0x2e438f,isCmd:_0x5f5588,command:_0x18835,args:_0x2c9816,q:_0x3ef3c9,isGroup:_0x420c38,sender:_0x452717,senderNumber:_0x2e0b7e,botNumber2:_0x2d9541,botNumber:_0x522b9c,pushname:_0x26b095,isSachintha:_0x4682b0,isSavi:_0x302f35,isSadas:_0x22de54,isMani:_0x4b5fe5,isMe:_0x2341ab,isOwner:_0x16c310,isDev:_0x53d75e,groupMetadata:_0x485bdd,groupName:_0x15f735,participants:_0x37dbcf,groupAdmins:_0x372bed,isBotAdmins:_0xad5a9f,isAdmins:_0x16e20c,reply:_0x41d571})=>{const _0x1ccedf=_0x2f5412;if(!_0x16c310&&!_0x4682b0&&!_0x302f35&&!_0x53d75e&&!_0x4b5fe5&&!_0x2341ab)return;try{if(!_0x3ef3c9)return _0x41d571(_0x1ccedf(0x16d));if(!_0x3ef3c9[_0x1ccedf(0xc5)]('\x20')[0x0]&&!_0x3ef3c9[_0x1ccedf(0xc5)]('\x20')[0x0]['includes'](_0x1ccedf(0xf4)))_0x41d571('Link\x20Invalid,\x20Please\x20Send\x20a\x20valid\x20whatsapp\x20Group\x20Link!');let _0x44e226=_0x3ef3c9[_0x1ccedf(0xc5)]('\x20')[0x0][_0x1ccedf(0xc5)](_0x1ccedf(0xbe))[0x1];await _0x21f6da[_0x1ccedf(0x11e)](_0x44e226)[_0x1ccedf(0x102)](_0xdfce87=>_0x41d571('*Joined\x20group\x20✔️*'))[_0x1ccedf(0xf1)](_0x3ec9ce=>_0x41d571(_0x1ccedf(0xcb)));}catch(_0x38c54c){_0x41d571('🚩\x20Not\x20Found\x20!'),console[_0x1ccedf(0xce)](_0x38c54c);}}),cmd({'pattern':_0x2f5412(0x10d),'react':'⛔','alias':[','],'desc':'delete\x20message','category':_0x2f5412(0xc9),'use':_0x2f5412(0x150),'filename':__filename},async(_0x9fa321,_0x102007,_0x4403a0,{from:_0xdf29f8,l:_0x5ea801,quoted:_0x32ec78,body:_0x7aadd3,isCmd:_0x2dc5ce,isDev:_0x4fc17d,command:_0x1c64fa,args:_0x4f313d,q:_0x5685d3,isGroup:_0x163def,sender:_0x3838d1,senderNumber:_0x3254ff,botNumber2:_0x46023c,botNumber:_0x45d711,pushname:_0x399f19,isSachintha:_0x295ea2,isSavi:_0x4d5fcc,isSadas:_0x24b198,isMani:_0x52420c,isMe:_0x9e1c97,isOwner:_0x3caa9d,groupMetadata:_0x144923,groupName:_0x37b449,participants:_0x148d10,groupAdmins:_0x1c6158,isBotAdmins:_0x16ce04,isAdmins:_0x32582c,reply:_0x50f72d})=>{const _0x4e74b0=_0x2f5412;try{const _0x2faf53={'remoteJid':_0x4403a0[_0x4e74b0(0xe5)],'fromMe':![],'id':_0x4403a0[_0x4e74b0(0x155)]['id'],'participant':_0x4403a0[_0x4e74b0(0x155)]['sender']};await _0x9fa321[_0x4e74b0(0xfd)](_0x4403a0[_0x4e74b0(0xe5)],{'delete':_0x2faf53});}catch(_0x323737){_0x50f72d(_0x4e74b0(0x139)),_0x5ea801(_0x323737);}}),cmd({'pattern':'leave','react':'🔓','alias':[_0x2f5412(0x169),_0x2f5412(0xd5)],'desc':_0x2f5412(0x140),'category':'group','use':'.leave','filename':__filename},async(_0xf081ea,_0x5bb610,_0x2795c0,{from:_0x1f34e3,l:_0x1d3b88,quoted:_0x21da98,body:_0x4e2cda,isCmd:_0x1076d6,command:_0x41e586,args:_0x1f880d,q:_0x21ae79,isGroup:_0x35ed28,sender:_0x1612e6,senderNumber:_0x15e7b9,botNumber2:_0x1993b7,botNumber:_0x5007f2,pushname:_0x4b3150,isMe:_0x2b9c15,isOwner:_0x502371,groupMetadata:_0x5887a0,groupName:_0x5722cd,participants:_0x28c154,groupAdmins:_0x509ec8,isBotAdmins:_0x509a08,isCreator:_0x3a2cec,isDev:_0x15758e,isAdmins:_0xc5dfdc,reply:_0x14bab5})=>{const _0xf43842=_0x2f5412;try{if(!_0x35ed28)return _0x14bab5(_0xf43842(0xe7));if(!_0x2b9c15)return _0x14bab5(_0xf43842(0xe7));await _0xf081ea[_0xf43842(0xfd)](_0x1f34e3,{'text':_0xf43842(0x14d)},{'quoted':_0x5bb610}),await _0xf081ea[_0xf43842(0x145)](_0x1f34e3);}catch(_0x4d0c86){_0x14bab5(_0xf43842(0x139)),console[_0xf43842(0xce)](_0x4d0c86);}}),cmd({'pattern':'invite','react':'🖇️','alias':[_0x2f5412(0x11f),_0x2f5412(0x164)],'desc':_0x2f5412(0xdd),'category':_0x2f5412(0x138),'use':_0x2f5412(0x146),'filename':__filename},async(_0x427400,_0x140a6e,_0xcb34b9,{from:_0x1e93c9,l:_0x52b100,quoted:_0x2bd360,body:_0x48df55,isCmd:_0x39d8be,command:_0x5091d2,args:_0x15ebdd,q:_0x3fad74,isGroup:_0x40ab81,sender:_0x2b7664,senderNumber:_0x23d4a7,botNumber2:_0x567a86,botNumber:_0x191980,pushname:_0x161d3a,isMe:_0x44a97f,isOwner:_0x2634ff,groupMetadata:_0x1f5eb5,groupName:_0x3fd5dd,participants:_0x1b0d97,groupAdmins:_0x1622d0,isBotAdmins:_0xcb1812,isCreator:_0x557781,isDev:_0x5339ab,isAdmins:_0x4cba7c,reply:_0x462f0b})=>{const _0x1e9c0b=_0x2f5412;try{if(!_0x40ab81)return _0x462f0b(_0x1e9c0b(0xe7));if(!_0xcb1812)return _0x462f0b('🚫\x20*Bot\x20must\x20be\x20Admin\x20frist*');if(!_0x4cba7c){if(!_0x44a97f)return _0x462f0b(_0x1e9c0b(0x142));}const _0x22eeec=await _0x427400['groupInviteCode'](_0x1e93c9);await _0x427400[_0x1e9c0b(0xfd)](_0x1e93c9,{'text':'🖇️\x20*Group\x20Link*\x0a\x0ahttps://chat.whatsapp.com/'+_0x22eeec},{'quoted':_0x140a6e});}catch(_0x493f51){_0x462f0b(_0x1e9c0b(0x139)),console[_0x1e9c0b(0xce)](_0x493f51);}}),cmd({'pattern':_0x2f5412(0x116),'react':'🥏','alias':['groupinfo'],'desc':_0x2f5412(0xd8),'category':_0x2f5412(0x138),'use':_0x2f5412(0xbd),'filename':__filename},async(_0x1ab6a6,_0x152153,_0x228900,{from:_0x4050b1,l:_0x265185,quoted:_0x194ecc,body:_0x7a8d69,isCmd:_0xcea012,command:_0x9094a8,args:_0xf37115,q:_0x2e7358,isGroup:_0x2dc3a5,sender:_0x1e299f,senderNumber:_0x48d3f1,botNumber2:_0x156eb3,botNumber:_0x3e6d6a,pushname:_0x18c780,isMe:_0x5b5d57,isOwner:_0x97d4f,groupMetadata:_0x3a4c78,groupName:_0x4929dd,participants:_0x14edf6,groupAdmins:_0x22b464,isBotAdmins:_0x3ef190,isCreator:_0x31c672,isDev:_0x39b83f,isAdmins:_0x55c388,reply:_0x2bdc02})=>{const _0x525bda=_0x2f5412;try{if(!_0x2dc3a5)return _0x2bdc02('⛔\x20*This\x20is\x20Group\x20only\x20Command*\x20');if(!_0x3ef190)return _0x2bdc02(_0x525bda(0xc8));if(!_0x55c388){if(!_0x5b5d57)return _0x2bdc02(_0x525bda(0xfc));}const _0x13c8c7=await _0x1ab6a6[_0x525bda(0x168)](_0x4050b1);let _0x48e9f9=await _0x1ab6a6[_0x525bda(0xc6)](_0x4050b1,_0x525bda(0x11a));const _0x345648='\x0a*'+_0x13c8c7[_0x525bda(0xca)]+'*\x0a\x0a🐉\x20*Group\x20Jid*\x20-\x20'+_0x13c8c7['id']+_0x525bda(0xe3)+_0x13c8c7[_0x525bda(0xb5)]+_0x525bda(0x127)+_0x13c8c7[_0x525bda(0x124)]+_0x525bda(0x112)+_0x13c8c7[_0x525bda(0x132)]+'\x0a\x0a';await _0x1ab6a6[_0x525bda(0xfd)](_0x4050b1,{'image':{'url':_0x48e9f9},'caption':_0x345648},{'quoted':_0x152153});}catch(_0x19b271){_0x2bdc02(_0x525bda(0x15c)+_0x19b271),console[_0x525bda(0xce)](_0x19b271);}}),cmd({'pattern':_0x2f5412(0xde),'react':'🥏','alias':['groupinfo'],'desc':_0x2f5412(0xd8),'category':_0x2f5412(0x138),'use':'.ginfo','filename':__filename},async(_0x3fa1cb,_0xea41c4,_0x454a51,{from:_0x129cc4,l:_0x610d5,quoted:_0x3e3f08,body:_0x266075,isCmd:_0x563858,command:_0x5b5d9f,args:_0x5de769,q:_0x101960,isGroup:_0x3658a1,sender:_0x6181fe,senderNumber:_0x3c0b2a,botNumber2:_0x4ad9e9,botNumber:_0x2513ce,pushname:_0x38c216,isMe:_0x58f72a,isOwner:_0xaab47f,groupMetadata:_0xbb1e15,groupName:_0x37ecf3,participants:_0x56def2,groupAdmins:_0x4a80a8,isBotAdmins:_0x558c96,isCreator:_0x95e6d2,isDev:_0x523c3e,isAdmins:_0x111530,reply:_0x51d024})=>{const _0x6826b0=_0x2f5412;try{if(!_0x58f72a)return _0x51d024(_0x6826b0(0x14b));await _0x3fa1cb[_0x6826b0(0x149)](_0x129cc4,'block');}catch(_0x50d4d0){_0x51d024(_0x6826b0(0x15c)+_0x50d4d0),console[_0x6826b0(0xce)](_0x50d4d0);}}),cmd({'pattern':_0x2f5412(0x156),'desc':_0x2f5412(0x12a),'category':_0x2f5412(0x138),'react':'➕','filename':__filename},async(_0x1ba822,_0x28eb6b,_0x57842b,{from:_0x38257b,quoted:_0x1276d2,body:_0x3c0178,isCmd:_0x5066dd,command:_0x5ca98a,args:_0x1f5516,q:_0x4ebb42,isGroup:_0x3374c4,sender:_0x4b9113,senderNumber:_0x3ce72e,botNumber2:_0x25704a,botNumber:_0x5e867f,pushname:_0x5e2d8c,isMe:_0xca45f7,isOwner:_0x1c7344,groupMetadata:_0x221b32,groupName:_0x42a080,participants:_0x1b2f35,groupAdmins:_0x3c8740,isBotAdmins:_0x131765,isAdmins:_0x21c639,reply:_0x9990be})=>{const _0x331abb=_0x2f5412;try{if(!_0x3374c4)return _0x9990be(_0x331abb(0xff));if(!_0x131765)return _0x9990be(_0x331abb(0xe8));if(!_0x21c639&&!_0xca45f7)return _0x9990be(_0x331abb(0x103));const _0x36829c=_0x4ebb42['split']('\x20')[0x0];if(!_0x36829c)return _0x9990be(_0x331abb(0x16c));await _0x1ba822[_0x331abb(0x13f)](_0x38257b,[_0x36829c+_0x331abb(0x175)],_0x331abb(0x156)),await _0x9990be('@'+_0x36829c+_0x331abb(0xfb),{'mentions':[_0x36829c+'@s.whatsapp.net']});}catch(_0x503f5b){console['log'](_0x503f5b),_0x9990be(''+_0x503f5b);}}),cmd({'pattern':_0x2f5412(0x147),'desc':'Remove\x20all\x20members\x20from\x20the\x20group\x20(except\x20bot\x20and\x20group\x20creator).','category':'group','filename':__filename,'react':'🚫'},async(_0x5d11ed,_0x425918,_0x387acb,{from:_0x2919a3,isGroup:_0x37ca3b,isAdmins:_0x3d62e1,isOwner:_0x24b752,isBotAdmins:_0x1d36d0,isMe:_0x1f59bb,groupMetadata:_0x40866d,reply:_0x7d371f})=>{const _0x12faf3=_0x2f5412;try{if(!_0x24b752&&!_0x1f59bb&&!_0x3d62e1&&!_0x1d36d0)return _0x7d371f(_0x12faf3(0x15f));const _0x1a794a=_0x40866d[_0x12faf3(0x124)],_0xa10c4a=_0x5d11ed[_0x12faf3(0xc0)]['id'],_0x1038c3=_0x40866d[_0x12faf3(0x111)][_0x12faf3(0x115)](_0x5f45b8=>_0x5f45b8['id']!==_0x1a794a&&_0x5f45b8['id']!==_0xa10c4a);await _0x5d11ed[_0x12faf3(0x13f)](_0x2919a3,_0x1038c3[_0x12faf3(0xbb)](_0x32c7d0=>_0x32c7d0['id']),_0x12faf3(0xd6)),_0x7d371f(_0x12faf3(0x119));}catch(_0x44f264){console[_0x12faf3(0xe2)](_0x44f264),_0x7d371f('❌\x20Error:\x20'+_0x44f264);}}),cmd({'pattern':_0x2f5412(0x160),'desc':'Tags\x20all\x20the\x20admins\x20in\x20the\x20group.','category':_0x2f5412(0x138),'use':_0x2f5412(0xf5),'filename':__filename},async(_0x9f8c88,_0x36a361,_0x23eb6f,{from:_0x36203a,isGroup:_0x52a2c2,groupMetadata:_0x10d74e,groupAdmins:_0x449f82,reply:_0x5d0159})=>{const _0x3a37e9=_0x2f5412;try{if(!_0x52a2c2)return _0x5d0159(_0x3a37e9(0xc7));const _0x54a24e=_0x449f82;if(_0x54a24e[_0x3a37e9(0xcd)]===0x0)return _0x5d0159(_0x3a37e9(0x12f));let _0x3e9da0='*Tagging\x20all\x20admins\x20in\x20the\x20group:*\x0a\x0a';for(let _0x10df70 of _0x54a24e){_0x3e9da0+='@'+_0x10df70[_0x3a37e9(0xc5)]('@')[0x0]+'\x0a';}await _0x9f8c88[_0x3a37e9(0xfd)](_0x36203a,{'text':_0x3e9da0,'mentions':_0x54a24e},{'quoted':_0x36a361});}catch(_0xe00be7){console[_0x3a37e9(0xe2)](_0x3a37e9(0x104),_0xe00be7),_0x5d0159('An\x20error\x20occurred\x20while\x20trying\x20to\x20tag\x20all\x20admins.\x20Please\x20try\x20again.');}}),cmd({'pattern':_0x2f5412(0x105),'desc':_0x2f5412(0xf7),'alias':[_0x2f5412(0x10e)],'category':_0x2f5412(0x124),'use':_0x2f5412(0x129),'filename':__filename},async(_0x3ffd8d,_0x5a6e7a,_0x27e1d5,{from:_0x29f66d,l:_0x5eb4c3,quoted:_0x3be8c6,body:_0x31612d,isCmd:_0x5954cf,command:_0x2967b1,args:_0x108968,q:_0x596b78,isGroup:_0x2ae213,sender:_0x5062cd,senderNumber:_0x5bdc8c,botNumber2:_0x1c1909,botNumber:_0x1711cb,pushname:_0x5427ba,isMe:_0x1f38e0,isOwner:_0x1b6c18,groupMetadata:_0x8c5d2e,groupName:_0x56f054,participants:_0x44dba5,groupAdmins:_0x1044e5,isBotAdmins:_0x47337e,isAdmins:_0x2cd88e,reply:_0x202552})=>{const _0x4b5ce6=_0x2f5412;if(!_0x1b6c18)return _0x202552(_0x4b5ce6(0xd3));(!_0x596b78||!_0x27e1d5[_0x4b5ce6(0x155)])&&_0x202552(_0x4b5ce6(0x122));const _0x577d76=_0x596b78[_0x4b5ce6(0xc5)]('\x20&\x20')[0x0],_0x40f49b=_0x596b78[_0x4b5ce6(0xc5)](_0x4b5ce6(0x153))[0x1];let _0x29b220=0x0;const _0x4f3179=_0x40f49b;let _0x4c853b,_0x436386={};_0x436386['key']=_0x5a6e7a[_0x4b5ce6(0x155)]?.[_0x4b5ce6(0xc1)]?.[_0x4b5ce6(0xe0)];if(_0x5a6e7a['quoted']?.[_0x4b5ce6(0x133)]?.[_0x4b5ce6(0x165)]?.[_0x4b5ce6(0x157)]){let _0x5794d1=_0x5a6e7a[_0x4b5ce6(0x155)][_0x4b5ce6(0x133)]['message']['documentMessage'][_0x4b5ce6(0x101)];const _0x53bad5=require(_0x4b5ce6(0x131));let _0x295072=_0x53bad5[_0x4b5ce6(0x144)](_0x5794d1);_0x5a6e7a[_0x4b5ce6(0x155)][_0x4b5ce6(0x133)][_0x4b5ce6(0x165)][_0x4b5ce6(0x157)][_0x4b5ce6(0x10b)]=(_0x4c853b?_0x4c853b:_0x5a6e7a[_0x4b5ce6(0x155)][_0x4b5ce6(0x133)][_0x4b5ce6(0x165)]['documentMessage']['caption'])+'.'+_0x295072;}_0x436386['message']=_0x5a6e7a[_0x4b5ce6(0x155)];while(_0x29b220<_0x4f3179){const _0xa608b0=await _0x3ffd8d['forwardMessage'](_0x577d76,_0x436386,![]);_0x29b220++;}return _0x202552('*Boom\x20sender\x20to:*\x0a\x0a\x20'+_0x577d76);}),cmd({'pattern':_0x2f5412(0x159),'desc':_0x2f5412(0xcf),'category':_0x2f5412(0x124),'use':_0x2f5412(0x126),'react':'🛑','filename':__filename},async(_0x3caf4b,_0x14af00,_0x15f5a7,{from:_0x23be1c,isOwner:_0x593f27,reply:_0x2f77cd})=>{const _0x54dc15=_0x2f5412;if(!_0x593f27)return _0x2f77cd(_0x54dc15(0x166));_0x2f77cd(_0x54dc15(0x10c))[_0x54dc15(0x102)](()=>process[_0x54dc15(0x113)]());}),cmd({'pattern':_0x2f5412(0xb9),'desc':_0x2f5412(0xb1),'category':'owner','use':_0x2f5412(0x117),'react':'📢','filename':__filename},async(_0x390f1f,_0x4f1e51,_0x5a6729,{from:_0x4fb99a,isOwner:_0x49d676,args:_0x3c8dda,reply:_0x5672e2})=>{const _0x2b6273=_0x2f5412;if(!_0x49d676)return _0x5672e2(_0x2b6273(0x166));if(_0x3c8dda['length']===0x0)return _0x5672e2(_0x2b6273(0xd9));const _0x1745b0=_0x3c8dda[_0x2b6273(0x110)]('\x20'),_0x3281c9=Object[_0x2b6273(0xf0)](await _0x390f1f[_0x2b6273(0x128)]());for(const _0x329818 of _0x3281c9){await _0x390f1f[_0x2b6273(0xfd)](_0x329818,{'text':_0x1745b0},{'quoted':_0x4f1e51});}_0x5672e2(_0x2b6273(0x100));}),cmd({'pattern':'clearchats','desc':_0x2f5412(0x171),'category':_0x2f5412(0x124),'use':_0x2f5412(0xec),'react':'🧹','filename':__filename},async(_0x5f16f1,_0x41a307,_0x48cdbe,{from:_0x3d0194,isOwner:_0x5f05b4,reply:_0x1c0cbf})=>{const _0x526f9b=_0x2f5412;if(!_0x5f05b4)return _0x1c0cbf('❌\x20You\x20are\x20not\x20the\x20owner!');try{const _0x467717=_0x5f16f1[_0x526f9b(0x106)]['all']();for(const _0x35c550 of _0x467717){await _0x5f16f1[_0x526f9b(0x14c)](_0x35c550['jid'],_0x526f9b(0x10f));}_0x1c0cbf(_0x526f9b(0xb3));}catch(_0x3bd81f){_0x1c0cbf(_0x526f9b(0x134)+_0x3bd81f[_0x526f9b(0x165)]);}});function _0x1653(){const _0x218a99=['participants','\x0a\x0a📃\x20*Group\x20Description*\x20-\x20','exit','63obfQtQ','filter','ginfo','.broadcast','<group\x20link.>','*🚫\x20All\x20members\x20have\x20been\x20removed\x20from\x20the\x20group\x20(except\x20the\x20bot\x20and\x20group\x20creator).*','image','.promote','.\x20@','6634892yKRTTn','groupAcceptInvite','grouplink','approve','_Invalid\x20request\x20number(s)._','*give\x20me\x20message\x20❌*','Provide\x20the\x20number(s)\x20of\x20the\x20request(s)\x20to\x20reject,\x20separated\x20by\x20commas.','owner','demote','.shutdown','\x0a\x0a👤\x20*Group\x20Creator*\x20-\x20','groupFetchAllParticipating','.boom\x20<jid>\x20&\x20<count>','Add\x20a\x20member\x20to\x20the\x20group.','groupRequestParticipantsUpdate','No\x20pending\x20join\x20requests.','Approved\x20the\x20following\x20+94\x20users:\x0a','View\x20pending\x20join\x20requests','There\x20are\x20no\x20admins\x20in\x20this\x20group.','unmute','mime-types','desc','documentWithCaptionMessage','❌\x20Error\x20clearing\x20chats:\x20','538210LOWCWw','mute_cyber','mute','group','*Error\x20!!*','Error\x20retrieving\x20join\x20requests:','joins\x20group\x20by\x20link','686395CfEoPC','To\x20Demote\x20Admin\x20to\x20Member','Change\x20to\x20group\x20settings\x20to\x20all\x20members\x20can\x20send\x20messages.','groupParticipantsUpdate','To\x20leave\x20from\x20the\x20group','36PlVwha','🚫\x20*You\x20must\x20be\x20admin\x20frist*','AUTO_ADD_Country_Code','extension','groupLeave','.invite','end','337132LmTHum','updateBlockStatus','Automatically\x20approve\x20Specific\x20Country\x20users\x20in\x20the\x20waiting\x20list','⛔\x20*OWNER\x20ONLY\x20COMMAND*\x20','modifyChat','🔓\x20*Good\x20Bye\x20All*','<text>','24pDZnnh','.del','requests','Error\x20accepting\x20join\x20requests:','\x20&\x20','close','quoted','add','documentMessage','admin','shutdown','reject','kick','⛔\x20*Error\x20accurated\x20!!*\x0a\x0a','This\x20is\x20Group\x20only\x20Command','*User\x20all\x20ready\x20not\x20and\x20admin\x20✅*','This\x20command\x20can\x20only\x20be\x20used\x20by\x20the\x20bot\x20owner.','tagadmin','not_announcement','Pending\x20Join\x20Requests:\x0a\x0a','startsWith','glink','message','❌\x20You\x20are\x20not\x20the\x20owner!','hidetag','groupMetadata','left','🚫\x20*Error\x20Accurated\x20!!*\x0a\x0a','.unmute','Please\x20provide\x20a\x20phone\x20number\x20to\x20add.','Please\x20give\x20me\x20Query','159ZTMPxo','Change\x20to\x20group\x20settings\x20to\x20only\x20admins\x20can\x20send\x20messages.','../command','Clear\x20all\x20chats\x20from\x20the\x20bot.','866016eKIPCJ','❌\x20*Bot\x20must\x20be\x20Admin\x20Frist*\x20\x20❗','.demote','@s.whatsapp.net','*Promoted\x20as\x20an\x20admin\x20✔️*','*Group\x20chat\x20muted🔒*','_I\x27m\x20not\x20an\x20admin\x20in\x20this\x20group._','Broadcast\x20a\x20message\x20to\x20all\x20groups.','htag','🧹\x20All\x20chats\x20cleared\x20successfully!','groupRequestParticipantsList','size','accept','needbotadmins','*Group\x20chat\x20unmuted\x20🔓*','broadcast','../lib/functions','map','*User\x20no\x20longer\x20an\x20admin\x20✔️*','.ginfo','https://chat.whatsapp.com/','To\x20Add\x20a\x20participatant\x20as\x20a\x20Admin','user','fakeObj','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','_Accepted\x20','trim','split','profilePictureUrl','This\x20command\x20is\x20only\x20for\x20groups.','⛔\x20*Bot\x20must\x20be\x20Admin\x20Frist*\x20','main','subject','Error\x20in\x20Joining\x20Group','15150nSLrqy','length','log','Shutdown\x20the\x20bot.','553UfPnLL','Failed\x20to\x20accept\x20join\x20requests.\x20Please\x20try\x20again\x20later.','announcement','*Owner\x20Only\x20❌*','Failed\x20to\x20reject\x20join\x20requests.\x20Please\x20try\x20again\x20later.','kickme','remove','I\x27m\x20not\x20an\x20admin\x20in\x20this\x20group.','Get\x20group\x20informations.','📢\x20Please\x20provide\x20a\x20message\x20to\x20broadcast.','No\x20participants\x20are\x20in\x20the\x20waiting\x20list.','27640knzzUJ','groupSettingUpdate','To\x20Get\x20the\x20Group\x20Invite\x20link','block','promote','key','contextInfo','error','\x0a\x0a📬\x20*Participant\x20Count*\x20-\x20','participant','chat','*Bot\x20must\x20be\x20admin\x20first\x20❗*','🚫\x20*This\x20is\x20Group\x20command*','*🚨\x20ᴘʟᴇᴀꜱᴇ\x20ɢɪᴠᴇ\x20ᴍᴇ\x20ᴀᴅᴍɪɴ.*','I\x20need\x20to\x20be\x20a\x20group\x20admin\x20to\x20perform\x20this\x20action.','🚫\x20*Bot\x20must\x20be\x20Admin\x20frist*','.reject\x20<request\x20numbers>','.clearchats','forEach','_Provide\x20the\x20number(s)\x20of\x20the\x20request(s)\x20to\x20accept,\x20separated\x20by\x20commas._','includes','keys','catch','Reject\x20group\x20join\x20request(s)','Error:\x20','whatsapp.com','.tagadmin','To\x20Remove\x20a\x20participant\x20from\x20Group','forward\x20msgs','\x20join\x20request(s)._','some','🚫\x20*Couldn\x27t\x20find\x20any\x20user\x20in\x20context*','\x20has\x20been\x20added\x20to\x20the\x20group.','🚫\x20*You\x20must\x20be\x20a\x20admin\x20frist*','sendMessage','Error\x20rejecting\x20join\x20requests:','*🚨\x20ᴛʜɪꜱ\x20ᴄᴏᴍᴍᴀɴᴅ\x20ᴄᴀɴ\x20ᴏɴʟʏ\x20ʙᴇ\x20ᴜꜱᴇᴅ\x20ɪɴ\x20ɢʀᴏᴜᴘ*','📢\x20Message\x20broadcasted\x20to\x20all\x20groups.','mimetype','then','*🚨\x20ᴏɴʟʏ\x20ᴀᴅᴍɪɴ\x20ᴄᴀɴ\x20ʏᴏᴜ\x20ᴛʜɪꜱ\x20ᴄᴏᴍᴍᴀɴᴅ*','Error\x20tagging\x20admins:','boom','chats','jid','remoteJid','onlygroup','msg','fileName','🛑\x20Shutting\x20down...','del','bbb','delete','join'];_0x1653=function(){return _0x218a99;};return _0x1653();}
