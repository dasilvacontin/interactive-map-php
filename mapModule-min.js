console.log("Start of map_module.js");var mapModule={inited:!1};$("#mapWrapper").hide().slideDown("slow");
(function(){var d;d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");d.open("GET","/wp-content/plugins/interactive_map/data.xml",!1);d.send();xmlDoc=d.responseXML;console.log(xmlDoc);var b,e;mapModule.initDOM=function(){console.log("Initing mapModule's DOM!");$("#mapWrapper").append("<div id='mapInfo'></div>");b=$("#mapInfo");b.append("<div id='whiteBackground'></div>");b.append("<div id='mapTitle'><p class='interactive_map'>Community name</p><img id='mapCloseButton' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABNtJREFUeNrUmU1IJEcUx5+jCCKIguAHThC/Ahp3CYosIoogExCyetFMQhBFEUTxINGLSMxBXZig4kEhiziwa+LiwZGgkODBGTQbJBJZogd1jfi5giAIInjpfa/pGt729PTHfLH74I92dfWrX9dU1XtVHXd7ewthWBwqA1WG+kJRAeoJ6m/UIeo/RduoK5QUcmMhwhLQj6jvQ3j2Jeon5UWiCvsZ6nfUIwjf3qC+Rp1EGjYT9Yvi3G/39/fg8/lgY2MDjo6O4PT0FK6vr+Hs7AxycnIgPT0d7HY75OXlQVVVFVRXV0NSUpLaN718J+pdJGAdqD94AYGNj4+Dx+MBK79MSkoKNDY2Ql9fn/wCKvsK9Wc4sC7UD+Li5uYGRkZGwO12w8PDQ8i/f2JiIrS2tsLg4CCkpaXxWz+j+kOB/RX1rbhYXFyE3t5euLu7g0hZcnIyTE1NQVNTEy/+DfWd5gMEq6EulCTU1dUlKUtOVET+eXsolxaXFmglf9DpdEYVVIjaUQE7jGAz+QPDw8MxAdXp4Uw9WK+ouLCwIMXHx8cUljQ7O8thvZyPT7ASJSzCxcUFlJWVRXQyWZl029vbkJ2dLYoohO+qVwMKf/n0T3t7uzz79ayurk5e6Hd2duSgQMEgmJWXl8t1U1NT5bpra2u6vml1wB4Wl2+V8O4fBgWi67e2tgx//s7OTonb+fm5VFRUpFnX4XBIamtubtb1T+0TBxsOBXzMvhA3WlpaDMcV9mYAgBYw9qikZevr64ZtEAeDfSFg40Th1dWVhCHR0JG6Z4WtrKz46xA4vYCWGfUsiTiIhwHHEWy2KMBxanrWzs/PBwVOSEiQdnd3Ne8PDAyYboN4GGw2wT4VBT09PZaWGQILBqxlo6OjlvwTD4N9SrDPREFtba0lZ5gCBv2p9YaIWREPg31GsK9FAeaglh3qjU1hNCRoaFj1TTwM9jXBnogCM5PL7PJkZlkzM8kY7IkNC+08A/uYTMVjD7tng62lkehdDL28Z99Rz57zbYcVQwBYXl42rEdxfm5uznLPqnYR/xOsV1wVFhaadoQTBpaWlnjC4bfp6emAssrKSsAVwRJsfn4+v9wk2L/8aVdJiWlH1KPFxcUB5WNjY9Dd3Q2rq6sB9+rr6wHXWtNtlJaW8ktfSBFMLxiIOpGIYloR7IPcgAa1noPc3FxNgM3NTdNr8PHxsanJpc4NbMpNOtKRDyBoX69n2BB4vd4PyihZb2trC6i7v78PDQ0NAeWUAxsZcbADkZcyp5IiFvF81uitKWuiNI80OTlpuCxVVFRIbrdbru/xeOQgYtSGKp8tUu/BDsVNzNRjvvfiovYZ6OEnuQezsXq78vKgLOJsDxRTm5iY4KA+AaqGJfuGr4lDQ0MxBcUdCDidTk2eYMdHH8uJTL2azabxghTResXFzMyM/MbR7lFqh9kkavWTPkW06fhqRz3nBw97e3vQ0dEhn6+GY/Q8+SF/KtDnSruRPfl2uVzyybeVnqaepMjU398flZNv3W8KBEqhl46EDg4OAGM5XF5eyn8zMjIgKytL/kupJx0f1dTUyMDR/KbALZeywwh+raHE4djsAzaLDZDjx6jPUa9ChHylPP/YCmg4H+34F8YsOihEfamc9j1S9EYRnU7+i/oHdRnOF8b3AgwACJZuaqchJ9sAAAAASUVORK5CYII='></div>");b.append("<div id='mapContent'></div>");
e=$("#mapContent");b.hide();b.click(function(){b.slideUp("slow")})};mapModule.selectCommunity=function(){mapModule.inited||(mapModule.initDOM(),mapModule.inited=!0);for(var c=e.children(),a=0;a<c.length;++a)$(c[a]).remove();b.slideDown("slow");a=this.data("id");console.log("region tag is "+a);void 0==a&&console.log(this);console.log(a);a=getElementByUniqueTagName(xmlDoc,a);c=prop(a,"name");console.log("region name is "+c);$("#mapTitle p").text(c);c=a.getElementsByTagName("center");
var provinciaRe = /\[([^\]]+)\]\s(.+)/g
var provincias = {}
for(a=0;a<c.length;++a) {
  var provincia = ''
  var centro = c[a].textContent.replace(provinciaRe, function (_, prov, rest) {
    provincia = prov
    return rest
  })
  var centrosEnP = provincias[provincia] || []
  centrosEnP.push(centro)
  provincias[provincia] = centrosEnP
}
var nombresProvincia = []
for (var provincia in provincias) nombresProvincia.push(provincia)
nombresProvincia.sort()
$(nombresProvincia).each(function (_, provincia) {
  var provinciaHTML = '<div class="provincia">'
  provinciaHTML += '<h3>'+provincia+'</h3>'
  var list = '<ul>'
  $(provincias[provincia]).each(function (_, centro) {
    var match = /([^:]+):(.+)/.exec(centro)
    if (!match) return list += '<li>' + centro + '</li>'
    centro = $.trim(match[1])
    var peeps = $.map(match[2].split(','), function (peep) {
      peep = peep.split('-')
      var profession = $.trim(peep[0])
      profession = profession.substr(0,1).toUpperCase()+profession.substr(1)
      peep = $.trim(peep[1])
      return '<li>' + peep + ' (' + profession + ')</li>'
    })
    list += '<li>' + centro + '<ul>' + peeps.join('') + '</ul>'
  })
  list += '</ul>'
  provinciaHTML += list + '</div>'
  e.append(provinciaHTML)
})
};addEventsToCommunities();console.log("mapModule loaded and executed!")})();console.log("End of spain_map.js");
