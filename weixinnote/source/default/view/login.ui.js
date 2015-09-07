//related to login.ui
var login=ui("login");
var app=sm("do_app");
//var weixin=sm("do_TecentWX");
login.on("touch",function(data, e) {
//		wenxin.login()
	app.openPage("source://view/index.ui",'page_curl');
})