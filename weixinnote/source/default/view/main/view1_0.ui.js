var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function() { // 监听android 的返回按钮;
    app.closePage()
});

/** ***************************************************************************************** */

var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ { "template":1,"NAME": "邀请好友","LOGO": "source://image/a8j.png","ABLE":""},
                   { "template":1,"NAME": "花名册","LOGO": "source://image/it.png","ABLE":"" },
                   { "template":0,"titleText":"D" },
                   { "template":1,"NAME": "大小姐","LOGO": "source://image/t3.jpg" ,"ABLE":"source://image/able.png"},
                   { "template":0,"titleText":"K" },
                   { "template":1,"NAME": "可可","LOGO": "source://image/t6.jpg" ,"ABLE":"source://image/able.png"},
                   { "template":0,"titleText":"S" },
                   { "template":1,"NAME": "闪电", "LOGO": "source://image/t9.jpg" ,"ABLE":"source://image/able.png" },
                   { "template":1,"NAME": "Sun","LOGO": "source://image/t1.jpg","ABLE":"source://image/able.png" },
                   { "template":0,"titleText":"T" },
                   { "template":1,"NAME": "甜甜", "LOGO": "source://image/t7.jpg" ,"ABLE":"source://image/able.png"}, 
                   { "template":0,"titleText":"X" },
                   { "template":1,"NAME": "星辰","LOGO": "source://image/t8.jpeg" ,"ABLE":"source://image/able.png" }, 
                   { "template":1,"NAME": "小妮子","LOGO": "source://image/t2.jpg","ABLE":"source://image/able.png" }, 
                   { "template":2,"number":"7位免费通话联系人"},
                  ]);
listview.refreshItems();

listview.on("touch", function(index) {
//	 app.openPage("source://view/contact/detail.ui",listdata.getOne(index),"push_r2l",function(data, e) {
//	    })
	  nf.alert(listdata.getOne(index), "touch");
});

listview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});
