/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var page = sm("do_Page"); //获取当前Page实例

var iv0, label0, iv1, label1, iv2, label2, iv3, label3;
iv0 = ui("iv0");
label0 = ui("label0");
iv1 = ui("iv1");
label1 = ui("label1");
iv2 = ui("iv2");
label2 = ui("label2");
iv3 = ui("iv3");
label3 = ui("label3");

var ivs = [ iv0, iv1, iv2, iv3 ];
var labels = [ label0, label1, label2, label3 ];

var checkFun = function(index) {
	for (var i = 0; i < ivs.length; i++) {
		if (index == i) { 
			ivs[i].source = "source://image/xuan" + i + ".png";
			labels[i].fontColor = "6CD564FF";
		} else {
			ivs[i].source = "source://image/wei" + i + ".png";
			labels[i].fontColor = "9F9F9FFF";
		}
	}
	viewShower.showView("view" + index, "fade", 300)
}

// 为每个ImageView 注册事件
ivs.forEach(function(iv, i) {
	iv.on("touch", function(data, e) {
		checkFun(i);
	});
})

var viewShower = ui("viewShower");

var data = [ {
	"id" : "view0",
	"path" : "source://view/main/view0.ui"
}, {
	"id" : "view1",
	"path" : "source://view/main/view1.ui"
}, {
	"id" : "view2",
	"path" : "source://view/main/view2.ui"
}, {
	"id" : "view3",
	"path" : "source://view/main/view3.ui"
} ];

// 为viewshower增加4个页面
viewShower.addViews(data);
viewShower.showView("view0");

viewShower.on("viewChanged", function(data, e) {
	page.fire("indexChanged",data);
});

var bg_layout = ui("bground");
var fast = ui("fast");
fast.on("touch",function(){
//	lbg.add("source://view/wendu.ui");
	bg_layout.add("we", "source://view/fast.ui", 0, 0);
//	app.openPage("source://view/wuran.ui");
});


