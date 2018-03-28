for(var i = 0; i < 329; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {
function waitubcefa055ca8b41f495e4b2edd3fbc5ad1() {

	SetPanelState('u121', 'pd1u121','none','',500,'none','',500);

	SetPanelState('u157', 'pd1u157','none','',500,'none','',500);

	SetPanelState('u186', 'pd1u186','none','',500,'none','',500);

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u9', 'pd0u9','none','',500,'fade','',500);

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);
}
setTimeout(waitubcefa055ca8b41f495e4b2edd3fbc5ad1, 700);

}

});

widgetIdToMoveFunction['u186'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToPanelStateChangeFunction['u186'] = function() {
var e = windowEvent;

if ((GetPanelState('u186')) == ('pd0u186')) {

}
else
if (true) {

}

}

widgetIdToHideFunction['u289'] = function() {
var e = windowEvent;

if (true) {

	SetPanelVisibility('u267','hidden','none',500);

}

}

widgetIdToHideFunction['u326'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToMoveFunction['u157'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u186','u157');

}

}

widgetIdToPanelStateChangeFunction['u157'] = function() {
var e = windowEvent;

if ((GetPanelState('u157')) == ('pd0u157')) {

	MoveWidgetBy('u186', GetNum('0'), GetNum('-185'),'swing',300);

}
else
if (true) {

	MoveWidgetBy('u186', GetNum('0'), GetNum('185'),'swing',300);

}

}

widgetIdToShowFunction['u9'] = function() {
var e = windowEvent;

if (true) {

	SetPanelVisibility('u9','','fade',1000);

	MoveWidgetBy('u212', GetNum('0'), GetNum('310'),'swing',100);

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}

}

widgetIdToHideFunction['u9'] = function() {
var e = windowEvent;

if (true) {

	SetPanelVisibility('u9','hidden','fade',200);

	MoveWidgetBy('u212', GetNum('0'), GetNum('-310'),'swing',300);

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}

}

widgetIdToShowFunction['u215'] = function() {
var e = windowEvent;

if (true) {

	SetPanelVisibility('u215','','fade',500);

	SetPanelState('u222', 'pd1u222','none','',500,'none','',500);

}

}

widgetIdToHideFunction['u215'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u222', 'pd0u222','none','',500,'none','',500);

}

}

widgetIdToMoveFunction['u212'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToPanelStateChangeFunction['u121'] = function() {
var e = windowEvent;

if ((GetPanelState('u121')) == ('pd0u121')) {

	MoveWidgetBy('u157', GetNum('0'), GetNum('-132'),'swing',300);

}
else
if (true) {

	MoveWidgetBy('u157', GetNum('0'), GetNum('132'),'swing',300);

}

}
document.getElementById('u230_img').tabIndex = 0;

u230.style.cursor = 'pointer';
$axure.eventManager.click('u230', function(e) {

if (true) {

	SetPanelVisibility('u215','toggle','fade',500);

}
});
gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u233'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u101'] = 'center';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

SetCheckState('u102', true);

SetCheckState('u104', false);

}
});
gv_vAlignTable['u103'] = 'top';
u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

SetCheckState('u104', true);

SetCheckState('u102', false);

}
});
gv_vAlignTable['u105'] = 'top';
u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

SetWidgetFormText('u107', '');

}
});

$axure.eventManager.keyup('u107', function(e) {

if (((GetWidgetText('u107')) == ('Ad')) || (((GetWidgetText('u107')) == ('ad')) || (((GetWidgetText('u107')) == ('ad ')) || ((GetWidgetText('u107')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u107')) == ('C')) || ((GetWidgetText('u107')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u107', function(e) {

if (true) {

SetWidgetFormText('u107', 'Name');

}
});

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

SetWidgetFormText('u108', '');

}
});

$axure.eventManager.keyup('u108', function(e) {

if (((GetWidgetText('u108')) == ('Ad')) || (((GetWidgetText('u108')) == ('ad')) || (((GetWidgetText('u108')) == ('ad ')) || ((GetWidgetText('u108')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u108')) == ('C')) || ((GetWidgetText('u108')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u108', function(e) {

if (true) {

SetWidgetFormText('u108', 'Lastname');

}
});

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

SetWidgetFormText('u109', '');

}
});

$axure.eventManager.keyup('u109', function(e) {

if (((GetWidgetText('u109')) == ('Ad')) || (((GetWidgetText('u109')) == ('ad')) || (((GetWidgetText('u109')) == ('ad ')) || ((GetWidgetText('u109')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u109')) == ('C')) || ((GetWidgetText('u109')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u109', function(e) {

if (true) {

SetWidgetFormText('u109', 'Untitle');

}
});
gv_vAlignTable['u258'] = 'center';
u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if (true) {

SetWidgetFormText('u259', '');

}
});

$axure.eventManager.keyup('u259', function(e) {

if (((GetWidgetText('u259')) == ('Ad')) || (((GetWidgetText('u259')) == ('ad')) || (((GetWidgetText('u259')) == ('ad ')) || ((GetWidgetText('u259')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u259')) == ('C')) || ((GetWidgetText('u259')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u259', function(e) {

if (true) {

SetWidgetFormText('u259', 'Search...');

}
});
gv_vAlignTable['u80'] = 'center';document.getElementById('u81_img').tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

}
});

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

SetWidgetFormText('u110', '');

}
});

$axure.eventManager.keyup('u110', function(e) {

if (((GetWidgetText('u110')) == ('Ad')) || (((GetWidgetText('u110')) == ('ad')) || (((GetWidgetText('u110')) == ('ad ')) || ((GetWidgetText('u110')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u110')) == ('C')) || ((GetWidgetText('u110')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u110', function(e) {

if (true) {

SetWidgetFormText('u110', 'Birthday');

}
});
gv_vAlignTable['u112'] = 'center';
u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

SetWidgetFormText('u85', '');

}
});

$axure.eventManager.keyup('u85', function(e) {

if (((GetWidgetText('u85')) == ('Ad')) || (((GetWidgetText('u85')) == ('ad')) || (((GetWidgetText('u85')) == ('ad ')) || ((GetWidgetText('u85')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u85')) == ('C')) || ((GetWidgetText('u85')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u85', function(e) {

if (true) {

SetWidgetFormText('u85', 'Key in old password');

}
});

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

SetWidgetFormText('u86', '');

}
});

$axure.eventManager.keyup('u86', function(e) {

if (((GetWidgetText('u86')) == ('Ad')) || (((GetWidgetText('u86')) == ('ad')) || (((GetWidgetText('u86')) == ('ad ')) || ((GetWidgetText('u86')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u86')) == ('C')) || ((GetWidgetText('u86')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u86', function(e) {

if (true) {

SetWidgetFormText('u86', 'key in new password');

}
});
document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	SetPanelState('u23', 'pd2u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u118'] = 'center';document.getElementById('u268_img').tabIndex = 0;

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

	SetPanelVisibility('u267','hidden','none',500);

	SetPanelVisibility('u289','hidden','fade',200);

}
});
gv_vAlignTable['u269'] = 'center';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelState('u121', 'pd0u121','none','',500,'none','',50);

}
});
gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u127'] = 'center';u278.tabIndex = 0;

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if (true) {

	SetPanelVisibility('u275','hidden','none',500);

	SetPanelVisibility('u279','hidden','none',500);

}
});
gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u133'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Commemt_ShareHistory.html');

}
});
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Commemt_ShareHistory.html');

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u288'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelState('u23', 'pd2u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u293'] = 'center';gv_vAlignTable['u301'] = 'center';document.getElementById('u302_img').tabIndex = 0;
HookHover('u302', false);

u302.style.cursor = 'pointer';
$axure.eventManager.click('u302', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Destination_Results.html');

}
});

$axure.eventManager.mouseover('u302', function(e) {
if (!IsTrueMouseOver('u302',e)) return;
if (true) {

	SetPanelState('u318', 'pd0u318','none','',500,'swing','down',200);

}
});

$axure.eventManager.mouseout('u302', function(e) {
if (!IsTrueMouseOut('u302',e)) return;
if (true) {

	SetPanelVisibility('u318','hidden','fade',100);

}
});
gv_vAlignTable['u303'] = 'center';gv_vAlignTable['u305'] = 'center';document.getElementById('u306_img').tabIndex = 0;

u306.style.cursor = 'pointer';
$axure.eventManager.click('u306', function(e) {

if (true) {

	SetPanelState('u326', 'pd0u326','none','',500,'swing','down',300);

	SetPanelVisibility('u310','','none',500);

}
});
gv_vAlignTable['u141'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Commemt_ShareHistory.html');

}
});
gv_vAlignTable['u143'] = 'center';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelStateNext('u131',true,'swing','right',1000,'swing','right',1000);

}
});
gv_vAlignTable['u145'] = 'center';document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelStatePrevious('u131',true,'swing','left',1000,'swing','left',1000);

}
});
gv_vAlignTable['u147'] = 'center';document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelState('u121', 'pd0u121','none','',500,'none','',50);

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u227'] = 'center';document.getElementById('u311_img').tabIndex = 0;

u311.style.cursor = 'pointer';
$axure.eventManager.click('u311', function(e) {

if (true) {

	SetPanelVisibility('u326','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u315'] = 'center';document.getElementById('u316_img').tabIndex = 0;

u316.style.cursor = 'pointer';
$axure.eventManager.click('u316', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	SetPanelVisibility('u313','hidden','none',500);

}
});
document.getElementById('u150_img').tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	SetPanelState('u121', 'pd1u121','none','',500,'none','',50);

}
});
gv_vAlignTable['u151'] = 'top';document.getElementById('u152_img').tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	SetPanelState('u121', 'pd1u121','none','',500,'none','',50);

}
});
gv_vAlignTable['u153'] = 'center';document.getElementById('u155_img').tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	SetPanelState('u121', 'pd1u121','none','',500,'none','',50);

}
});
gv_vAlignTable['u156'] = 'center';document.getElementById('u158_img').tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

	SetPanelState('u157', 'pd0u157','none','',500,'none','',50);

}
});
gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u284'] = 'center';HookHover('u285', false);
gv_vAlignTable['u286'] = 'center';HookHover('u287', false);
gv_vAlignTable['u161'] = 'center';document.getElementById('u162_img').tabIndex = 0;

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', function(e) {

if (true) {

	SetPanelState('u157', 'pd0u157','none','',500,'none','',50);

}
});
gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u169'] = 'top';document.getElementById('u276_img').tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	SetPanelVisibility('u275','hidden','none',500);

	SetPanelVisibility('u279','hidden','none',500);

}
});
document.getElementById('u294_img').tabIndex = 0;

u294.style.cursor = 'pointer';
$axure.eventManager.click('u294', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Landing.html');

}
});
gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u175'] = 'top';document.getElementById('u177_img').tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	SetPanelState('u157', 'pd0u157','none','',500,'none','',50);

}
});
gv_vAlignTable['u178'] = 'center';document.getElementById('u179_img').tabIndex = 0;

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	SetPanelState('u157', 'pd1u157','none','',500,'none','',50);

}
});
gv_vAlignTable['u73'] = 'center';document.getElementById('u203_img').tabIndex = 0;

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',50);

}
});
gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u180'] = 'top';document.getElementById('u181_img').tabIndex = 0;

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

	SetPanelState('u157', 'pd1u157','none','',500,'none','',50);

}
});
gv_vAlignTable['u182'] = 'center';document.getElementById('u184_img').tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	SetPanelState('u157', 'pd1u157','none','',500,'none','',50);

}
});
gv_vAlignTable['u185'] = 'center';document.getElementById('u187_img').tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',50);

}
});
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u307'] = 'center';gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u214'] = 'center';
u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

SetWidgetFormText('u87', '');

}
});

$axure.eventManager.keyup('u87', function(e) {

if (((GetWidgetText('u87')) == ('Ad')) || (((GetWidgetText('u87')) == ('ad')) || (((GetWidgetText('u87')) == ('ad ')) || ((GetWidgetText('u87')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u87')) == ('C')) || ((GetWidgetText('u87')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u87', function(e) {

if (true) {

SetWidgetFormText('u87', 'Key in new password');

}
});
document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

}
});
gv_vAlignTable['u190'] = 'center';document.getElementById('u191_img').tabIndex = 0;

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',50);

}
});
gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u195'] = 'center';document.getElementById('u196_img').tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',50);

}
});
gv_vAlignTable['u197'] = 'center';document.getElementById('u198_img').tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',50);

}
});
gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u317'] = 'center';gv_vAlignTable['u221'] = 'center';document.getElementById('u94_img').tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

}
});
gv_vAlignTable['u95'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u320'] = 'center';document.getElementById('u321_img').tabIndex = 0;
HookHover('u321', false);

u321.style.cursor = 'pointer';
$axure.eventManager.click('u321', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Destination_Results.html');

}
});

$axure.eventManager.mouseover('u321', function(e) {
if (!IsTrueMouseOver('u321',e)) return;
if (true) {

	SetPanelState('u323', 'pd0u323','none','',500,'swing','down',300);

}
});

$axure.eventManager.mouseout('u321', function(e) {
if (!IsTrueMouseOut('u321',e)) return;
if (true) {

	SetPanelVisibility('u323','hidden','none',500);

}
});
gv_vAlignTable['u322'] = 'center';document.getElementById('u324_img').tabIndex = 0;

u324.style.cursor = 'pointer';
$axure.eventManager.click('u324', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Destination_Results.html');

	SetPanelVisibility('u323','hidden','none',500);

}
});
gv_vAlignTable['u325'] = 'center';document.getElementById('u327_img').tabIndex = 0;

u327.style.cursor = 'pointer';
$axure.eventManager.click('u327', function(e) {

if (true) {

	SetPanelVisibility('u326','hidden','none',200);

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u328'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	SetPanelVisibility('u9','toggle','none',500);

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u240_img').tabIndex = 0;

u240.style.cursor = 'pointer';
$axure.eventManager.click('u240', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Destination_Results.html');

}
});
gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u245'] = 'center';document.getElementById('u298_img').tabIndex = 0;
HookHover('u298', false);

u298.style.cursor = 'pointer';
$axure.eventManager.click('u298', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u298', function(e) {
if (!IsTrueMouseOver('u298',e)) return;
if (true) {

	SetPanelState('u313', 'pd0u313','none','',500,'swing','down',300);

}
});

$axure.eventManager.mouseout('u298', function(e) {
if (!IsTrueMouseOut('u298',e)) return;
if (true) {

	SetPanelVisibility('u313','hidden','none',500);

}
});
gv_vAlignTable['u299'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u18'] = 'center';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u266'] = 'center';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	SetPanelState('u23', 'pd1u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u252'] = 'center';document.getElementById('u254_img').tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	SetPanelState('u253', 'pd0u253','swing','right',300,'none','',500);

	MoveWidgetBy('u260', GetNum('190'), GetNum('0'),'swing',500);

	MoveWidgetBy('u289', GetNum('190'), GetNum('0'),'swing',500);

	MoveWidgetBy('u279', GetNum('190'), GetNum('0'),'swing',500);

}
});
gv_vAlignTable['u255'] = 'center';
u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

SetWidgetFormText('u256', '');

}
});

$axure.eventManager.keyup('u256', function(e) {

if (((GetWidgetText('u256')) == ('Ad')) || (((GetWidgetText('u256')) == ('ad')) || (((GetWidgetText('u256')) == ('ad ')) || ((GetWidgetText('u256')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u256')) == ('C')) || ((GetWidgetText('u256')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u256', function(e) {

if (true) {

SetWidgetFormText('u256', 'Search...');

}
});
gv_vAlignTable['u20'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelVisibility('u9','toggle','none',500);

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u200_img').tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',50);

}
});
gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';document.getElementById('u206_img').tabIndex = 0;

u206.style.cursor = 'pointer';
$axure.eventManager.click('u206', function(e) {

if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u207'] = 'center';document.getElementById('u208_img').tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	SetPanelState('u23', 'pd1u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u120'] = 'center';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	SetPanelState('u121', 'pd0u121','none','',500,'none','',50);

}
});
gv_vAlignTable['u264'] = 'center';document.getElementById('u265_img').tabIndex = 0;

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	SetPanelVisibility('u267','','fade',500);

	SetPanelState('u289', 'pd0u289','none','',500,'swing','down',300);

}
});
document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u31'] = 'center';document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelState('u23', 'pd1u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u33'] = 'center';document.getElementById('u210_img').tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	SetPanelState('u23', 'pd2u23','none','',500,'none','',200);

}
});
gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u219'] = 'center';document.getElementById('u270_img').tabIndex = 0;

u270.style.cursor = 'pointer';
$axure.eventManager.click('u270', function(e) {

if (true) {

	SetPanelState('u279', 'pd0u279','none','',500,'swing','down',300);

	SetPanelVisibility('u275','','none',500);

}
});
gv_vAlignTable['u271'] = 'center';document.getElementById('u257_img').tabIndex = 0;

u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', function(e) {

if (true) {

	SetPanelState('u253', 'pd1u253','none','',500,'swing','left',300);

	MoveWidgetBy('u260', GetNum('-190'), GetNum('0'),'swing',300);

	MoveWidgetBy('u289', GetNum('-190'), GetNum('0'),'swing',500);

	MoveWidgetBy('u279', GetNum('-190'), GetNum('0'),'swing',500);

}
});
gv_vAlignTable['u273'] = 'center';u274.tabIndex = 0;

u274.style.cursor = 'pointer';
$axure.eventManager.click('u274', function(e) {

if (true) {

	SetPanelState('u279', 'pd0u279','none','',500,'swing','down',300);

	SetPanelState('u275', 'pd0u275','none','',500,'none','',500);

}
});
gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'center';
u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

SetWidgetFormText('u46', '');

}
});

$axure.eventManager.keyup('u46', function(e) {

if (((GetWidgetText('u46')) == ('Ad')) || (((GetWidgetText('u46')) == ('ad')) || (((GetWidgetText('u46')) == ('ad ')) || ((GetWidgetText('u46')) == ('ad attack'))))) {

}
else
if (((GetWidgetText('u46')) == ('C')) || ((GetWidgetText('u46')) == ('c'))) {

}
else
if (true) {

}
});

$axure.eventManager.blur('u46', function(e) {

if (true) {

SetWidgetFormText('u46', 'Key in code here...');

}
});
gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u76'] = 'center';document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

}
});
gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u211'] = 'center';document.getElementById('u213_img').tabIndex = 0;

u213.style.cursor = 'pointer';
$axure.eventManager.click('u213', function(e) {

if (true) {

	SetPanelVisibility('u215','toggle','fade',500);

}
});

$axure.eventManager.mouseover('u280', function(e) {
if (!IsTrueMouseOver('u280',e)) return;
if (true) {

	SetPanelVisibility('u279','hidden','none',500);

}
});
gv_vAlignTable['u282'] = 'center';HookHover('u283', false);
gv_vAlignTable['u50'] = 'center';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	SetPanelState('u54', 'pd0u54','none','',500,'none','',500);

	SetPanelVisibility('u59','hidden','none',500);

}
});
gv_vAlignTable['u56'] = 'center';document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	SetPanelState('u59', 'pd0u59','none','',500,'swing','down',300);

	SetPanelState('u54', 'pd1u54','none','',500,'none','',500);

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u291'] = 'center';document.getElementById('u292_img').tabIndex = 0;

u292.style.cursor = 'pointer';
$axure.eventManager.click('u292', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u61'] = 'center';HookHover('u63', false);
gv_vAlignTable['u64'] = 'center';HookHover('u65', false);
gv_vAlignTable['u66'] = 'center';HookHover('u67', false);
gv_vAlignTable['u68'] = 'center';HookHover('u69', false);
gv_vAlignTable['u247'] = 'center';