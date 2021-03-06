define(['$'],function(require, exports, module) {

    this.$ = require("$");
  var a = {
			findout:function(b, c) {
		        if (!$.isArray(b))
		            throw "the findout function needs an array as first parameter";
		        var d = [];
		        for (var e = 0, f = b.length; e < f; e += 1)
		            b[e] === c && d.push(e);
		        return d;
		    },
		    addEvent:function(b, c, d) {
		        var e = a.E(b);
		        if (e == null)
		            return !1;
		        c = c || "click";
		        if ((typeof d).toLowerCase() == "function") {
		            e.attachEvent ? e.attachEvent("on" + c, d) : e.addEventListener ? e.addEventListener(c, d, !1) : e["on" + c] = d;
		            return !0
		        }
		    },
		    E:function(a){
		    	return typeof a == "string" ? document.getElementById(a) : a;
		    }
	};
	var c = {}, d = {prov0: "城市/地区",code0: "0",prov34: "合肥,芜湖,蚌埠,淮南,马鞍山,淮北,铜陵,安庆,黄山,滁州,阜阳,宿州,巢湖,六安,亳州,池州,宣城",code34: "1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18",prov11: "东城区,西城区,崇文区,宣武区,朝阳区,丰台区,石景山区,海淀区,门头沟区,房山区,通州区,顺义区,昌平区,大兴区,怀柔区,平谷区,密云县,延庆县",code11: "1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,28,29",prov50: "万州区,涪陵区,渝中区,大渡口区,江北区,沙坪坝区,九龙坡区,南岸区,北碚区,万盛区,双桥区,渝北区,巴南区,黔江区,长寿区,綦江县,潼南县,铜梁县,大足县,荣昌县,璧山县,梁平县,城口县,丰都县,垫江县,武隆县,忠县,开县,云阳县,奉节县,巫山县,巫溪县,石柱土家族自治县,秀山土家族苗族自治县,酉阳土家族苗族自治县,彭水苗族土家族自治县,江津区,合川区,永川区,南川区",code50: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,81,82,83,84",prov35: "福州,厦门,莆田,三明,泉州,漳州,南平,龙岩,宁德",code35: "1,2,3,4,5,6,7,8,9",prov62: "兰州,嘉峪关,金昌,白银,天水,武威,张掖,平凉,酒泉,庆阳,定西,陇南,临夏,甘南",code62: "1,2,3,4,5,6,7,8,9,10,24,26,29,30",prov44: "广州,韶关,深圳,珠海,汕头,佛山,江门,湛江,茂名,肇庆,惠州,梅州,汕尾,河源,阳江,清远,东莞,中山,潮州,揭阳,云浮",code44: "1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,51,52,53",prov45: "南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,百色,贺州,河池,来宾,崇左",code45: "1,22,3,4,5,6,7,8,9,10,11,12,13,14",prov52: "贵阳,六盘水,遵义,安顺,铜仁,黔西南,毕节,黔东南,黔南",code52: "1,2,3,4,22,23,24,26,27",prov46: "海口,三亚,其他",code46: "1,2,90",prov13: "石家庄,唐山,秦皇岛,邯郸,邢台,保定,张家口,承德,沧州,廊坊,衡水",code13: "1,2,3,4,5,6,7,8,9,10,11",prov23: "哈尔滨,齐齐哈尔,鸡西,鹤岗,双鸭山,大庆,伊春,佳木斯,七台河,牡丹江,黑河,绥化,大兴安岭",code23: "1,2,3,4,5,6,7,8,9,10,11,12,27",prov41: "郑州,开封,洛阳,平顶山,安阳,鹤壁,新乡,焦作,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店,济源",code41: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18",prov42: "武汉,黄石,十堰,宜昌,襄阳,鄂州,荆门,孝感,荆州,黄冈,咸宁,随州,恩施土家族苗族自治州,仙桃,潜江,天门,神农架",code42: "1,2,3,5,6,7,8,9,10,11,12,13,28,29,30,31,32",prov43: "长沙,株洲,湘潭,衡阳,邵阳,岳阳,常德,张家界,益阳,郴州,永州,怀化,娄底,湘西土家族苗族自治州",code43: "1,2,3,4,5,6,7,8,9,10,11,12,13,31",prov15: "呼和浩特,包头,乌海,赤峰,通辽,鄂尔多斯,呼伦贝尔,兴安盟,锡林郭勒盟,乌兰察布盟,巴彦淖尔盟,阿拉善盟",code15: "1,2,3,4,5,6,7,22,25,26,28,29",prov32: "南京,无锡,徐州,常州,苏州,南通,连云港,淮安,盐城,扬州,镇江,泰州,宿迁",code32: "1,2,3,4,5,6,7,8,9,10,11,12,13",prov36: "南昌,景德镇,萍乡,九江,新余,鹰潭,赣州,吉安,宜春,抚州,上饶",code36: "1,2,3,4,5,6,7,8,9,10,11",prov22: "长春,吉林,四平,辽源,通化,白山,松原,白城,延边朝鲜族自治州",code22: "1,2,3,4,5,6,7,8,24",prov21: "沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,营口,阜新,辽阳,盘锦,铁岭,朝阳,葫芦岛",code21: "1,2,3,4,5,6,7,8,9,10,11,12,13,14",prov64: "银川,石嘴山,吴忠,固原,中卫",code64: "1,2,3,4,5",prov63: "西宁,海东,海北,黄南,海南,果洛,玉树,海西",code63: "1,21,22,23,25,26,27,28",prov14: "太原,大同,阳泉,长治,晋城,朔州,晋中,运城,忻州,临汾,吕梁",code14: "1,2,3,4,5,6,7,8,9,10,23",prov37: "济南,青岛,淄博,枣庄,东营,烟台,潍坊,济宁,泰安,威海,日照,莱芜,临沂,德州,聊城,滨州,菏泽",code37: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17",prov31: "黄浦区,卢湾区,徐汇区,长宁区,静安区,普陀区,闸北区,虹口区,杨浦区,闵行区,宝山区,嘉定区,浦东新区,金山区,松江区,青浦区,南汇区,奉贤区,崇明县",code31: "1,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,30",prov51: "成都,自贡,攀枝花,泸州,德阳,绵阳,广元,遂宁,内江,乐山,南充,眉山,宜宾,广安,达州,雅安,巴中,资阳,阿坝,甘孜,凉山",code51: "1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,32,33,34",prov12: "和平区,河东区,河西区,南开区,河北区,红桥区,塘沽区,汉沽区,大港区,东丽区,西青区,津南区,北辰区,武清区,宝坻区,宁河县,静海县,蓟县,滨海新区,保税区",code12: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,21,23,25,26,27",prov54: "拉萨,昌都,山南,日喀则,那曲,阿里,林芝",code54: "1,21,22,23,24,25,26",prov65: "乌鲁木齐,克拉玛依,吐鲁番,哈密,昌吉,博尔塔拉,巴音郭楞,阿克苏,克孜勒苏,喀什,和田,伊犁,塔城,阿勒泰,石河子",code65: "1,2,21,22,23,27,28,29,30,31,32,40,42,43,44",prov53: "昆明,曲靖,玉溪,保山,昭通,楚雄,红河,文山,思茅,西双版纳,大理,德宏,丽江,怒江,迪庆,临沧",code53: "1,3,4,5,6,23,25,26,27,28,29,31,32,33,34,35",prov33: "杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水",code33: "1,2,3,4,5,6,7,8,9,10,11",prov61: "西安,铜川,宝鸡,咸阳,渭南,延安,汉中,榆林,安康,商洛",code61: "1,2,3,4,5,6,7,8,9,10",prov71: "台北市,高雄市,基隆市,台中市,台南市,新竹市,嘉义市,新北市,宜兰县,桃园县,新竹县,苗栗县,台中县,彰化县,南投县,云林县,嘉义县,台南县,高雄县,屏东县,澎湖县,台东县,花莲县,其他",code71: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,90",prov81: "中西区,东区,九龙城区,观塘区,南区,深水埗区,黄大仙区,湾仔区,油尖旺区,离岛区,葵青区,北区,西贡区,沙田区,屯门区,大埔区,荃湾区,元朗区,其他",code81: "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1",prov82: "花地玛堂区,圣安多尼堂区,大堂区,望德堂区,风顺堂区,氹仔,路环,其他",code82: "2,3,4,5,6,7,8,1",prov400: "美国,英国,法国,俄罗斯,加拿大,巴西,澳大利亚,印尼,泰国,马来西亚,新加坡,菲律宾,越南,印度,日本,新西兰,韩国,德国,意大利,爱尔兰,荷兰,瑞士,乌克兰,南非,芬兰,瑞典,奥地利,西班牙,比利时,挪威,丹麦,波兰,阿根廷,白俄罗斯,哥伦比亚,古巴,埃及,希腊,匈牙利,伊朗,蒙古,墨西哥,葡萄牙,沙特阿拉伯,土耳其,其他",code400: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,16",prov100: "",code100: "",provinces: "安徽,北京,重庆,福建,甘肃,广东,广西,贵州,海南,河北,黑龙江,河南,湖北,湖南,内蒙古,江苏,江西,吉林,辽宁,宁夏,青海,山西,山东,上海,四川,天津,西藏,新疆,云南,浙江,陕西,台湾,香港,澳门,海外,其他",provcodes: "34,11,50,35,62,44,45,52,46,13,23,41,42,43,15,32,36,22,21,64,63,14,37,31,51,12,54,65,53,33,61,71,81,82,400,100"};
	e = function(a) {
        this.init(a);
    };
    (function(e) {
        e.init = function(option) {
            var b = "0", c = "1000", d = "1000";
            this.provDom = a.E(option.provDom);
            this.cityDom = a.E(option.cityDom);
            this.provDom && (b = this.provDom.getAttribute("defValue") || "0");
            this.cityDom && (c = this.cityDom.getAttribute("defValue") || "1000");
            this.provCode = option.provCode || b;
            this.cityCode = option.cityCode || c;
            this.noLimit = option.noLimit;
            this.badDesign = option.badDesign;
            this.hiddenInputDomId=option.hiddenInputDomId;
            this.onSelected = option.onSelected || function() {
            };
            this.loadProv();
            this.loadCity();
            this.bindEvent("prov");
            this.bindEvent("city");
        };
        e.onChange = function(a) {
            var b = {prov: "city",city: "area"}, c = this, d = b[a] + "Code";
            var self_this = this ;
            return function() {
                c[a + "Code"] = c[a + "Dom"].value;
                if (a !== "area") {
                    c.noLimit ? c.noLimit[b[a]] ? c[d] = 1 : c[d] = 1e3 : c[d] = 1e3;
                    a === "prov" && c.loadCity();
                    c.areaDom && c.loadArea()
                }
                c.onSelected({provCode: c.provDom ? c.provCode : "",cityCode: c.cityDom ? c.cityCode : "",areaCode: c.areaDom ? c.areaCode : ""})
                var hiddenProCode = (c.provDom ? c.provCode : "");
                var hiddenCityCode =  c.cityDom ? c.cityCode : "";
                if(self_this.hiddenInputDomId){
                	var dom = (typeof self_this.hiddenInputDomId == "string" ? document.getElementById(self_this.hiddenInputDomId) : self_this.hiddenInputDomId);
                	if(null!= dom)
                		dom.value=hiddenProCode+"-"+hiddenCityCode;
                }
            }
        };
        e.bindEvent = function(b) {
            if (!!this[b + "Dom"]) {
                this[b + "handler"] && a.removeEvent(this[b + "Dom"], "change", this[b + "handler"]);
                this[b + "handler"] = this.onChange(b);
                a.addEvent(this[b + "Dom"], "change", this[b + "handler"])
            }
        };
        e.loadProv = function() {
            if (!!this.provDom) {
                var c = this.provDom.options, e = d.provcodes.split(","), f = d.provinces.split(",");
                if (c.length <= 1) {
                    if (!this.noLimit || !this.noLimit.province)
                        c[0] = new Option("省/直辖市", 0);
                    for (var g = 0, h = e.length; g < h; g++)
                        c[c.length] = new Option(f[g], e[g]);
                }
                a.findout(e, this.provCode) != -1 ? this.provDom.value = this.provCode : this.provDom.value = 0
            }
        };
        e.loadCity = function() {
            if (!!this.cityDom) {
                if (this.provCode == "100" && !this.badDesign) {
                	$(this.cityDom).attr( "display", "none");
                    this.cityDom.disabled = !0;
                    return !1
                }
                this.cityDom.disabled = !1;
                $(this.cityDom).attr( "display", "");
                var c = this.cityDom.options;
                while (c.length)
                    this.cityDom.remove(0);
                var e = d["code" + this.provCode].split(","), f = d["prov" + this.provCode].split(",");
                if (!this.noLimit || !this.noLimit.city)
                    c[0] = new Option("不限", 1e3);
                for (var g = 0, h = e.length; g < h; g++)
                    f[g] && e[g] && (c[c.length] = new Option(f[g], e[g]));
                a.findout(e, this.cityCode).length > 0 ? this.cityDom.value = this.cityCode : this.noLimit ? this.noLimit.city && (this.cityDom.value = 1) : this.cityDom.value = 1e3
            }
        };
        e.reload = function(a) {
            this.init(a)
        };
        e.refresh = function(a) {
            this.provCode = a.pro;
            this.provDom.value = a.pro;
            this.loadCity();
            this.cityDom.value = a.city
        }
    })(e.prototype);
    
    module.exports = e;

});
