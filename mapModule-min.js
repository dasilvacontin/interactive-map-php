console.log("Start of map_module.js");var mapModule={inited:!1};$("#mapWrapper").hide().slideDown("slow");
(function(){var d;d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");d.open("GET","/wp-content/plugins/interactive_map/data.xml",!1);d.send();xmlDoc=d.responseXML;console.log(xmlDoc);var b,e;mapModule.initDOM=function(){console.log("Initing mapModule's DOM!");$("#mapWrapper").append("<div id='mapInfo'></div>");b=$("#mapInfo");b.append("<div id='whiteBackground'></div>");b.append("<div id='mapTitle'><p class='interactive_map'>Community name</p><img id='mapCloseButton' src='http://www.gemcad.es/wp-content/plugins/interactive_map/closeButton.png'></div>");b.append("<div id='mapContent'></div>");
e=$("#mapContent");b.hide();b.click(function(){b.slideUp("slow")})};mapModule.selectCommunity=function(){mapModule.inited||(mapModule.initDOM(),mapModule.inited=!0);for(var c=e.children(),a=0;a<c.length;++a)$(c[a]).remove();b.slideDown("slow");a=this.data("id");console.log("region tag is "+a);void 0==a&&console.log(this);console.log(a);a=getElementByUniqueTagName(xmlDoc,a);c=prop(a,"name");console.log("region name is "+c);$("#mapTitle p").text(c);c=a.getElementsByTagName("center");for(a=0;a<c.length;++a)e.append("<p>"+
c[a].textContent+"</p>")};addEventsToCommunities();console.log("mapModule loaded and executed!")})();console.log("End of spain_map.js");