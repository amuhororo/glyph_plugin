tyrano.plugin.kag.tag.glyph.pm = {
	line : "nextpage.gif",
	layer : "message0",
	fix : "false",
	left : 0,
	top : 0,
	anime : "false",
	width : ""  ,
	height : "" ,
	cut : "" ,
	sec : 1 ,
	alt : "false",
	leng : "false"
};
	
tyrano.plugin.kag.tag.glyph.start = function(pm) {

	var that = this;

	$(".glyph_image").remove();						//デフォルトのグリフを消す（一応）
	$("#glyph_image").remove();						//プラグインのグリフを消す

	var alt = "";
	if(pm.alt=="true") var alt = "alternate ";		//往復設定
	if(pm.leng=="true") var xy =  '0 -' + ((pm.cut-1)*pm.height) + 'px';	//縦移動か横移動か
	else var xy =  '-' + ((pm.cut-1)*pm.width) + 'px 0';
	
	var j_layer = this.kag.layer.getLayer(pm.layer);
	
	if (pm.anime=="true" && pm.line!="nextpage.gif") {	//アニメ有効の場合
		if(pm.width=="" || pm.height=="" || pm.cut=="" ){
			var width = (pm.width=="") ? "「width」" : "" ;
			var height = (pm.height=="") ? "「height」" : "" ;
			var cut = (pm.cut=="") ? "「cut」" : "" ;
			alert('glyphタグにパラメーター'+width+height+cut+'が指定されていません。');
		}else{
			var j_next = $("<div id='glyph_image'></div>");
			j_next.css("background","url(./tyrano/images/kag/" + pm.line + ") no-repeat");
			j_next.css("width",pm.width + "px");
			j_next.css("height",pm.height + "px");
			j_next.css("animation","glyph " + pm.sec + "s steps(" + (pm.cut-1) +") " + alt + " infinite");
			j_next.append('<style>@-webkit-keyframes glyph{to{background-position:' + xy + ';}}>@-moz-keyframes glyph{to{background-position:' + xy + ';}}@keyframes glyph{to{background-position:' + xy + ';}}</style>');
		}
	} else {
		var j_next = $("<img id='glyph_image' />");
		j_next.attr("src", "./tyrano/images/kag/" + pm.line);
	}
	
	if (pm.fix=="true") {
		j_next.css("position", "absolute");
		j_next.css("z-index", 1001);
		j_next.css("top", pm.top + "px");
		j_next.css("left", pm.left + "px");
		j_layer.append(j_next);
	} else {
		that.kag.variable.tf.glyph = j_next;
		var j_inner_message = that.kag.getMessageInnerLayer();
		j_inner_message.find('p').not(':empty').append(j_next);
	}
		
	that.kag.stat.flag_glyph = "true";
	that.kag.ftag.nextOrder();

};


tyrano.plugin.kag.ftag.hideNextImg = function() {
        $("#glyph_image").hide();
};

tyrano.plugin.kag.tag.p.start = function() {
        
	var that = this;
	this.kag.stat.flag_ref_page = true; 

	//console.log('glyph:'+that.kag.stat.f.glyph);

	if (this.kag.stat.is_skip == true) {
		//スキップ中の場合は、nextorder
		this.kag.ftag.nextOrder();
	}else if(this.kag.stat.is_auto == true){
		this.kag.stat.is_wait_auto = true;
		setTimeout(function(){
			if(that.kag.stat.is_wait_auto == true){
				that.kag.ftag.nextOrder();
			}
		}, parseInt(that.kag.config.autoSpeed));
            
	}else{		
		if(that.kag.variable.tf.glyph) {
			var j_inner_message = that.kag.getMessageInnerLayer();
			j_inner_message.find('p').append(that.kag.variable.tf.glyph);
		}
		$("#glyph_image").show();
	}
};

tyrano.plugin.kag.tag.l.start = function() {
        
	var that = this;
        
	//クリックするまで、次へすすまないようにする
	if (this.kag.stat.is_skip == true) {
		//スキップ中の場合は、nextorder
		this.kag.ftag.nextOrder();
            
	}else if(this.kag.stat.is_auto == true){
		this.kag.stat.is_wait_auto = true;
		setTimeout(function(){
			if(that.kag.stat.is_wait_auto == true){
				that.kag.ftag.nextOrder();
			}
		}, parseInt(that.kag.config.autoSpeed));
            
	}else{
		if(that.kag.variable.tf.glyph) {
			var j_inner_message = that.kag.getMessageInnerLayer();
			j_inner_message.find('p').append(that.kag.variable.tf.glyph);
		}
		$("#glyph_image").show();
	}
};