function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6g4swmyEyb1":
        Script1();
        break;
      case "6PIOY0MfOlS":
        Script2();
        break;
      case "6cXnmsuGyvm":
        Script3();
        break;
      case "5u0jfSJ5ajV":
        Script4();
        break;
      case "6FxsIpTsWrx":
        Script5();
        break;
      case "6jfER7cMjvE":
        Script6();
        break;
      case "6IoZkUihypT":
        Script7();
        break;
      case "6BGTvJGKkcr":
        Script8();
        break;
      case "5iXQwN00Ne0":
        Script9();
        break;
      case "6RWJNpOV0G4":
        Script10();
        break;
      case "67jlXVZquta":
        Script11();
        break;
      case "6iiWN85YJkV":
        Script12();
        break;
      case "5qaHWETpLvA":
        Script13();
        break;
      case "5bjaraGfxkp":
        Script14();
        break;
      case "5vwEgwhEmHa":
        Script15();
        break;
      case "5YXhX9QD4ps":
        Script16();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5jo3yGTMt8n');
const duration = 3000;
const easing = 'ease-out';
const id = '5wLA0GWEE0g';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5xXvSK6ufea');
const duration = 250;
const easing = 'ease-out';
const id = '5wqcFRcCODX';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5xXvSK6ufea');
const duration = 250;
const easing = 'ease-out';
const id = '5wqcFRcCODX_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6fuAklYtMrp');
const duration = 250;
const easing = 'ease-out';
const id = '6Hfd7zednzx';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6fuAklYtMrp');
const duration = 250;
const easing = 'ease-out';
const id = '6Hfd7zednzx_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6fnsuPiT3Vp');
const duration = 250;
const easing = 'ease-out';
const id = '6hxw8TQAmpk';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6fnsuPiT3Vp');
const duration = 250;
const easing = 'ease-out';
const id = '6hxw8TQAmpk_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6MxZGlY7DDk');
const duration = 250;
const easing = 'ease-out';
const id = '6IH3MjNtDod';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6MxZGlY7DDk');
const duration = 250;
const easing = 'ease-out';
const id = '6IH3MjNtDod_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5s65Xfz5evr');
const duration = 2000;
const easing = 'ease-out';
const id = '5Z0jyuNTCkQ';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('5hJdlcxfeAF');
const duration = 250;
const easing = 'ease-out';
const id = '5y3SK3Xqalo';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5hJdlcxfeAF');
const duration = 250;
const easing = 'ease-out';
const id = '5y3SK3Xqalo_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5bEmL39NnoL');
const duration = 3500;
const easing = 'ease-out';
const id = '5rNCmsEcVIH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('642C1P4FEWG');
const duration = 1500;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6VlpCGrWdnt';
const growAmount = 1;
const delay = 1400;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  const target = object('632McWjfuPu');
const duration = 250;
const easing = 'ease-out';
const id = '5cQPjg9qnE3';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('632McWjfuPu');
const duration = 250;
const easing = 'ease-out';
const id = '5cQPjg9qnE3_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
