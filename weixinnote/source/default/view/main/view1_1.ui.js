var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function() { // 监听android 的返回按钮;
    app.closePage()
});

/** ***************************************************************************************** */

var listview, listdata;

listview = ui("do_ListView_2");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ { "template":1,"NAME":"分组","LOGO":"source://image/it.png","ABLE":""},
                   { "template":0,"titleText":"A" },
                   { "template":1,"NAME":"apple","LOGO":"source://image/aa2.png","ABLE":""},
                   { "template":0,"titleText":"C" },
                   { "template":1,"NAME":"曹郁","LOGO":"source://image/aa2.png","ABLE":""},
                   { "template":0,"titleText":"D" },
                   { "template":1,"NAME": "大小姐","LOGO": "source://image/t3.jpg" ,"ABLE":"source://image/able.png"},
                   { "template":0,"titleText":"K" },
                   { "template":1,"NAME": "可可","LOGO": "source://image/t6.jpg" ,"ABLE":"source://image/able.png"},
                   { "template":0,"titleText":"S" },
                   { "template":1,"NAME": "闪电", "LOGO": "source://image/t9.jpg" ,"ABLE":"source://image/able.png" },
                   { "template":1,"NAME": "Sun","LOGO": "source://image/t1.jpg","ABLE":"source://image/able.png" },
                   { "template":0,"titleText":"T" },
                   { "template":1,"NAME": "甜甜", "LOGO": "source://image/t7.jpg" ,"ABLE":"source://image/able.png"}, 
                   { "template":0,"titleText":"O" },
                   { "template":1,"NAME": "筽", "LOGO": "source://image/aa2.jpg" ,"ABLE":""}, 
                   { "template":0,"titleText":"X" },
                   { "template":1,"NAME": "星辰","LOGO": "source://image/t8.jpeg" ,"ABLE":"source://image/able.png" }, 
                   { "template":1,"NAME": "小妮子","LOGO": "source://image/t2.jpg","ABLE":"source://image/able.png" },
                   { "template":0,"titleText":"Y" },
                   { "template":1,"NAME": "雨夜", "LOGO": "source://image/t5.jpg" ,"ABLE":"" }, 
                   { "template":2,"number":"11位联系人"},
                  ]);
listview.refreshItems();
listview.on("longTouch", function(index) {
    nf.alert(listdata.getOne(index), "longTouch");
});

listview.on("touch", function(index) {
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