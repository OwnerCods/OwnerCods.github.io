(this["webpackJsonpweb3-test-app"]=this["webpackJsonpweb3-test-app"]||[]).push([[1],{34:function(e,t,n){e.exports={dome:"Dome_dome__1EXkU",card:"Dome_card__2LZVc",Staking:"Dome_Staking__2ZHX4",input:"Dome_input__3rVfp",stakeButton:"Dome_stakeButton__37gVw",unstakeButton:"Dome_unstakeButton__2AO6b"}},61:function(e,t,n){},66:function(e,t,n){e.exports={card:"Card_card__3im4Q"}},67:function(e,t,n){e.exports={home:"Home_home__2_M7_"}},86:function(e,t){},87:function(e,t){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a,s=n(4),c=n.n(s),i=n(62),r=n.n(i),o=n(26),u=n(27),l=(n(79),n(80),Object(o.b)(a||(a=Object(u.a)(["\n\n*,*::before,*::after{\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody{\n\t box-sizing: border-box;\n\tmargin: 0;\n\t\n\tfont-family : 'Sora', sans-serif;\n\t\n}\n\nh1,h2,h3,h4,h5,h6{\n\tmargin: 0;\n\tpadding: 0;\n}\n\na{\n\tcolor:inherit;\n\ttext-decoration:none;\n}\n\n\n\n"])))),p={body:"#202020",text:"#fff",bodyRgba:"32,32,32",textRgba:"255,255,255",carouselColor:"#EEEDDE",fontxs:"0.75em",fontssm:"0.875em",fontmd:"1em",fontlg:"1.25em",fontxl:"2em",fontxxl:"3em",fontxxxl:"4em",fontButton:"0.875em",navHeight:"5rem"},d=n(15),b=n(104),m=n(31),j=n(1),y=n.n(j),x=n(66),h=n.n(x),f=n(5),O=function(e){return Object(f.jsx)("div",{className:"".concat(h.a.card," ").concat(e.className),children:e.children})},v=n(67),g=n.n(v),w=n(68),T=n(47),N=n(69),k="https://mainnet.infura.io/v3/739f0c6925d94994ac75d9247cdb9499",M="https://ropsten.infura.io/v3/739f0c6925d94994ac75d9247cdb9499",_="https://goerli.infura.io/v3/704b30946a89416690dba45196bfe8da",C="https://rpc.ankr.com/bsc",B="https://data-seed-prebsc-1-s1.binance.org:8545/",E="https://polygon-rpc.com/",I=new w.a({supportedChainIds:[1,3,4,5,56,97,137]}),D=new T.a({rpc:{1:k,3:M,5:_,56:C,97:B,137:E},qrcode:!0,pollingInterval:15e3});var P,S,A,H,F=new N.a({url:k,appName:"demo-app",supportedChainIds:[1]}),U=function(){var e=Object(d.b)(),t=function(){var t=Object(m.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.activate(I);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(m.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(n=D)&&n instanceof T.a&&(n.walletConnectProvider=void 0),t.next=4,e.activate(D);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}var n}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(m.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.activate(F);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)(O,{className:g.a.home,children:[Object(f.jsx)("h2",{children:"Connect Wallet"}),e.account?Object(f.jsx)("p",{children:e.account}):Object(f.jsx)("p",{children:" Not address"}),Object(f.jsxs)("div",{className:"flex flex-col space-y-2 items-start pt-10  ",children:[Object(f.jsx)("button",{className:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded",onClick:t,children:"Metamask Connect"}),Object(f.jsx)("button",{className:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded",onClick:n,children:"Walletconnect"}),Object(f.jsx)("button",{className:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded",onClick:a,children:"Coinbase Connect"})]})]})},V=n(20),z=n(34),L=n.n(z),W=function(){var e=Object(d.b)(),t=Object(s.useState)(""),n=Object(V.a)(t,2),a=n[0],c=n[1],i=Object(d.b)(),r=i.account,o=i.library;Object(s.useEffect)((function(){null===o||void 0===o||o.getBalance(r).then((function(e){c(e/1e18)}))}));var u=function(e){return Object(f.jsx)("div",{className:"".concat(L.a.card," ").concat(e.className),children:e.children})};return Object(f.jsxs)(u,{className:L.a.dome,children:[Object(f.jsx)("h2",{children:"\u269c Connect Panel\u269c"})," ",Object(f.jsx)("br",{}),e.account?Object(f.jsxs)("h2",{children:["Account: ",e.account]}):Object(f.jsx)("p",{children:"Not connected"}),e.account?Object(f.jsxs)("h2",{children:[" Balance: ",a," ETH  "]}):Object(f.jsx)("p",{children:" "}),Object(f.jsx)("div",{className:"flex flex-col space-y-2 items-start pt-10  ",children:Object(f.jsx)("button",{className:"bg-red-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ",onClick:function(){try{e.deactivate()}catch(t){console.log(t)}},children:"Disconnect"})})]})},J=function(){var e=Object(d.b)();return Object(f.jsx)("div",{children:Object(f.jsx)("main",{children:e.account?Object(f.jsx)(W,{}):Object(f.jsx)(U,{})})})},R=n(25),X=o.c.h1(P||(P=Object(u.a)(["\n\nfont-family: 'Akaya Telivigala', cursive;\nfont-size: ",";\ncolor: ",";\ntransition: all 0.2s ease;\n\n&:hover{\n\ttransform: scale(1.1);\n}\n\n"])),(function(e){return e.theme.fontxxxl}),(function(e){return e.theme.text})),Z=function(){return Object(f.jsx)(X,{children:Object(f.jsx)(R.b,{to:"/",children:"Plexus"})})},q=function(){var e=Object(d.b)(),t=Object(d.b)().chainId;return Object(f.jsx)("div",{children:Object(f.jsxs)("header",{className:"main-header",children:[Object(f.jsx)(Z,{}),Object(f.jsx)("nav",{className:"nav",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:e.account?Object(f.jsxs)("p",{children:["ChainId: ",Object(f.jsx)("b",{children:t})]}):Object(f.jsx)("p",{})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://bscscan.com",children:e.account?Object(f.jsxs)("p",{children:["\ud83c\udf0e ",e.account.substring(0,6),"....",e.account.substring(e.account.length-5)]}):Object(f.jsx)("p",{children:"\ud83d\udd34Not connected"})})})]})})]})})},Q=n(41),G=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"retrieve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"num",type:"uint256"}],name:"storeNum",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"}],K=function(e,t){var n=e.getSigner(t).connectUnchecked();return new Q.a("0xC60Ce895dE7B428BbD685d7fbbBB9a54eF4656Ae",G,n)},Y=o.c.span(S||(S=Object(u.a)(["\n\tcolor: #202020;\n\tfont-family: 'Akaya Telivigala', cursive;\n\tfont-size: 90px;\n\ttransition: all 0.2s ease;\n\t&:hover{\n\t\ttransform: scale(1.1);\n\t}  \n"]))),$=o.c.div(A||(A=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-top: 87.5px;\n"]))),ee=o.c.section(H||(H=Object(u.a)(["\n\tmin-height:500px;\n\twidth: 100%;\n\tposition: relative;\n\tbackground-color: #f2f3ff;\n"]))),te=function(e){var t=Object(s.useState)(""),n=Object(V.a)(t,2),a=n[0],c=n[1],i=Object(d.b)(),r=i.account,o=i.library,u=Object(d.b)().chainId,l=Object(d.b)();Object(s.useEffect)((function(){null===o||void 0===o||o.getBalance(r).then((function(e){c(e/1e18)}))}));var p=function(){var e=Object(m.a)(y.a.mark((function e(){var t,n,a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Math.floor(1e5*Math.random()),n=K(l.library,l.account),a={gasLimit:23e4},e.next=6,n.storeNum(t,a);case 6:s=e.sent,console.log(s),alert("write "+t),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),b=function(e){return Object(f.jsx)("div",{className:"".concat(L.a.card," ").concat(e.className),children:e.children})};return Object(f.jsxs)(ee,{children:[Object(f.jsx)($,{children:Object(f.jsxs)(Y,{children:[Object(f.jsx)(R.b,{to:"/",children:"Plexus"})," "]})}),Object(f.jsxs)(b,{className:L.a.dome,children:[Object(f.jsx)("h2",{children:"USE PANEL Presale"})," ",Object(f.jsx)("br",{}),l.account?Object(f.jsxs)("p",{children:["User account: ",l.account.substring(0,6),"....",l.account.substring(l.account.length-5)]}):Object(f.jsx)("p",{children:"Not connected"}),Object(f.jsxs)("h3",{children:["balance: ",a]}),Object(f.jsxs)("div",{className:"flex flex-col space-y-2 items-start pt-10  ",children:[Object(f.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded   ",onClick:p,children:"press get number"}),Object(f.jsx)("button",{className:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ",onClick:p,children:"Buy Token"})]}),"\xa0 \xa0",Object(f.jsx)("p",{children:"timeHold:"}),"cId: ",u]})]})},ne=n(11),ae=(n(61),function(){Object(d.b)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"content"}),Object(f.jsx)("div",{className:"voting"})]})}),se=function(){Object(d.b)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"contentProposal",children:[Object(f.jsxs)("div",{className:"proposal",children:[Object(f.jsx)(R.b,{to:"/",children:Object(f.jsx)("div",{className:"backHome",children:"Overview"})}),Object(f.jsx)("div",{className:"proposalOverview",children:Object(f.jsx)("div",{className:"proposer",children:Object(f.jsx)("span",{children:"Proposed By "})})})]}),Object(f.jsxs)("div",{className:"widgets",children:[Object(f.jsx)("div",{className:"extraWidgetInfo",children:Object(f.jsx)("div",{className:"progress"})}),Object(f.jsx)("div",{className:"extraWidgetInfo",children:Object(f.jsx)("div",{className:"progress",children:Object(f.jsx)("div",{className:"progressPercentage"})})})]}),Object(f.jsx)("div",{className:"votesDiv"})]}),Object(f.jsx)("div",{className:"voting"})]})};window.onload=function(){localStorage.clear()};var ce=function(){return Object(f.jsxs)(d.a,{getLibrary:function(e){var t=new b.a(e,"any");return t.pollingInterval=15e3,t},children:[Object(f.jsx)(l,{}),Object(f.jsx)(q,{}),Object(f.jsx)(J,{}),Object(f.jsx)(te,{}),Object(f.jsx)(o.a,{theme:p,children:Object(f.jsxs)(ne.c,{children:[Object(f.jsx)(ne.a,{path:"/",element:Object(f.jsx)(ae,{})}),Object(f.jsx)(ne.a,{path:"/proposal",element:Object(f.jsx)(se,{})})]})})]})};n(94),n(95);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(R.a,{children:Object(f.jsx)(ce,{})})}),document.getElementById("root"))}},[[96,2,4]]]);
//# sourceMappingURL=main.98b636f7.chunk.js.map