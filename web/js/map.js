//创建和初始化地图函数：

function initMap(){
createMap();//创建地图
setMapEvent();//设置地图事件
addMapControl();//向地图添加控件
addMapOverlay();//向地图添加覆盖物
}
function createMap(){ 
map = new BMap.Map("map"); 
map.centerAndZoom(new BMap.Point(121.462887,31.237692),19);
}
function setMapEvent(){
map.enableScrollWheelZoom();
map.enableKeyboard();
map.enableDragging();
map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
target.addEventListener("click",function(){
  target.openInfoWindow(window);
});
}
function addMapOverlay(){
var markers = [
  {content:"地址（Add）：静安区北京西路968号嘉地中心29层<br>电话（Tel）：086-021-2356 1898",title:"上海乾立股权投资基金管理有限公司",imageOffset: {width:-46,height:-21},position:{lat:31.23757,lng:121.462784}}
];
for(var index = 0; index < markers.length; index++ ){
  var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
  var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
	imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
  })});
  var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
  var opts = {
	width: 240,
	title: markers[index].title,
	enableMessage: false
  };
  var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
  map.openInfoWindow(infoWindow, point); //开启信息窗口
  //marker.setLabel(label); 提示信息
  addClickHandler(marker,infoWindow);
  map.addOverlay(marker);
};
var labels = [
];
for(var index = 0; index < labels.length; index++){
  var opt = { position: new BMap.Point(labels[index].position.lng,labels[index].position.lat )};
  var label = new BMap.Label(labels[index].content,opt);
  map.addOverlay(label);
};
}
//向地图添加控件
function addMapControl(){
var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
map.addControl(scaleControl);
var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.addControl(navControl);
var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
map.addControl(overviewControl);
}
var map;
initMap();