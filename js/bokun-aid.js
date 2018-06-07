function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var w1399_06854472_bb5b_4dd3_9522_f226e3ff0333;
(function(d, t) {
  var host = 'widgets.bokun.is';
  var frameUrl = ('https:' == d.location.protocol ? 'https://' : 'http://') + host + '/widgets/1399?bookingChannelUUID=9173227b-5360-439a-8681-24871302bbaa&amp;activityId=' + getQueryVariable("aid") + '&amp;lang=EN&amp;ccy=ISK&amp;hash=w1399_06854472_bb5b_4dd3_9522_f226e3ff0333';
  var s = d.createElement(t), options = {'host': host, 'frameUrl': frameUrl, 'widgetHash':'w1399_06854472_bb5b_4dd3_9522_f226e3ff0333', 'autoResize':true,'height':'','width':'100%', 'minHeight': 0,'async':true, 'ssl':false, 'affiliateTrackingCode': '' };
  s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + host + '/assets/javascripts/widgets/embedder.js';
  s.onload = s.onreadystatechange = function() {
    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
    try { 
      w1399_06854472_bb5b_4dd3_9522_f226e3ff0333 = new BokunWidgetEmbedder(); w1399_06854472_bb5b_4dd3_9522_f226e3ff0333.initialize(options); w1399_06854472_bb5b_4dd3_9522_f226e3ff0333.display();
    } catch (e) {}
  };
  var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');