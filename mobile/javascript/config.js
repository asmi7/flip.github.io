	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#FFFFFF";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#F1D8DC";bookConfig.bgEndColor="#F1D8DC";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="tile";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.3";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.3";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#000000";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#FFFFFF";bookConfig.LinkAlpha="0.1";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#411747";bookConfig.totalPageCount=4;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2148;;bookConfig.securityType="1";bookConfig.CreatedTime ="200409162338";bookConfig.bookTitle="Demo";bookConfig.bookmarkCR="25c129efac61cb4331a18a9be06812e7251bb90b";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2020916229827","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link11","x":"0.36608900000000005","y":"0.035540999999999996","width":"0.20809200000000003","height":"0.193861","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20209162299436","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link12","x":"0.579961","y":"0.127625","width":"0.225434","height":"0.17285899999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20209162299603","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link13","x":"0.647399","y":"0.30694699999999997","width":"0.277457","height":"0.168013","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2020916229398","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link14","x":"0.689788","y":"0.483037","width":"0.258189","height":"0.155089","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20209162296670","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link15","x":"0.585742","y":"0.6494350000000001","width":"0.242775","height":"0.203554","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20209162299583","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link16","x":"0.381503","y":"0.7399030000000001","width":"0.21194600000000002","height":"0.193861","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20209162298857","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link17","x":"0.136802","y":"0.7399030000000001","width":"0.22158000000000003","height":"0.189015","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"}],"sliderType":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20209162296135","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link18","x":"0.119461","y":"0.042003","width":"0.22158000000000003","height":"0.21486299999999997","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"8388736","hintShapeColor2":"8388736","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"","className":"","photos":[{"title":"","desc":"","url":"./files/pageConfig/a1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a4.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a6.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a5.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a8.jpg"},{"title":"","desc":"","url":"./files/pageConfig/a10.jpg"}],"sliderType":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSound","annoId":"20209162295573","alpha":"0.19921875","playerType":"Skin 2","mainColor":"16645628","soundPlayTriggerEvt":"none","soundStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"sound1","x":"0.102119","y":"0.7124389999999999","width":"0.791908","height":"0.05384664990004514","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"13421738","hintShapeColor2":"13421738","hintShapeAlpha":"0.9","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoSound","H5Replay":"false","H5PlaybackNumber":"1","soundURL":"./files/pageConfig/Saxophone.mp3"},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20209162296185","alpha":"1","location":{"tannoName":"swf5","x":"0","y":"-0.009673","width":"1.361958","height":"0.414329","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"13421738","hintShapeColor2":"13421738","hintShapeAlpha":"0.9","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/Music notes animation v2.swf"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20209162294614","alpha":"1","location":{"tannoName":"swf3","x":"0.550169","y":"0.8044749999999999","width":"0.4933100000000001","height":"0.27144199999999996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"13421738","hintShapeColor2":"13421738","hintShapeAlpha":"0.9","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/ren.swf"},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20209162297234","alpha":"1","location":{"tannoName":"swf4","x":"-0.111753","y":"0.20032300000000003","width":"1.238921","height":"0.376414","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"519.9","pageHeight":"620.28"},"hint":{"hintShapeColor":"13421738","hintShapeColor2":"13421738","hintShapeAlpha":"0.9","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"null"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"45","shadowColor":"2236962","shadowAlpha":"0.8","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/birds.swf"}]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}