function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bQCRcHDZS2":
        Script1();
        break;
      case "64Pn5S40oqA":
        Script2();
        break;
      case "5rKdDqmS2DG":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('69A2TBU2Hok');
const duration = 750;
const easing = 'linear';
const id = '6YafaPpE8FW';
const growAmount = 0.1;
const delay = 51000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6QN5A35RbEj');
const duration = 750;
const easing = 'linear';
const id = '6YafaPpE8FW';
const growAmount = 0.1;
const delay = 52875;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5ugZbvMDLWt');
const duration = 750;
const easing = 'linear';
const id = '6YafaPpE8FW';
const growAmount = 0.1;
const delay = 54062;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
