var button0=ui("Layout0");
var button1=ui("Layout1")
var button2=ui("Layout2");
var button3=ui("Layout3");
var button4=ui("Layout4");
var button5=ui("Layout5");
var button6=ui("Layout6");
var button7=ui("Layout7");
var button8=ui("Layout8");
var button9=ui("Layout9");
var button10=ui("Layout10")
var button11=ui("Layout11");
var call=ui("do_call");
var display=ui("do_Label_1");
button1.on("touch",function(data, e){
	display.text=display.text+1;
 	}
 ); 
button2.on("touch",function(){
	display.text=display.text+2;
});
button3.on("touch",function(){
	display.text=display.text+3;
});
button4.on("touch",function(){
	display.text=display.text+"4";
});
button5.on("touch",function(data, e){
	display.text=display.text+"5";
});
button6.on("touch",function(data, e){
	display.text=display.text+"6";
});
button7.on("touch",function(data, e){
	display.text=display.text+"7";
});
button8.on("touch",function(data, e){
	display.text=display.text+"8";
});
button9.on("touch",function(data, e){
	display.text=display.text+"9";
});
button10.on("touch",function(data, e){
	display.text=display.text+"*";
});
button0.on("touch",function(data, e){
	display.text=display.text+"0";
});
button0.on("longTouch",function(data, e){
	display.text=display.text+"+";
});
button11.on("touch",function(data, e){
	display.text=display.text+"#";
});

