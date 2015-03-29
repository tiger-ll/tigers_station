
(function(compId){"use strict";var _=null,y=true,n=false,x12='break-word',x48='_2',x38='dots',e32='${line1}',e26='${go}',x58='Symbol_3',e25='${smaller}',e27='${Text2}',d='display',lf='left',x55='76px',x41='50px',e30='${btn_1}',e31='${Rectangle}',x37='auto',x44='_3Copy3',tp='top',x10='400',xc='rgba(0,0,0,1)',x43='100px',x46='105px',zy='scaleY',rz='rotateZ',e28='${flip_right}',x15='rgba(0,0,0,0)',zx='scaleX',x50='_1Copy2',e29='${canvas}',x45='true',x36='5px',x42='_2Copy4',x11='none solid rgb(0, 0, 0)',x56='5',x='text',e64='${Symbol_3}',x18='15',x35='0px',h='height',x61='155px',x51='_2Copy2',x60='Symbol_1',x59='150px',g='image',x54='Symbol_2',p='px',o='opacity',x53='matrix',x5='5.0.0.375',x47='_1',x49='_3',x9='comfortaa, sans-serif',x4='5.0.0',e62='${Symbol_2}',i='none',x13='rgba(61,61,61,1.00)',l='normal',x40='rgba(53,53,53,1.00)',x57='105',x39='_1Copy4',e63='${Symbol_1}',b='block',w='width',m='rect',x8='24',e33='${enlarge}',e34='${flip_left}',x52='_3Copy',x24='rgba(255,255,255,1)';var g3='TweenMax.min.js',g19='flip_left.png',g2='TimelineMax.min.js',g23='enlarge.png',g21='flip_right.png',g1='jquery.gsap.min.js',g22='smaller.png',g16='btn_1.png';var s17="go",s20="btnGp",s14="Simple 3D in Adobe Edge",s6="by Tiger<br>",s7="txt_1";var im='images/',aud='media/',vid='media/',js='js/',fonts={'comfortaa, sans-serif':'<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,js+g2,js+g3],symbols={"stage":{v:x4,mv:x4,b:x5,stf:w,cg:i,rI:n,cn:{dom:[{id:'Text2',v:b,t:x,r:['567px','152px','146px','33px','auto','auto'],text:s6,align:"center",userClass:s7,n:[x9,[x8,p],xc,x10,x11,l,x12,l]},{id:'Rectangle',t:m,r:['542px','283px','195px','4px','auto','auto'],f:[x13],s:[0,xc,i],tf:[[],[],[],['0.13']]},{id:'line1',v:b,t:x,r:['488px','78px','303px','33px','auto','auto'],o:0,text:s14,align:"center",userClass:s7,n:[x9,[x8,],xc,l,i,"",x12,l],tf:[[],[],[],['0.7','0.7']]},{id:'btn_1',v:i,t:g,r:['623px','360px','34px','33px','auto','auto'],tt:'restore',cu:'pointer',o:0,f:[x15,im+g16,'0px','0px'],tf:[[],['1080'],[],['1.5','1.5']]},{id:'go',v:b,t:x,r:['621px','363px','37px','33px','auto','auto'],cu:'pointer',o:0,text:s17,align:"center",n:[x9,[x18,p],xc,x10,x11,l,x12,l]},{id:'canvas',symbolName:'canvas',v:i,t:m,r:['561','147','155','105','auto','auto']},{id:'flip_left',v:i,t:g,r:['544px','359px','34px','34px','auto','auto'],tt:'rotate right',cu:'pointer',f:[x15,im+g19,'0px','0px'],userClass:s20},{id:'flip_right',v:i,t:g,r:['465px','359px','34px','34px','auto','auto'],tt:'rotate left',cu:'pointer',f:[x15,im+g21,'0px','0px'],userClass:s20},{id:'smaller',v:i,t:g,r:['774px','359px','34px','34px','auto','auto'],cu:'pointer',f:[x15,im+g22,'0px','0px'],userClass:s20},{id:'enlarge',v:i,t:g,r:['699px','359px','34px','34px','auto','auto'],cu:'pointer',f:[x15,im+g23,'0px','0px'],userClass:s20}],style:{'${Stage}':{isStage:true,r:['null','null','1280px','400px','auto','auto'],overflow:'hidden',f:[x24]}}},tt:{d:5250,a:y,data:[["eid68",d,5000,0,"linear",e25,i,b],["eid31",lf,3500,0,"easeOutQuad",e26,'621px','621px'],["eid14",o,1000,1500,"easeOutElastic",e27,'0','1'],["eid65",d,5000,0,"linear",e28,i,b],["eid50",d,5000,0,"easeOutQuad",e26,b,i],["eid15",zy,1000,1500,"easeOutElastic",e27,'0.7','1'],["eid64",d,5000,0,"linear",e29,i,b],["eid16",d,2500,0,"easeOutElastic",e30,i,b],["eid8",zx,500,1500,"easeOutElastic",e31,'0','1'],["eid41",zx,4250,1000,"easeOutExpo",e31,'1','0.13'],["eid18",o,2500,750,"easeOutQuad",e30,'0','1'],["eid29",o,2750,750,"easeOutQuad",e26,'0','1'],["eid32",o,3500,1500,"easeOutQuad",e26,'1','0'],["eid19",rz,2500,750,"easeOutCirc",e30,'0deg','1080deg'],["eid40",rz,3500,750,"easeOutExpo",e31,'0deg','90deg'],["eid12",zy,0,1500,"easeOutElastic",e32,'0.7','1'],["eid51",tp,5000,0,"easeOutQuad",e30,'360px','360px'],["eid13",zx,1000,1500,"easeOutElastic",e27,'0.7','1'],["eid2",o,0,1500,"easeOutElastic",e32,'0','1'],["eid43",h,4250,1000,"easeOutExpo",e31,'4px','1px'],["eid54",tp,3250,0,"easeOutQuad",e26,'363px','363px'],["eid23",zy,2500,750,"easeOutQuad",e30,'1.5','1'],["eid37",d,5000,0,"easeOutQuad",e27,b,i],["eid28",zx,2750,750,"easeOutQuad",e26,'1.5','1'],["eid67",d,5000,0,"linear",e33,i,b],["eid10",zx,0,1500,"easeOutElastic",e32,'0.7','1'],["eid66",d,5000,0,"linear",e34,i,b],["eid30",zy,2750,750,"easeOutQuad",e26,'1.5','1'],["eid44",tp,4250,1000,"easeOutQuad",e31,'125px','363px'],["eid46",zy,4250,0,"easeOutExpo",e31,'1','1'],["eid47",zy,5250,0,"easeOutExpo",e31,'1','1'],["eid48",lf,4250,0,"easeOutExpo",e31,'542px','542px'],["eid49",lf,5250,0,"easeOutExpo",e31,'542px','542px'],["eid38",d,5000,0,"easeOutQuad",e32,b,i],["eid21",zx,2500,750,"easeOutQuad",e30,'1.5','1']]}},"Symbol_3":{v:x4,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{r:[x35,x35,x36,x36,x37,x37],uc:x38,id:x39,s:[0,xc,i],t:m,f:[x40]},{r:[x35,x41,x36,x36,x37,x37],uc:x38,id:x42,s:[0,xc,i],t:m,f:[x40]},{r:[x35,x43,x36,x36,x37,x37],uc:x38,id:x44,s:[0,xc,i],t:m,f:[x40]}],style:{'${symbolSelector}':{isStage:x45,r:[undefined,undefined,x36,x46]}}},tt:{d:0,a:y,data:[]}},"Symbol_2":{v:x4,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{r:[x35,x35,x36,x36,x37,x37],uc:x38,id:x47,s:[0,xc,i],t:m,f:[x40]},{r:[x35,x41,x36,x36,x37,x37],uc:x38,id:x48,s:[0,xc,i],t:m,f:[x40]},{r:[x35,x43,x36,x36,x37,x37],uc:x38,id:x49,s:[0,xc,i],t:m,f:[x40]}],style:{'${symbolSelector}':{isStage:x45,r:[undefined,undefined,x36,x46]}}},tt:{d:0,a:y,data:[]}},"Symbol_1":{v:x4,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{r:[x35,x35,x36,x36,x37,x37],uc:x38,id:x50,s:[0,xc,i],t:m,f:[x40]},{r:[x35,x41,x36,x36,x37,x37],uc:x38,id:x51,s:[0,xc,i],t:m,f:[x40]},{r:[x35,x43,x36,x36,x37,x37],uc:x38,id:x52,s:[0,xc,i],t:m,f:[x40]}],style:{'${symbolSelector}':{isStage:x45,r:[undefined,undefined,x36,x46]}}},tt:{d:0,a:y,data:[]}},"canvas":{v:x4,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{t:m,uc:x53,v:i,sN:x54,r:[x55,x35,x56,x57,x37,x37],id:x54},{t:m,uc:x53,v:i,sN:x58,r:[x59,x35,x56,x57,x37,x37],id:x58},{t:m,uc:x53,v:i,sN:x60,r:[x35,x35,x56,x57,x37,x37],id:x60}],style:{'${symbolSelector}':{isStage:x45,r:[undefined,undefined,x61,x46]}}},tt:{d:5250,a:y,data:[["eid60",lf,5250,0,"linear",e62,'76px','76px'],["eid57",lf,5250,0,"linear",e63,'0px','0px'],["eid61",d,5000,0,"linear",e63,i,b],["eid58",lf,5250,0,"linear",e64,'150px','150px'],["eid63",d,5000,0,"linear",e62,i,b],["eid62",d,5000,0,"linear",e64,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-431158218");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${go}","click",function(sym,e){sym.play();var txtWip=sym.$(".txt_1");TweenMax.set(txtWip,{transformPerspective:500});TweenMax.to(txtWip,1,{opacity:0,z:-200});});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){var t1=new TimelineLite;var t2=new TimelineLite;var btnGp=sym.$(".btnGp");t1.set(sym.$(".matrix"),{transformPerspective:300}),t1.staggerFrom(sym.$(".matrix"),.75,{opacity:0,z:-200,ease:Back.easeOut},.5);t2.set(btnGp,{transformPerspective:500}),t2.staggerFrom(btnGp,.5,{opacity:0,z:-300,ease:Back.easeOut},.3);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${flip_right}","click",function(sym,e){TweenMax.to(sym.$("canvas"),.5,{rotationY:-30,rotationX:30,ease:Back.easeOut});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${flip_left}","click",function(sym,e){TweenMax.to(sym.$("canvas"),.5,{rotationY:30,rotationX:30,ease:Back.easeOut});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn_1}","click",function(sym,e){TweenMax.to(sym.$("canvas"),.5,{rotationX:0,rotationY:0,scale:1});TweenMax.to(sym.$(".dots"),.5,{scale:1});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${enlarge}","click",function(sym,e){TweenMax.staggerTo(sym.$(".dots"),.5,{scale:10,ease:Elastic.easeOut},.2);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${smaller}","click",function(sym,e){TweenMax.staggerTo(sym.$(".dots"),.5,{scale:1,ease:Elastic.easeOut},.2);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_3'
(function(symbolName){})("Symbol_3");
//Edge symbol end:'Symbol_3'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'canvas'
(function(symbolName){})("canvas");
//Edge symbol end:'canvas'
})})(AdobeEdge.$,AdobeEdge,"EDGE-431158218");