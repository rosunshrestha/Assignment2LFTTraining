// JavaScript Document

var tagCount = document.getElementById("main-wrapper");
var data="{\ntag:"+tagCount.tagName;
var t=tagCount;
if(tagCount.className!="")
{
		data=data+",\nclass:"+tagCount.className;
}

if(tagCount.children.length>0){
	data=data+"\nchildren:[\n{"
jsonData(tagCount.children)}

function jsonData(tagCount){
	for(var i=0;i<tagCount.length;i++){
		data=data+"\ntag:"+tagCount[i].tagName;
		
		if(tagCount[i].className!="")
		{
			data=data+",\nclass:"+tagCount[i].className+"\n";
		}
		if(tagCount[i].tagName=="IMG"){
				var att=	tagCount[i].getAttribute('attribute')+"\n";		
				var source=	tagCount[i].getAttribute('src')+"\n";
				data=data+"attribute:"+att+",";
				data=data+"source:"+source+",";
		
		}
		if(tagCount[i].children.length>0){
			data=data+"\nchildren:[\n{";
			jsonData(tagCount[i].children);	
		}
		if(i==tagCount.length-1)
		{
			data=data+"}]"
		}	
	}
	data=data+"}";
	t.innerHTML=data;
}