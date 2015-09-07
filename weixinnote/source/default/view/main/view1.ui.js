var page = sm("do_Page");
var choice,sel0,sel1;
choice = ui("do_ImageView_1");
sel0 = ui("free");
sel1=ui("all");

var sels = [sel0,sel1];

var checkFun = function(index) {
   	if (index == 0) { 
			choice.source="source://image/selection0.png";
		} else {
			choice.source="source://image/selection1.png";
		}
	viewShower.showView("view" + index, "fade", 300);
}

// 为每个ImageView 注册事件
sels.forEach(function(sel, i) {
	sel.on("touch", function(data, e) {
		checkFun(i);
	});
})

var viewShower = ui("do_ViewShower_1");

var data = [ {
	"id" : "view0",
	"path" : "source://view/main/view1_0.ui"
}, {
	"id" : "view1",
	"path" : "source://view/main/view1_1.ui"
} ];

// 为viewshower增加4个页面
viewShower.addViews(data);
viewShower.showView("view0");

viewShower.on("viewChanged", function(data, e) {
	page.fire("indexChanged",data);
});
