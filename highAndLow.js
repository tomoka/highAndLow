(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#003300",
	manifest: []
};



// symbols:



(lib.chip = function() {
	this.spriteSheet = ss["highAndLow_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.trump52 = function() {
	this.spriteSheet = ss["highAndLow_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MC_win = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94790B","#FFE600","#FFFFFF","#FFD500","#FFFFFF","#FFE900","#938705"],[0,0.176,0.345,0.62,0.706,0.788,1],-26.5,0,26.6,0).s().p("ABbFOIi0lsIgBAAIAAFsIiuAAIAAqbICuAAICzFsIACAAIAAlsICuAAIAAKbg");
	this.shape.setTransform(135.8,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#94790B","#FFE600","#FFFFFF","#FFD500","#FFFFFF","#FFE900","#938705"],[0,0.176,0.345,0.62,0.706,0.788,1],-10,0,10.1,0).s().p("AhjFOIAAqbIDHAAIAAKbg");
	this.shape_1.setTransform(95.4,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#94790B","#FFE600","#FFFFFF","#FFD500","#FFFFFF","#FFE900","#938705"],[0,0.176,0.345,0.62,0.706,0.788,1],-39.3,0,39.4,0).s().p("AA2FOIg2njIAAAAIg1HjIjTAAIiAqbIC5AAIA2HjIACAAIAsnjIDaAAIAtHjIACAAIA2njIC1AAIiAKbg");
	this.shape_2.setTransform(43,36.4);

	// レイヤー 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABOFiIiUkxIAAExIjWAAIAArDIDOAAICVExIAAkxIDWAAIAALDgAhMgyIC0FrICNAAIAApxIiGAAIAAFrIgiAAIizlrIiOAAIAAJxICGAAIAAlrg");
	this.shape_3.setTransform(135.8,36.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABbFOIi0lsIgBAAIAAFsIiuAAIAAqbICuAAICzFsIACAAIAAlsICuAAIAAKbg");
	this.shape_4.setTransform(135.8,36.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah3FiIAArDIDvAAIAALDgAhPE5ICfAAIAApxIifAAg");
	this.shape_5.setTransform(95.4,36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhjFOIAAqbIDHAAIAAKbg");
	this.shape_6.setTransform(95.4,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlFiIgllNIgkFNIj1AAIiHrDIDjAAIAjE9IAdk9ID+AAIAeE9IAjk9IDfAAIiHLDgAASiqIA2HjICxAAIB4pxIiLAAIg2HiIgmAAIgtniIi1AAIgtHiIgmAAIg2niIiPAAIB4JxICxAAIA2njg");
	this.shape_7.setTransform(43,36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2FOIg2njIAAAAIg1HjIjTAAIiAqbIC5AAIA2HjIACAAIAsnjIDaAAIAtHjIACAAIA2njIC1AAIiAKbg");
	this.shape_8.setTransform(43,36.4);

	// レイヤー 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#766900").s().p("ABIFsIiEkQIAAEQIjqAAIAArXIDeAAICFEQIAAkQIDqAAIAALXgAhGg8IC0FrIB9AAIAApdIhyAAIAAFrIgzAAIizlrIh9AAIAAJdIByAAIAAlrg");
	this.shape_9.setTransform(135.8,36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#766900").s().p("ABbFOIi0lsIgBAAIAAFsIiuAAIAAqbICuAAICzFsIACAAIAAlsICuAAIAAKbg");
	this.shape_10.setTransform(135.8,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#766900").s().p("AiBFsIAArXIEDAAIAALXgAhFEvICLAAIAApdIiLAAg");
	this.shape_11.setTransform(95.4,36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#766900").s().p("AhjFOIAAqbIDHAAIAAKbg");
	this.shape_12.setTransform(95.4,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#766900").s().p("AAcFsIgcj9IgbD9IkGAAIiMrXID5AAIAZDlIAVjlIERAAIAVDlIAZjlID1AAIiMLXgAAbi0IA2HjICfAAIB1pdIh2AAIg2HjIg4AAIgtnjIijAAIgtHjIg4AAIg2njIh6AAIB1JdICfAAIA2njg");
	this.shape_13.setTransform(43,36.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#766900").s().p("AA2FOIg2njIAAAAIg1HjIjTAAIiAqbIC5AAIA2HjIACAAIAsnjIDaAAIAtHjIACAAIA2njIC1AAIiAKbg");
	this.shape_14.setTransform(43,36.4);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.3,72.8);


(lib.MC_start = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARNCpQg+g/AAhqQAAhpA+g/QA/g8BpgBQBrABA9A8QA/BAAABoQAABpg/BAQg9A8hrABQhpgBg/g8gASNAAQAACBBogBQBpABAAiBQAAiAhpABQhogBAACAgAktCpQg/g/AAhqQAAhpA/g/QA/g8BogBQBrABA8A8QA+BAAABoQAABpg+BAQg8A8hrABQhogBg/g8gAjtAAQAACBBngBQBpABAAiBQAAiAhpABQhngBAACAgA7KCoQhDg/AAhpQAAhpBBg/QBCg8BzgBQBbABA/AqIgiBYQg2gig1AAQg/AAgkAjQgjAiAAA/QAAA+AkAkQAlAjA9AAQAYAAASgHIAAhXIhcAAIAAhaIDRAAIAAD6QhRAfhbAAQhygBhBg9gEAh6ADgIAAhjIB6AAIAABjgAclDgIgtlDIgBAAIguFDIiNAAIhfm/IB8AAIAuFDIABAAIAolDICTAAIAnFDIABAAIAtlDIB6AAIhfG/gALTDgIAAm/IB9AAIAAFaIC2AAIAABlgAFuDgIgmh1QgHgXgKgHQgKgJgRAAIgcAAIAACcIh4AAIAAm/ICUAAQBnAAAuAhQAvAhAABDQAAAmgZAhQgXAggmAOIAAABQARAKAOAQQALAPAMAfIAtB8gAEAgUIAhAAQAfAAATgPQASgPAAgcQAAgegQgKQgPgMglAAIghAAgAtEDgIAAhjIB7AAIAABjgAwzDgIAAi5IiBAAIAAC5Ih7AAIAAm/IB7AAIAACsICBAAIAAisIB7AAIAAG/gA/ADgIAAm/ICHAAIAAG/gEgh/ADgIAAi5IiBAAIAAC5Ih7AAIAAm/IB7AAIAACsICBAAIAAisIB7AAIAAG/gEAh/ABNQAAgWAIgVQAIgUANgOIAYgZIAygpIAOgQQAHgJAAgIQAAgjg4AAQg5AAhLAZIgVhgQBPgYBdAAQBOAAAsAfQAsAfAAAxQAAAZgHAQQgFAUgOAOQgKALgNAMIg8ApQgJAJgLAOQgLARgBAQgAs+BNQAAgWAHgVQAGgRAPgRQASgUAHgFIAygpIAOgQQAGgLAAgGQAAgjg3AAQg6AAhKAZIgWhgQBPgYBdAAQBPAAArAfQAsAfAAAxQAAAZgGAQQgGAUgOAOIgXAXIg7ApQgKAJgLAOQgKAOgDATg");
	this.shape.setTransform(275,45);

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(69,69,69,0.8)").s().p("Egq9AHCIAAuDMBV6AAAIAAODg");
	this.shape_1.setTransform(273,47.1,1,1,0,0,0,-2,2.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,90);


(lib.MC_result = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuFwQhUhTAAilIAAosIDOAAIAAI7QAAAoAIAdQAIAdAPASQAQARAZAJQAZAJAkAAQAiAAAZgJQAZgJAQgRQAfgjAAhRIAAo7IDKAAIAAIsQAAClhUBTQhVBSinAAQioAAhUhSgApuGDIAAitQBxBMB7AAQBAAAAhgYQAhgZAAgtQAAgogXgZQgXgZg4gSQiYgxhChFQgigkgRgrQgRgsAAg0QAAgdAGgaQAOhKA7gxQBOhCCTAAQBMAABCANQBCAMA3AYIAACrQgkgSgmgNQgZgJgagHQg+gOhAAAQg3AAgcAVQgGAEgEAFQgRAVgBAiQAAAmAZAZQAYAbAvAPQCmAyBABCQAgAhARAsQAPAtAAA2QAACBhRBBQhRBAijAAQiLAAhtg/gAarG2IAArBIjoAAIAAipIKgAAIAACpIjoAAIAALBgAOkG2IAAtqIDSAAIAALBIFyAAIAACpgA0/G2IAAtqIIvAAIAAClIljAAIAACzIFLAAIAACYIlLAAIAADVIFjAAIAAClgA6YG2IhSjuQgRgygYgSQgYgSgzAAIg7AAIAAFEIjJAAIAAtkQCEgTCcAAQBbABBCARQBDAQAsAjQA9AuATBKQAIAiAAAmQABBRgvBAQgXAggfAVQggAXgmANIAAADQAfASAZAjQAbAkATA2IBdD2gA+ZkeIAAD8IBCAAQBVAAAsgjQAWgTALgYQALgZAAgfQAAg9gmgfQgpghhVAAQgrAAggAHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-214.7,-45,429.4,90);


(lib.MC_low = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D9BDD").s().p("AAcCrIgcj3IAAAAIgaD3IhsAAIhClUIBfAAIAcD2IAAAAIAYj2IBuAAIAXD2IABAAIAcj2IBcAAIhBFUg");
	this.shape.setTransform(83.9,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D9BDD").s().p("Ah2CAQgsguAAhSQAAhQAsgwQAsguBKgBQBLABAsAuQAsAwAABQQAABSgsAuQgsAwhLgBQhKABgsgwgAhCAAQAABiBCAAQBDAAAAhiQAAhhhDAAQhCAAAABhg");
	this.shape_1.setTransform(47,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D9BDD").s().p("Ah0CrIAAlUIBhAAIAAEGICIAAIAABOg");
	this.shape_2.setTransform(18,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcDKQgUAAgIgRQgHARgUAAIhsAAQgLAAgJgHQgIgIgDgLIhBlUQgDgOAJgMQAKgLAPAAIBfAAQAQAAAJANQAKgNAQAAIBvAAQAQAAAJANQAKgNAQAAIBdAAQAPAAAJALQAKALgDAPIhCFUQgCALgIAIQgJAHgMAAgAA4CLIA1AAIA2kVIgbAAIgYDbQgBALgJAIQgJAJgMAAQgKgBgJgFQgIgGgEgIgAhsCLIA1AAIAFguQgKAPgRABQgMAAgJgJQgKgIgBgLIgZjbIgcAAgAAqATIgOidIg1AAIgGA8IABgBQABgNAJgHQAJgIALAAQALAAAKAIQAJAHABANIALBig");
	this.shape_3.setTransform(83.9,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcCrIgcj3IAAAAIgaD3IhsAAIhClUIBfAAIAcD2IAAAAIAYj2IBuAAIAXD2IABAAIAcj2IBcAAIhBFUg");
	this.shape_4.setTransform(83.9,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNCWQg1g3AAhfQAAhdA1g4QA1g5BYAAQBZAAA1A5QA1A4AABdQAABfg1A3Qg1A5hZAAQhYAAg1g5gAhfhqQgkAmAABEQAABFAkAmQAjAlA8AAQA9AAAjglQAkgmAAhFQAAhEgkgmQgjgkg9AAQg8AAgjAkgAg+BrQgkghAAhKQAAhJAkghQAZgWAlgBQAmABAZAWQAkAhAABJQAABKgkAhQgZAXgmgBQglABgZgXgAgVg5QgOAPAAAqQAAArAOAPQAHAIAOAAQAOAAAIgIQAOgPAAgrQAAgqgOgPQgIgJgOAAQgOAAgHAJg");
	this.shape_5.setTransform(47,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah2CAQgsguAAhSQAAhQAsgwQAsguBKgBQBLABAsAuQAsAwAABQQAABSgsAuQgsAwhLgBQhKABgsgwgAhCAAQAABiBCAAQBDAAAAhiQAAhhhDAAQhCAAAABhg");
	this.shape_6.setTransform(47,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0DKQgNAAgJgJQgJgJAAgNIAAlUQAAgOAJgJQAJgJANAAIBhAAQANAAAHAJQAJAJAAAOIAADnIBrAAQANAAAJAJQAJAJAAANIAABOQAAANgJAJQgJAJgNAAgAhUCLICpAAIAAgOIhoAAQgNAAgKgJQgJgKAAgNIAAjnIghAAg");
	this.shape_7.setTransform(18,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0CrIAAlUIBhAAIAAEGICIAAIAABOg");
	this.shape_8.setTransform(18,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#413732").s().p("AAcDqQgQAAgMgHQgLAHgQAAIhsAAQgWAAgSgPQgRgOgFgWIhBlVQgGgdATgXQATgXAeAAIBfAAQANAAAMAGQANgGANAAIBvAAQANAAAMAGQANgGANAAIBdAAQAeAAATAXQATAXgGAdIhCFVQgEAWgRAOQgSAPgXAAg");
	this.shape_9.setTransform(83.9,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#413732").s().p("AAcCrIgcj3IAAAAIgaD3IhsAAIhClVIBfAAIAcD3IAAAAIAYj3IBuAAIAXD3IABAAIAcj3IBcAAIhBFVg");
	this.shape_10.setTransform(83.9,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#413732").s().p("AikCsQg+hCAAhqQAAhpA+hCQA+hDBmAAQBnAAA+BDQA+BCAABpQAABqg+BCQg+BDhngBQhmABg+hDgAgDAAQAAAYADAKIAAAAQAEgNAAgVQAAgVgEgNIAAAAQgDAKAAAYg");
	this.shape_11.setTransform(47,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#413732").s().p("Ah2CAQgsguAAhSQAAhRAsguQAsgvBKAAQBLAAAsAvQAsAuAABRQAABSgsAuQgsAvhLAAQhKAAgsgvgAhCAAQAABiBCAAQBDAAAAhiQAAhhhDAAQhCAAAABhg");
	this.shape_12.setTransform(47,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#413732").s().p("Ah0DqQgaAAgSgTQgTgSAAgaIAAlVQAAgaATgSQASgTAaAAIBgAAQAYAAATATQASASAAAaIAADIIBMAAQAaAAATATQASASAAAaIAABOQAAAagSASQgTATgaAAg");
	this.shape_13.setTransform(18.1,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#413732").s().p("Ah0CrIAAlVIBhAAIAAEHICIAAIAABOg");
	this.shape_14.setTransform(18,23.9);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.4,47.8);


(lib.MC_lost = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-23.8,0,23.8,0).s().p("AjaElIAAiYQBXA8BlAAQBQAAAAg3QAAgagNgNQgMgOghgLQh6gmg1g2Qg2g5AAhTQAAhZBBg0QBBgzB4AAQB6AABUAlIAACVQhkguhhAAQhJAAAAA0QAAAuA8ASQCBAnAxAxQAzA1AABWQAADKkDAAQhyAAhTgyg");
	this.shape.setTransform(136.8,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-22.9,0,22.9,0).s().p("AjkFOIAAqbIC8AAIAAIEIEMAAIAACXg");
	this.shape_1.setTransform(25.9,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-32,0,32.1,0).s().p("AjpD7QhWhcAAifQAAieBWhcQBWhcCTAAQCUAABWBcQBWBbAACfQAACghWBbQhWBciUAAQiTAAhWhcgAiDAAQAADACDAAQCEAAAAjAQAAi/iEAAQiDAAAAC/g");
	this.shape_2.setTransform(79.2,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-26.5,0,26.6,0).s().p("AhcFOIAAoEIisAAIAAiXIIRAAIAACXIisAAIAAIEg");
	this.shape_3.setTransform(188.1,37.3);

	// レイヤー 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwFiIAAoEIisAAIAAi/II5AAIAAC/IisAAIAAIEgAj0jKICsAAIAAIEICRAAIAAoEICsAAIAAhvInpAAg");
	this.shape_4.setTransform(188.1,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcFOIAAoEIisAAIAAiXIIRAAIAACXIisAAIAAIEg");
	this.shape_5.setTransform(188.1,37.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjlE2IgJgGIAAjIIAfAVQBSA4BfAAQAmAAAOgOQAIgHAAgOQAAgRgHgJQgKgJgbgKQh9gmg6g9Qg8g8AAhcQAAhjBJg5QBGg4B/AAQB+AABYAmIAMAGIAADBIgcgNQhigshbAAQghAAgNAMQgHAHAAANQAAAfAtAOQCFAnA3A4QA4A5AABeQAAB8hdA4QhGAqh0AAQh3AAhZg1gAjGEZQBLAqBmAAQCZAAA4hKQAegoAAhEQAAhPgtguQgvguh7gkQhKgXAAg9QAAgcARgSQAYgaA0AAQBXAABaAkIAAhqQhNgehtAAQhyAAg7AvQg5AuAABPQAABMAxAyQAxAyB1AlQAlAMARASQASATAAAiQAAAdgSATQgZAbg5AAQhZAAhPgsg");
	this.shape_6.setTransform(136.8,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjaElIAAiYQBXA8BlAAQBQAAAAg3QAAgagNgNQgMgOghgLQh6gmg1g2Qg2g5AAhTQAAhZBBg0QBBgzB4AAQB6AABUAlIAACVQhkguhhAAQhJAAAAA0QAAAuA8ASQCBAnAxAxQAzA1AABWQAADKkDAAQhyAAhTgyg");
	this.shape_7.setTransform(136.8,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj3EJQhchiAAinQAAimBchiQBchiCbAAQCcAABcBiQBcBhAACnQAACohcBhQhcBiicAAQibAAhchigAjajtQhRBXAACWQAACXBRBXQBPBVCLAAQCMAABQhVQBQhWAAiYQAAiXhQhWQhQhViMAAQiLAAhPBVgAh6COQgdg1AAhZQAAhYAdg1QAmhGBUAAQBVAAAmBGQAdA1AABYQAABZgdA1QgmBGhVAAQhUAAgmhGgAhdhwQgSAoAABIQAABmAmApQAbAdAuAAQBDAAAbg7QATgogBhJQAAhlgmgpQgagdgwAAQhCAAgbA7g");
	this.shape_8.setTransform(79.2,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjpD7QhWhcAAifQAAieBWhcQBWhcCTAAQCUAABWBcQBWBbAACfQAACghWBbQhWBciUAAQiTAAhWhcgAiDAAQAADACDAAQCEAAAAjAQAAi/iEAAQiDAAAAC/g");
	this.shape_9.setTransform(79.2,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj4FiIAArDIDkAAIAAIEIEMAAIAAC/gAjPE6IGfAAIAAhvIkMAAIAAoEIiTAAg");
	this.shape_10.setTransform(25.9,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjkFOIAAqbIC8AAIAAIEIEMAAIAACXg");
	this.shape_11.setTransform(25.9,37.3);

	// レイヤー 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#349BF1").s().p("Ah6FsIAAoEIisAAIAAjTIJNAAIAADTIisAAIAAIEgAjqjUICsAAIAAIEIB9AAIAAoEICsAAIAAhbInVAAg");
	this.shape_12.setTransform(188.1,37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#349BF1").s().p("AhcFOIAAoEIisAAIAAiXIIRAAIAACXIisAAIAAIEg");
	this.shape_13.setTransform(188.1,37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#349BF1").s().p("AjqE+IgOgJIAAjgIAvAgQBPA2BcAAQAgAAALgJQAHgGAAgKQAAgOgFgFQgIgIgYgJQiAgng8g+Qg+g/AAhgQAAhnBMg9QBKg6CCAAQCAAABaAnIASAIIAADYIgqgUQhfgrhaAAQgbAAgKAIQgGAFAAAJQAAAYAmAMQCIAnA4A6QA7A8AABiQAABig4A6QhIBMihAAQh6AAhbg3gAi8ETQBHAmBgAAQCIAAA3g6QAmgoAAhKQAAhKgqgsQgtgsh5gkQhRgZAAhEQAAgdARgVQAbggA7AAQBSAABVAfIAAhUQhJgbhnAAQhuAAg4AtQg2AqAABLQAABIAuAvQAwAxBxAjQAoANATAUQAVAXAAAlQAAAfgSAVQgcAhhAAAQhTAAhLglg");
	this.shape_14.setTransform(136.8,37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#349BF1").s().p("AjaElIAAiYQBXA8BlAAQBQAAAAg3QAAgagNgNQgMgOghgLQh6gmg1g2Qg2g5AAhTQAAhZBBg0QBBgzB4AAQB6AABUAlIAACVQhkguhhAAQhJAAAAA0QAAAuA8ASQCBAnAxAxQAzA1AABWQAADKkDAAQhyAAhTgyg");
	this.shape_15.setTransform(136.8,37.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#349BF1").s().p("Aj/EQQhehlAAirQAAiqBehlQBghlCfAAQChAABfBlQBeBkAACrQAACsheBkQhfBlihAAQifAAhghlgAjTjmQhOBUAACSQAACTBOBUQBNBSCGAAQCIAABMhSQBOhTAAiUQAAiThOhTQhMhSiIAAQiGAAhNBSgAhsC0Qg1g4AAh8QAAh7A1g4QApgqBDAAQBEAAApAqQA2A4AAB7QAAB8g2A4QgpAqhEAAQhDAAgpgqgAg8iMQgpAlAABnQAABoApAlQAWAVAmAAQAoAAAVgVQApglABhoQgBhngpglQgVgVgoAAQgmAAgWAVg");
	this.shape_16.setTransform(79.2,37.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#349BF1").s().p("AjpD7QhWhcAAifQAAieBWhcQBWhcCTAAQCUAABWBcQBWBbAACfQAACghWBbQhWBciUAAQiTAAhWhcgAiDAAQAADACDAAQCEAAAAjAQAAi/iEAAQiDAAAAC/g");
	this.shape_17.setTransform(79.2,37.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#349BF1").s().p("AkCFsIAArXID5AAIAAIEIEMAAIAADTgAjFEwIGMAAIAAhbIkMAAIAAoEIiAAAg");
	this.shape_18.setTransform(25.9,37.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#349BF1").s().p("AjkFOIAAqbIC8AAIAAIEIEMAAIAACXg");
	this.shape_19.setTransform(25.9,37.3);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,217.7,74.7);


(lib.MC_hight = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7619D").s().p("AAqCrIAAiNIhSAAIAACNIhfAAIAAlUIBfAAIAACCIBSAAIAAiCIBdAAIAAFUg");
	this.shape.setTransform(100.1,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7619D").s().p("AhiCBQgwguAAhTQAAhSAvguQAugvBTAAQA1ABAtAMIAABMQgwgOgmAAQgvAAgXAYQgXAZAAAzQAAA1AWAYQAXAZAogBQALAAANgDIAAhEIg7AAIAAhFICUAAIAADDQg4AUg9gBQhQAAgwgug");
	this.shape_1.setTransform(67.1,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7619D").s().p("AgyCrIAAlUIBlAAIAAFUg");
	this.shape_2.setTransform(43.8,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7619D").s().p("AApCrIAAiNIhSAAIAACNIhdAAIAAlUIBdAAIAACCIBSAAIAAiCIBfAAIAAFUg");
	this.shape_3.setTransform(20,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqDKQgNAAgKgJQgJgKAAgNIAAhtIgTAAIAABtQAAANgKAKQgJAJgMAAIhfAAQgMAAgKgJQgJgKAAgNIAAlUQAAgNAJgJQAKgJAMAAIBfAAQAMAAAJAJQAKAJAAANIAABkIATAAIAAhkQAAgNAJgJQAKgJANAAIBdAAQAOAAAJAJQAJAJAAANIAAFUQAAANgJAKQgJAJgOAAgAAqAAQAMAAAKAHQAKAKgBANIAABtIAfAAIAAkVIgfAAIAABjQABANgKAKQgKAJgMAAIhSAAQgOAAgJgJQgKgKAAgNIAAhjIgeAAIAAEVIAeAAIAAhtQAAgNAKgKQAJgHAOAAg");
	this.shape_4.setTransform(100.1,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqCrIAAiNIhSAAIAACNIhfAAIAAlUIBfAAIAACCIBSAAIAAiCIBdAAIAAFUg");
	this.shape_5.setTransform(100.1,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah4CYQg6g3ABhhQAAhfA3g3QA5g4BfAAQA3AAAzANQALACAGAJQAHAJgBALIAABMQAAAKgEAHQAKADAHAIQAGAJAAAKIAADDQAAAKgFAJQgHAIgJAEQg8AUhDAAQhcAAg6g3gAhNhpQglAkAABFQAABFAmAmQAnAkBDABQAsAAApgLIAAiLIhWAAIAAAGIAdAAQAMAAAKAIQAKAJAAANIAABEQAAALgHAIQgGAJgLACQgQAFgQAAQg3AAgfgjQgfghAAhBQABhAAfghQAtgxBmAUIAAgLQgcgGgmABQhGgBglAmgAAaBGIAAgIIgaAAQAJAGARACg");
	this.shape_6.setTransform(67.1,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhiCBQgwguAAhTQAAhSAvguQAugvBTAAQA1ABAtAMIAABMQgwgOgmAAQgvAAgXAYQgXAZAAAzQAAA1AWAYQAXAZAogBQALAAANgDIAAhEIg7AAIAAhFICUAAIAADDQg4AUg9gBQhQAAgwgug");
	this.shape_7.setTransform(67.1,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyDKQgNAAgKgJQgJgKAAgNIAAlUQAAgNAJgJQAKgJANAAIBlAAQANAAAJAJQAKAJAAANIAAFUQAAANgKAKQgJAJgNAAgAgTCLIAmAAIAAkVIgmAAg");
	this.shape_8.setTransform(43.8,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyCrIAAlUIBlAAIAAFUg");
	this.shape_9.setTransform(43.8,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApDKQgNAAgJgJQgJgKAAgNIAAhtIgTAAIAABtQAAANgKAKQgJAJgNAAIhdAAQgOAAgJgJQgJgKAAgNIAAlUQAAgNAJgJQAJgJAOAAIBdAAQANAAAJAJQAKAJAAANIAABkIATAAIAAhkQAAgNAJgJQAJgJANAAIBfAAQANAAAJAJQAJAJAAANIAAFUQAAANgJAKQgJAJgNAAgAApAAQAOAAAJAHQAJAKAAANIAABtIAeAAIAAkVIgeAAIAABjQAAANgJAKQgJAJgOAAIhSAAQgNAAgJgJQgKgKAAgNIAAhjIgeAAIAAEVIAeAAIAAhtQAAgNAKgKQAJgHANAAg");
	this.shape_10.setTransform(20,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AApCrIAAiNIhSAAIAACNIhdAAIAAlUIBdAAIAACCIBSAAIAAiCIBfAAIAAFUg");
	this.shape_11.setTransform(20,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#413732").s().p("AAqDqQgZAAgRgQQgQAQgYAAIhfAAQgaAAgSgTQgTgSAAgaIAAlVQAAgaATgSQASgTAaAAIBfAAQAYAAAQAQQARgQAZAAIBdAAQAaAAATATQASASAAAaIAAFVQAAAagSASQgSATgbAAg");
	this.shape_12.setTransform(100.1,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#413732").s().p("AAqCrIAAiNIhSAAIAACNIhfAAIAAlVIBfAAIAACEIBSAAIAAiEIBdAAIAAFVg");
	this.shape_13.setTransform(100.1,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#413732").s().p("AiOCuQhDhBAAhtQAAhsBBhBQBBhABtgBQA9AAA1AOQAVAFANARQANASAAAVIAABPQATASAAAbIAADDQAAAVgLAQQgMARgUAGQhAAXhJgBQhpABhDhBg");
	this.shape_14.setTransform(67.1,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#413732").s().p("AhiCBQgwguAAhTQAAhSAvguQAuguBTAAQA1AAAtAMIAABMQgzgOgjAAQgvAAgXAYQgXAYAAA0QAAA1AWAYQAWAYApAAQANAAALgDIAAhEIg7AAIAAhEICUAAIAADDQg2ASg/AAQhQAAgwgug");
	this.shape_15.setTransform(67.1,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#413732").s().p("AgyDqQgaAAgTgTQgSgSAAgaIAAlVQAAgaASgSQATgTAaAAIBlAAQAaAAATATQASASAAAaIAAFVQAAAagSASQgTATgaAAg");
	this.shape_16.setTransform(43.8,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#413732").s().p("AgyCrIAAlVIBlAAIAAFVg");
	this.shape_17.setTransform(43.8,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#413732").s().p("AAqDqQgZAAgRgQQgRAQgYAAIhdAAQgbAAgSgTQgTgSAAgaIAAlVQAAgaATgSQATgTAaAAIBdAAQAYAAARAQQARgQAZAAIBeAAQAaAAASATQATASAAAaIAAFVQAAAagTASQgSATgaAAg");
	this.shape_18.setTransform(19.9,23.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#413732").s().p("AApCrIAAiNIhSAAIAACNIhdAAIAAlVIBdAAIAACEIBSAAIAAiEIBfAAIAAFVg");
	this.shape_19.setTransform(20,23.9);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,47.8);


(lib.MC_drow = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80BD26").s().p("AAcCqIgcj2IAAAAIgbD2IhsAAIhBlTIBfAAIAbD2IABAAIAXj2IBvAAIAXD2IABAAIAbj2IBdAAIhCFTg");
	this.shape.setTransform(119.8,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80BD26").s().p("AA9CqIgQhCIhcAAIgQBCIhhAAIBxlSIBgAAIBvFSgAgeAiIA8AAIgeh7IAAAAg");
	this.shape_1.setTransform(83,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80BD26").s().p("AAoCtIgdhZQgFgQgHgIQgIgHgMAAIgWAAIAAB4IhbAAIAAlSQA/gHA7AAQCKAAAABpQAAAdgTAaQgSAYgdAKIAAABQAQAJAIAMQAJANAJAWIAhBegAgrhjIAABWIAaAAQAWAAANgMQAOgMABgUQAAgsgyAAQgNAAgNACg");
	this.shape_2.setTransform(51.1,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80BD26").s().p("AiLCoIAAlPQAygHA1AAQBSAAAvAtQAvAtAABRQAABWgvAuQgvAuhSAAQg1AAgygHgAgwhjIAADHQAKACAMAAQAlAAAUgZQAUgZAAg3QAAg0gUgXQgUgXglAAQgMAAgKACg");
	this.shape_3.setTransform(20.4,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcDKQgUAAgIgRQgHARgUAAIhsAAQgLAAgJgHQgIgIgDgLIhBlTQgDgQAJgKQAJgMAQAAIBfAAQAQAAAJANQAKgNAQAAIBvAAQAQAAAJANQAKgNAQAAIBdAAQAPAAAJAMQAKALgDAPIhCFTQgCALgIAIQgJAHgMAAgAA4CLIA1AAIA2kVIgbAAIgYDaQgBAMgJAIQgJAIgMAAQgKAAgJgFQgIgGgEgJgAhsCLIA1AAIAFguQgKAPgRAAQgMAAgJgIQgKgIgBgMIgZjaIgcAAgAAqASIgOicIg1AAIgGA8IABgBQABgMAJgIQAJgIALAAQALAAAKAIQAJAIABAMIALBhg");
	this.shape_4.setTransform(119.8,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcCqIgcj2IAAAAIgbD2IhsAAIhBlTIBfAAIAbD2IABAAIAXj2IBvAAIAXD2IABAAIAbj2IBdAAIhCFTg");
	this.shape_5.setTransform(119.8,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA9DIQgKgBgIgGQgIgHgDgKIgKgqIguAAIgKAqQgCAKgIAHQgIAGgLABIhhAAQgQAAgIgNQgJgMAFgPIBwlSQADgJAIgGQAHgGAKAAIBgAAQAKAAAIAGQAIAGADAJIBwFSQAFAPgJAMQgKANgPAAgAAtBKQALAAAIAHQAIAGADAKIAKAqIAiAAIhckWIg1AAIhcEWIAfAAIAKgpQADgLAIgGQAIgHALAAgAgfBAQgOAAgJgLQgJgMADgOIAfh7QACgKAIgHQAIgGALgBQAIABAJAGQAJAHACAKIAeB7QADAOgIAMQgJALgPAAg");
	this.shape_6.setTransform(83,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA9CqIgQhCIhcAAIgQBCIhhAAIBxlSIBgAAIBvFSgAgeAiIA8AAIgeh7IAAAAg");
	this.shape_7.setTransform(83,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnDMQgKAAgIgGQgJgGgDgJIgUhGIAAA8QAAANgKAJQgJAJgNAAIhbAAQgNAAgKgJQgJgJAAgNIAAlSQAAgMAIgJQAIgJAMgBQA+gHA/AAQBhAAArAxQAeAiAAA1QAAAogYAgQgLAOgLAJQALARAJAXIAiBeQAFAQgJANQgKANgQAAgAgWAWQAXAAARAPQAPANAHAYIAWBDIAcAAIgSgzQgHgTgGgIQgFgHgJgFQgQgJAAgTQAAgKAGgIQAFgHAJgDQAVgIAMgRQAMgSAAgTQAAgegOgPQgYgchFAAQgyAAgoAEIAAEVIAcAAIAAhYQAAgNAJgJQAKgJANAAgAgrARQgNAAgKgJQgJgIAAgNIAAhWQAAgLAHgJQAHgIALgDQAPgDASAAQAlAAAWAUQAWAUAAAkQAAAjgZAVQgWASgiAAgAgLgtQAIgBADgDQABgDAAgFQAAgHgBgCQgCgDgJgBg");
	this.shape_8.setTransform(51.1,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoCtIgdhZQgFgQgHgIQgIgHgMAAIgWAAIAAB4IhbAAIAAlSQA/gHA7AAQCKAAAABpQAAAdgTAaQgSAYgdAKIAAABQAQAJAIAMQAJANAJAWIAhBegAgrhjIAABWIAaAAQAWAAANgMQAOgMABgUQAAgsgyAAQgNAAgNACg");
	this.shape_9.setTransform(51.1,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiQDHQgLgBgIgJQgIgJAAgMIAAlPQAAgMAIgJQAIgJALgBQAzgIA5AAQBeAAA5A2QA5A3AABeQAABjg5A3Qg5A4heAAQg5AAgzgIgAhsiLIAAEXQAjADAlAAQBFAAAmglQAlglAAhIQAAhDglgkQglgkhGAAQglAAgjADgAg3CDQgLgCgGgJQgHgJAAgLIAAjHQAAgLAHgJQAGgJALgCQAPgDANAAQA1AAAdAjQAcAfAABAQAABBgbAjQgeAlg1AAQgLAAgRgDgAgQBGQAPgCAHgKQANgRAAgsQAAgpgMgOQgHgKgQgCg");
	this.shape_10.setTransform(20.4,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiLCoIAAlPQAygHA1AAQBSAAAvAtQAvAtAABRQAABWgvAuQgvAuhSAAQg1AAgygHgAgwhjIAADHQAKACAMAAQAlAAAUgZQAUgZAAg3QAAg0gUgXQgUgXglAAQgMAAgKACg");
	this.shape_11.setTransform(20.4,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#413732").s().p("AAcDqQgQgBgMgGQgLAGgQABIhsAAQgWAAgSgPQgRgOgFgXIhBlUQgGgdATgWQATgYAeAAIBfAAQANABAMAFQANgFANgBIBvAAQANABAMAFQANgFANgBIBdAAQAeAAATAYQATAWgGAdIhCFUQgEAXgRAOQgSAPgXAAg");
	this.shape_12.setTransform(119.8,24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#413732").s().p("AAcCrIgcj3IAAAAIgbD3IhsAAIhBlVIBfAAIAbD3IABAAIAXj3IBvAAIAXD3IABAAIAbj3IBdAAIhCFVg");
	this.shape_13.setTransform(119.8,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#403732").s().p("AA9DrQgWAAgRgOQgSgNgEgXQgFAXgRANQgSAOgXAAIhhAAQggAAgVgbQgIgNgDgPQgDgQAFgPIBxlSQAGgUASgMQAQgMAWAAIBgAAQAVAAARAMQARAMAGAUIBwFSQAFAPgCAQQgCAPgKANQgTAbgiAAg");
	this.shape_14.setTransform(83,23.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#413732").s().p("AA9CqIgQhCIhcAAIgQBCIhhAAIBxlSIBgAAIBvFSgAgeAiIA8AAIgeh8IAAAAg");
	this.shape_15.setTransform(83,23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#413732").s().p("AAnDsQgYAAgQgQQgSAQgYAAIhbAAQgbAAgSgTQgTgSAAgaIAAlSQAAgYAQgSQAQgSAYgDQBDgHA+AAQB2AAAzBCQAhAqAAA8QAAAygeAoIgIAKIArB2QALAfgSAbQgUAbggAAg");
	this.shape_16.setTransform(51.1,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#413732").s().p("AAoCtIgdhZQgFgRgHgHQgHgHgNAAIgWAAIAAB4IhbAAIAAlSQA/gHA7AAQCKAAAABpQAAAdgTAaQgSAYgdAKIAAABQAPAIAJANQAJALAJAYIAhBegAgrhjIAABWIAaAAQAWAAANgMQAOgMABgUQAAgsgyAAQgQAAgKACg");
	this.shape_17.setTransform(51.1,23.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#413732").s().p("AiUDmQgYgDgPgSQgQgSAAgXIAAlPQAAgYAQgSQAPgRAYgEQA0gHA8AAQBsAABCA/QBBA/AABrQAABxhBBAQhCBBhsAAQg9AAgzgIg");
	this.shape_18.setTransform(20.4,24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#413732").s().p("AiLCoIAAlPQAygHA1AAQBTAAAuAuQAvAtAABPQAABXgvAtQgvAvhSAAQg6AAgtgHgAgwhjIAADHQAMACAKAAQAlAAAUgZQAUgYAAg5QAAgzgUgYQgUgXglABQgKAAgMACg");
	this.shape_19.setTransform(20.4,24);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,146.3,47.8);


(lib.MC_chip = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.chip();
	this.instance.setTransform(-4,-4,0.15,0.15);

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiMCNQg6g7gBhSQABhSA6g6QA6g6BSgBQBSABA7A6QA7A6gBBSQABBSg7A7Qg7A7hSgBQhSABg6g7g");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-4,48.1,48.1);


(lib.containerVisuble = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.containerHeddin = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.container = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.btn_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MC_low();
	this.instance.setTransform(-0.9,-1.1,1,1,0,0,0,55.1,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-25,110.4,47.8);


(lib.btn_01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MC_drow();
	this.instance.setTransform(-0.3,-0.1,1,1,0,0,0,72.7,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:23.8,scaleX:1.54,scaleY:1.54,y:-0.2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-23.8,146.3,47.8);


(lib.btn_00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MC_hight();
	this.instance.setTransform(0,-1.1,1,1,0,0,0,75,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-25,120,47.8);


// stage content:



(lib.highAndLow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loading:0,roop:1,result:2});

	// timeline functions:
	this.frame_0 = function() {
		/*
		初期設定フレーム
		*/
		
		this.stop();
		
		that = this;
		
		//カード準備
		i = 0;
		j = 0;
		
		/* 表示するトランプの選出 */
		/* わざと１枚目から始まるように-1・・・w */
		l = -1;
		
		// １次元配列を作成する
		
		cardArrya = new Array(); // カードの配列 0,0 ~ 4,12 例）0,0だったらスペードのA
		trumpArrya = new Array(); // カードの並び順配列 0 ~ 41 
		
		markArrya = [0, 1, 2, 3]; //マークの配列
		numberArrya = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //番号の配列
		
		//トランプカード配列を用意
		arrya = new Array();
		cardArrya = new Array();
		
		k = 0;
		r = 0;
		t = 0;
		
		//シーン番号
		scene = 0;
		
		//勝った回数と遊んだ回数
		winCount = 0;
		attackCount = 1;
		gameWin = false;
		
		
		//画像読み込み準備
		images = new Array();
		visibleImage = 0;
		hiddenImage = 0;
		index = 0;
		btnFlag = true;
		
		//初期
		this.btn_high.alpha = 0;
		this.btn_low.alpha = 0;
		this.btn_draw.alpha = 0;
		this.containerVisuble.alpha = 0;
		this.containerHeddin.alpha = 0;
		
		queue = new createjs.LoadQueue(true);　
		
		queue.on("fileload", fileLoadHandler, this);　
		queue.on("complete", completeHandler, this);　
		queue.loadManifest("manifest.json");
		
		function fileLoadHandler(event) {
			if (event.item.type === createjs.LoadQueue.IMAGE) {　
				images.push(new createjs.Bitmap(event.result));
			}　
		}
		function completeHandler(event) {
			this.init();
			console.log("complete card image");
			createjs.Tween
				.get(that.mc_loading, {
					override: true
				})
				.to({
					alpha: 0
				}, 1500, createjs.Ease.quadOut)
				.call(completeNext);
				
			/*createjs.Tween
				.get(this.containerVisuble, {
					override: true
				})
				.set({x:170, y:180})
				.to({
					alpha: 1
				}, 1000, createjs.Ease.quadOut);
			createjs.Tween
				.get(this.containerHeddin, {
					override: true
				})
				.set({x:380, y:180})
				.to({
					alpha: 1
				}, 1000, createjs.Ease.quadOut);*/
		
			function completeNext() {
				console.log("complete loading animation");
				that.play();
			}
		};
		
		this.init = function () {
			//該当するカードの画像を格納の準備
			this.containerVisuble.addChild(images[53]);
			this.containerHeddin.addChild(images[52]);
		}
		function loadingAnime() {
			console.log("loadingAnime");
		
			createjs.Tween
				.get(that.mc_loading, {
					override: true
				})
				.to({
					rotation: 360
				}, 1500, createjs.Ease.quadOut)
				.call(nextLoadingAnime);
				
				function nextLoadingAnime(){
					loadingAnime()
					
				}
		}
		loadingAnime();
	}
	this.frame_1 = function() {
		this.stop();
		/* ---------------------------
		トランプ配列
		
		#マークに関して
		0:スペード
		1:クラブ
		2:ハート
		3:ダイヤ
		
		#数値
		0~12:カードの番号
		
		#シーンの用意
		scene00:スタート
		scene01:初期化
		scene02:メインループ
		scene03:リザルト
		scene04:ヘルプ
		
		------------------------------*/
		
		
		//トランプカードを用意する
		for (i = 0; i < 4; i++) {
			cardArrya[i] = new Array();
		
			for (j = 0; j < 13; j++) {
		
				// カードの要素をそれぞれ格納する
				cardArrya[i][j] = j;
				trumpArrya[i * 13 + j] = i * 13 + j;
			}
		}
		
		
		//トランプカードをシャッフルする
		for (k = 0; k < 52; k++) {
			// 0~51の間でランダムな番地を取得
			var r = Math.floor(Math.random() * 52);
		
			// ランダムで出したtrumpArryaの番地をtに代入
			var t = trumpArrya[r];
		
			// ランダムで指定した番地のindex同士を入れ替える
			trumpArrya[r] = trumpArrya[k];
		
			// ランダムでだしたtrumpArryaの配列indexに格納されていた数値を入れる
			trumpArrya[k] = t;
		}
		
		console.log(trumpArrya);
		/*
		sceneアップデート
		
		
		*/
		
		function upDate() {
			switch (scene) {
				case 0:
					l = 0;
					scene = 1
					break;
				case 1:
					l++;
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				default:
					l = 0;
					scene = 1
					break;
			}
			console.log("l--------->" + l);
			console.log("scene--------->" + scene);
		}
		this.stop();
		
		function nextCard() {
			console.log("こんぷりーと");
			that.MC_win.setTransform(273.1, 192, 1, 1, 0, 0, 0, 82.7, 36.4);
			that.MC_lost.setTransform(273, 192, 1, 1, 0, 0, 0, 108.8, 37.3);
			that.containerVisuble.setTransform(170, 180, 0.348, 0.348, 0, 0, 0, 240, 320); //158,236
			that.containerHeddin.setTransform(380, 180, 0.348, 0.348, 0, 0, 0, 240, 320); //158,236
		
			that.btn_high.alpha = 0;
			that.btn_low.alpha = 0;
			that.btn_draw.alpha = 0;
		
			that.winScore.text = winCount + "勝";
		
			createjs.Tween.get(that.containerVisuble, {
				override: true
			}).to({
				scaleX: 0.01
			}, 1000, createjs.Ease.backOut)
				.call(handleComplete2)
				.to({
					scaleX: 0.35
				}, 300, createjs.Ease.backOut)
				.to({
					x: 600,
					y: -200,
					rotation: -360
				}, 1000, createjs.Ease.quadOut);
		
			createjs.Tween.get(that.containerHeddin, {
				override: true
			}).to({
				scaleX: 0.01
			}, 1000, createjs.Ease.backOut)
				.call(handleComplete3)
				.to({
					scaleX: 0.35
				}, 300, createjs.Ease.backOut)
				.to({
					x: 600,
					y: -200,
					rotation: 360
				}, 1000, createjs.Ease.quadOut)
				.call(handleComplete4);
		
		
			function handleComplete4() {
				console.log("visibleCard333---->" + visibleCard);
				gameWin = false;
		
				//26回目の対戦だったら終了
				if (26 == attackCount) {
					//リザルトへ
					that.gotoAndPlay(2);
				} else {
					attackCount++;
					that.nextAttack();
				}
			}
			function handleComplete2() {
				console.log("handleComplete2");
				//Tween complete
				that.containerVisuble.addChild(images[53]);
			}
			function handleComplete3() {
				console.log("handleComplete3");
				//Tween complete
				that.containerHeddin.addChild(images[52]);
			}
		}
		
		
		this.nextAttack = function () {
			that.containerVisuble.setTransform(-200, -200, 0.348, 0.348, 0, 0, 0, 240, 320); //158,236
			that.containerHeddin.setTransform(-200, -200, 0.348, 0.348, 0, 0, 0, 240, 320); //158,236
			that.containerVisuble.alpha = 1;
			that.containerHeddin.alpha = 1;
		
			that.containerVisuble.addChild(images[53]);
			that.containerVisuble.visible = true;
			that.containerHeddin.addChild(images[52]);
			that.containerHeddin.visible = true;
			that.score.text = attackCount + "回戦目";
		
			//カード表示のセット
			l++;
			visibleCard = trumpArrya[l];
			console.log("visibleCard-----------" + visibleCard);
		
			l++;
			hiddenCard = trumpArrya[l];
			console.log("hiddenCard------------" + hiddenCard);
		
			visibleImage = images[visibleCard];
			hiddenImage = images[hiddenCard];
		
			console.log("attackCount------------" + attackCount + "回戦目");
			console.log("winCount------------" + winCount + "勝");
		
			//カードの番号からのカードの要素の抽出
			//割った数のあまりがカードの番号
			//あまりが0の時はカード番号はK
			visibleCardMunber = (visibleCard + 1) % 13;
			if (visibleCardMunber == 0) {
				visibleCardMunber = 13;
			}
		
			hiddenCardMunber = (hiddenCard + 1) % 13;
			if (hiddenCardMunber == 0) {
				hiddenCardMunber = 13;
			}
		
			visibleCardMark = (visibleCard + 1 - visibleCardMunber) / 13;
			hiddenCardMark = (hiddenCard + 1 - hiddenCardMunber) / 13;
		
			//マークの特定
			//１つに出来ないか後で考える
			switch (visibleCardMark) {
				case 0:
					visibleCardMark = "スペード";
					break;
				case 1:
					visibleCardMark = "クラブ";
					break;
				case 2:
					visibleCardMark = "ハート";
					break;
				case 3:
					//52番目のカードはダイヤのK。4で割り切れる。
				default:
					visibleCardMark = "ダイヤ";
					break;
			}
			switch (hiddenCardMark) {
				case 0:
					hiddenCardMark = "スペード";
					break;
				case 1:
					hiddenCardMark = "クラブ";
					break;
				case 2:
					hiddenCardMark = "ハート";
					break;
				case 3:
					//52番目のカードはダイヤのK。4で割り切れる。
				default:
					hiddenCardMark = "ダイヤ";
					break;
			}
		
			console.log("あにめすたーと");
			createjs.Tween
				.get(this.MC_start, {
					override: true
				})
				.wait(1000)
				.to({
					alpha: 1
				}, 1000)
				.wait(500)
				.to({
					alpha: 0,
					scaleX: 4,
					scaleY: 4
				}, 1000, createjs.Ease.backOut)
				.call(handleComplete0);
		
			function handleComplete0() {
				//Tween complete
				btnFlag = false;
				console.log("ボタンフラグ false");
				that.MC_start.setTransform(275, 205, 1, 1, 0, 0, 0, 275, 45);
				that.btn_high.alpha = 1;
				that.btn_low.alpha = 1;
				that.btn_draw.alpha = 1;
		
			};
		
			createjs.Tween
				.get(this.containerVisuble, {
					override: true
				})
				.to({
					x: 170,
					y: 180,
					rotation: 360,
					scaleX: 0.35,
					scaleY: 0.35,
					skewX: 0,
					skewY: 0
				}, 1500, createjs.Ease.quadOut)
				.to({
					scaleX: 0.01
				}, 1000, createjs.Ease.backOut)
				.call(handleComplete1)
				.to({
					scaleX: 0.35
				}, 300, createjs.Ease.backOut);
		
			function handleComplete1() {
				//Tween complete
				console.log("visibleCard222---->" + visibleCard);
				that.containerVisuble.addChild(visibleImage);
			};
			createjs.Tween
				.get(that.containerHeddin, {
					override: true
				})
				.to({
					x: 380,
					y: 180,
					rotation: -360,
					scaleX: 0.35,
					scaleY: 0.35,
					skewX: 0,
					skewY: 0
				}, 1800, createjs.Ease.quadOut)
				.to({
					x: 380,
					y: 180
				}, 500, createjs.Ease.backOut);
		}
		
		//that.firstAttack();
		that.nextAttack();
		//ボタンイベント
		this.btn_high.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler() {
			if (!btnFlag) {
				btnFlag = true;
				createjs.Tween
					.get(this.containerHeddin, {
						override: false
					})
					.to({
						scaleX: 0.01
					}, 1000, createjs.Ease.backOut)
					.call(handleComplete3)
					.to({
						scaleX: 0.35
					}, 1000, createjs.Ease.backOut);
				function handleComplete3() {
					//Tween complete
					that.containerHeddin.addChild(hiddenImage);
				};
				if (visibleCardMunber < hiddenCardMunber) {
					gameWin = true;
					createjs.Tween
						.get(this.MC_win, {
							override: true
						})
						.to({
							alpha: 1
						}, 1000)
						.wait(1000)
						.to({
							alpha: 0,
							scaleX: 4,
							scaleY: 4
						}, 1000, createjs.Ease.backOut).call(nextCard);
					//勝ったら印をつける
					var name = "";
		
					if (winCount <= 9) {
						name = "MC_chip0" + winCount;
					} else {
						name = "MC_chip" + winCount;
					}
					console.log(name);
					that[name].alpha = 1;
					winCount++;
				} else {
					createjs.Tween
						.get(this.MC_lost, {
							override: true
						})
						.to({
							alpha: 1
						}, 1000)
						.wait(1000)
						.to({
							alpha: 0,
							y: 400
						}, 1000, createjs.Ease.backOut).call(nextCard);
				}
			}
		}
		
		this.btn_draw.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			if (!btnFlag) {
				btnFlag = true;
				createjs.Tween
					.get(this.containerHeddin, {
						override: false
					})
					.to({
						scaleX: 0.01
					}, 1000, createjs.Ease.backOut)
					.call(handleComplete3)
					.to({
						scaleX: 0.35
					}, 1000, createjs.Ease.backOut);
				function handleComplete3() {
					//Tween complete
					that.containerHeddin.addChild(hiddenImage);
				};
				if (visibleCardMunber == hiddenCardMunber) {
					gameWin = true;
					createjs.Tween
						.get(this.MC_win, {
							override: true
						})
						.to({
							alpha: 1
						}, 1000)
						.wait(1000)
						.to({
							alpha: 0,
							scaleX: 4,
							scaleY: 4
						}, 1000, createjs.Ease.backOut).call(nextCard);
		
					//勝ったら印をつける
					var name = "";
		
					if (winCount <= 9) {
						name = "MC_chip0" + winCount;
					} else {
						name = "MC_chip" + winCount;
					}
					console.log(name);
					that[name].alpha = 1;
					winCount++;
				} else {
					createjs.Tween
						.get(this.MC_lost, {
							override: true
						})
						.to({
							alpha: 1
						}, 1000)
						.wait(1000)
						.to({
							alpha: 0,
							y: 400
						}, 1000, createjs.Ease.backOut).call(nextCard);
				}
			}
		}
		
		this.btn_low.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3() {
			if (!btnFlag) {
				btnFlag = true;
				createjs.Tween
					.get(this.containerHeddin, {
						override: false
					})
					.to({
						scaleX: 0.01
					}, 1000, createjs.Ease.backOut)
					.call(handleComplete3)
					.to({
						scaleX: 0.35
					}, 1000, createjs.Ease.backOut);
				function handleComplete3() {
					//Tween complete
					that.containerHeddin.addChild(hiddenImage);
				};
				if (visibleCardMunber > hiddenCardMunber) {
					gameWin = true;
					createjs.Tween
						.get(this.MC_win, {
							override: true
						})
						.to({
							alpha: 1
						}, 1000)
						.wait(1000)
						.to({
							alpha: 0,
							scaleX: 4,
							scaleY: 4
						}, 1000, createjs.Ease.backOut).call(nextCard);
		
					//勝ったら印をつける
					var name = "";
		
					if (winCount <= 9) {
						name = "MC_chip0" + winCount;
					} else {
						name = "MC_chip" + winCount;
					}
					console.log(name);
					that[name].alpha = 1;
					winCount++;
				} else {
					createjs.Tween
						.get(this.MC_lost, {
							override: true
						})
						.to({
							alpha: 1
						}, 1000)
						.wait(1000)
						.to({
							alpha: 0,
							y: 400
						}, 1000, createjs.Ease.backOut).call(nextCard);
				}
			}
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		this.score.text = "RESULT";
		this.winScoreP.text = "勝率" + Math.floor(winCount/26)*100 + "％";
		console.log("勝率" + Math.floor(winCount/26)*100 + "％");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// score
	this.winScore = new cjs.Text("--勝", "bold 20px 'M+ 1c heavy'", "#FFFFFF");
	this.winScore.name = "winScore";
	this.winScore.textAlign = "right";
	this.winScore.lineHeight = 22;
	this.winScore.lineWidth = 76;
	this.winScore.setTransform(81,355);

	this.score = new cjs.Text("000", "bold 30px 'M+ 1c heavy'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.lineWidth = 335;
	this.score.setTransform(266.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.score},{t:this.winScore,p:{x:81,y:355,text:"--勝",font:"bold 20px 'M+ 1c heavy'",textAlign:"right",lineHeight:22,lineWidth:76}}]},1).to({state:[{t:this.score},{t:this.winScore,p:{x:266.5,y:113.5,text:"000",font:"bold 60px 'M+ 1c heavy'",textAlign:"center",lineHeight:62,lineWidth:335}}]},1).wait(1));

	// loading
	this.mc_loading = new lib.MC_chip();
	this.mc_loading.setTransform(278.1,184.1,4.512,4.512,0,0,0,19.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_loading).to({_off:true},1).wait(2));

	// title
	this.MC_start = new lib.MC_start();
	this.MC_start.setTransform(275.4,202.1,1,0.933,0,0,0,275.4,45.1);
	this.MC_start.alpha = 0;
	this.MC_start._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_start).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// win
	this.MC_win = new lib.MC_win();
	this.MC_win.setTransform(273.1,192,1,1,0,0,0,82.7,36.4);
	this.MC_win.alpha = 0;
	this.MC_win._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_win).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// lost
	this.MC_lost = new lib.MC_lost();
	this.MC_lost.setTransform(273,192,1,1,0,0,0,108.8,37.3);
	this.MC_lost.alpha = 0;
	this.MC_lost._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_lost).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// btn
	this.btn_low = new lib.btn_02();
	this.btn_low.setTransform(531,329.8,1,1,0,0,0,66,20.5);
	new cjs.ButtonHelper(this.btn_low, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_draw = new lib.btn_01();
	this.btn_draw.setTransform(279.9,308.2);
	new cjs.ButtonHelper(this.btn_draw, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_high = new lib.btn_00();
	this.btn_high.setTransform(109.5,306.8,1,1,0,0,0,-13.5,-2.5);
	new cjs.ButtonHelper(this.btn_high, 0, 1, 2, false, new lib.btn_00(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_high},{t:this.btn_draw},{t:this.btn_low}]}).to({state:[]},2).wait(1));

	// obj
	this.containerHeddin = new lib.containerHeddin();
	this.containerHeddin.setTransform(174.8,183.6,0.33,0.33,0,0,0,226.7,344.6);

	this.containerVisuble = new lib.containerVisuble();
	this.containerVisuble.setTransform(87.7,183.9,0.33,0.33,0,0,0,232.5,345.4);

	this.instance = new lib.MC_result();
	this.instance.setTransform(272.9,308.2,0.511,0.511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.containerVisuble},{t:this.containerHeddin}]}).to({state:[{t:this.instance}]},2).wait(1));

	// chip
	this.MC_chip26 = new lib.MC_chip();
	this.MC_chip26.setTransform(499,366,1,1,0,0,0,20,22);
	this.MC_chip26.alpha = 0;

	this.MC_chip25 = new lib.MC_chip();
	this.MC_chip25.setTransform(483,366,1,1,0,0,0,20,22);
	this.MC_chip25.alpha = 0;

	this.MC_chip24 = new lib.MC_chip();
	this.MC_chip24.setTransform(468.2,366,1,1,0,0,0,20,22);
	this.MC_chip24.alpha = 0;

	this.MC_chip23 = new lib.MC_chip();
	this.MC_chip23.setTransform(453.4,366,1,1,0,0,0,20,22);
	this.MC_chip23.alpha = 0;

	this.MC_chip22 = new lib.MC_chip();
	this.MC_chip22.setTransform(438.6,366,1,1,0,0,0,20,22);
	this.MC_chip22.alpha = 0;

	this.MC_chip21 = new lib.MC_chip();
	this.MC_chip21.setTransform(423.8,366,1,1,0,0,0,20,22);
	this.MC_chip21.alpha = 0;

	this.MC_chip20 = new lib.MC_chip();
	this.MC_chip20.setTransform(409,366,1,1,0,0,0,20,22);
	this.MC_chip20.alpha = 0;

	this.MC_chip19 = new lib.MC_chip();
	this.MC_chip19.setTransform(394.2,366,1,1,0,0,0,20,22);
	this.MC_chip19.alpha = 0;

	this.MC_chip18 = new lib.MC_chip();
	this.MC_chip18.setTransform(379.4,366,1,1,0,0,0,20,22);
	this.MC_chip18.alpha = 0;

	this.MC_chip17 = new lib.MC_chip();
	this.MC_chip17.setTransform(364.6,366,1,1,0,0,0,20,22);
	this.MC_chip17.alpha = 0;

	this.MC_chip16 = new lib.MC_chip();
	this.MC_chip16.setTransform(349.8,366,1,1,0,0,0,20,22);
	this.MC_chip16.alpha = 0;

	this.MC_chip15 = new lib.MC_chip();
	this.MC_chip15.setTransform(335,366,1,1,0,0,0,20,22);
	this.MC_chip15.alpha = 0;

	this.MC_chip14 = new lib.MC_chip();
	this.MC_chip14.setTransform(320.2,366,1,1,0,0,0,20,22);
	this.MC_chip14.alpha = 0;

	this.MC_chip13 = new lib.MC_chip();
	this.MC_chip13.setTransform(305.4,366,1,1,0,0,0,20,22);
	this.MC_chip13.alpha = 0;

	this.MC_chip12 = new lib.MC_chip();
	this.MC_chip12.setTransform(290.6,366,1,1,0,0,0,20,22);
	this.MC_chip12.alpha = 0;

	this.MC_chip11 = new lib.MC_chip();
	this.MC_chip11.setTransform(275.8,366,1,1,0,0,0,20,22);
	this.MC_chip11.alpha = 0;

	this.MC_chip10 = new lib.MC_chip();
	this.MC_chip10.setTransform(261,366,1,1,0,0,0,20,22);
	this.MC_chip10.alpha = 0;

	this.MC_chip09 = new lib.MC_chip();
	this.MC_chip09.setTransform(246.2,366,1,1,0,0,0,20,22);
	this.MC_chip09.alpha = 0;

	this.MC_chip08 = new lib.MC_chip();
	this.MC_chip08.setTransform(233.4,365,1,1,0,0,0,22,21);
	this.MC_chip08.alpha = 0;

	this.MC_chip07 = new lib.MC_chip();
	this.MC_chip07.setTransform(216.6,364,1,1,0,0,0,20,20);
	this.MC_chip07.alpha = 0;

	this.MC_chip06 = new lib.MC_chip();
	this.MC_chip06.setTransform(202.8,364,1,1,0,0,0,21,20);
	this.MC_chip06.alpha = 0;

	this.MC_chip05 = new lib.MC_chip();
	this.MC_chip05.setTransform(187,365,1,1,0,0,0,20,21);
	this.MC_chip05.alpha = 0;

	this.MC_chip04 = new lib.MC_chip();
	this.MC_chip04.setTransform(173.2,365,1,1,0,0,0,21,21);
	this.MC_chip04.alpha = 0;

	this.MC_chip03 = new lib.MC_chip();
	this.MC_chip03.setTransform(159.4,366,1,1,0,0,0,22,22);
	this.MC_chip03.alpha = 0;

	this.MC_chip02 = new lib.MC_chip();
	this.MC_chip02.setTransform(142.6,364,1,1,0,0,0,20,20);
	this.MC_chip02.alpha = 0;

	this.MC_chip01 = new lib.MC_chip();
	this.MC_chip01.setTransform(128.8,365,1,1,0,0,0,21,21);
	this.MC_chip01.alpha = 0;

	this.MC_chip00 = new lib.MC_chip();
	this.MC_chip00.setTransform(113,364,1,1,0,0,0,20,20);
	this.MC_chip00.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_chip00},{t:this.MC_chip01},{t:this.MC_chip02},{t:this.MC_chip03},{t:this.MC_chip04},{t:this.MC_chip05},{t:this.MC_chip06},{t:this.MC_chip07},{t:this.MC_chip08},{t:this.MC_chip09},{t:this.MC_chip10},{t:this.MC_chip11},{t:this.MC_chip12},{t:this.MC_chip13},{t:this.MC_chip14},{t:this.MC_chip15},{t:this.MC_chip16},{t:this.MC_chip17},{t:this.MC_chip18},{t:this.MC_chip19},{t:this.MC_chip20},{t:this.MC_chip21},{t:this.MC_chip22},{t:this.MC_chip23},{t:this.MC_chip24},{t:this.MC_chip25},{t:this.MC_chip26}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,270,534.4,275.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;