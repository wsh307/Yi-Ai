'use strict';const _0x333cfa=_0x2ca7;(function(_0x1c895e,_0x3bd201){const _0x166813=_0x2ca7,_0x1c2873=_0x1c895e();while(!![]){try{const _0x6a017a=-parseInt(_0x166813(0x173))/0x1+parseInt(_0x166813(0x168))/0x2+-parseInt(_0x166813(0x175))/0x3+-parseInt(_0x166813(0x179))/0x4+parseInt(_0x166813(0x16d))/0x5*(parseInt(_0x166813(0x16b))/0x6)+-parseInt(_0x166813(0x16e))/0x7+-parseInt(_0x166813(0x177))/0x8*(-parseInt(_0x166813(0x16c))/0x9);if(_0x6a017a===_0x3bd201)break;else _0x1c2873['push'](_0x1c2873['shift']());}catch(_0x23a29b){_0x1c2873['push'](_0x1c2873['shift']());}}}(_0x21a1,0xf173a));Object['defineProperty'](exports,_0x333cfa(0x178),{'value':!![]}),exports[_0x333cfa(0x170)]=void 0x0;const axios_1=require(_0x333cfa(0x16f));function _0x2ca7(_0x201085,_0x196781){const _0x21a100=_0x21a1();return _0x2ca7=function(_0x2ca799,_0x11a09c){_0x2ca799=_0x2ca799-0x167;let _0x6e8b59=_0x21a100[_0x2ca799];return _0x6e8b59;},_0x2ca7(_0x201085,_0x196781);}function formatSearchData(_0x371716,_0x1882a0){const _0xc6a637=_0x333cfa,_0x4e7cc7=_0x371716[_0xc6a637(0x171)](({title:_0x1c3c1e,body:_0x282d1b,href:_0x43cd5f})=>'\x27'+_0x1c3c1e+_0xc6a637(0x167)+_0x282d1b+'\x20;')['join']('\x0a\x0a'),_0x17e480='Instructions:\x20Reply\x20to\x20me\x20in\x20the\x20language\x20of\x20my\x20request\x20or\x20question\x20above.\x20Give\x20a\x20comprehensive\x20answer\x20to\x20the\x20question\x20or\x20request\x20I\x20have\x20made\x20above.\x20Below\x20are\x20some\x20results\x20from\x20a\x20web\x20search.\x20Use\x20the\x20following\x20results\x20to\x20summarize\x20the\x20answers\x20\x0a\x0a';return _0x1882a0+'\x0a\x0a'+_0x17e480+'\x0a'+_0x4e7cc7;}function _0x21a1(){const _0x5c9a8c=['6ZDvrWY','118962iGWxBX','6602680hZZeFV','1771497XcjNcn','axios','compileNetwork','map','get','636103GWQZzD','error:\x20','3588399myvjcw','https://s0.awsl.app/search?q=','1840ikfkpM','__esModule','7386084OZPTPG','\x27\x20:\x20','1120276hlWLPk','default','data'];_0x21a1=function(){return _0x5c9a8c;};return _0x21a1();}async function compileNetwork(_0x231c50,_0x17b218=0x7){const _0x41cb17=_0x333cfa;let _0x137669=[];try{const _0xc13ca5=await axios_1[_0x41cb17(0x169)][_0x41cb17(0x172)](_0x41cb17(0x176)+_0x231c50+'&max_results='+_0x17b218);_0x137669=_0xc13ca5[_0x41cb17(0x16a)];}catch(_0x4849ab){console['log'](_0x41cb17(0x174),_0x4849ab),_0x137669=[];}return _0x137669['length']===0x0?_0x231c50:formatSearchData(_0x137669,_0x231c50);}exports[_0x333cfa(0x170)]=compileNetwork;