var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var HammerUI = (function (_super) {
        __extends(HammerUI, _super);
        function HammerUI() {
            return _super.call(this) || this;
        }
        HammerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HammerUI.uiView);
        };
        HammerUI.uiView = { "type": "View", "props": { "width": 100, "height": 100 }, "child": [{ "type": "Image", "props": { "y": 54, "x": 56, "width": 98, "skin": "ui/hammer.png", "rotation": 20, "pivotY": 48, "pivotX": 53, "height": 77 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "rotation": [{ "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -35, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 1 }, { "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 5 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
        return HammerUI;
    }(View));
    ui.HammerUI = HammerUI;
})(ui || (ui = {}));
(function (ui) {
    var mainUI = (function (_super) {
        __extends(mainUI, _super);
        function mainUI() {
            return _super.call(this) || this;
        }
        mainUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.mainUI.uiView);
        };
        mainUI.uiView = { "type": "View", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 25, "skin": "ui/back.png" } }, { "type": "Box", "props": { "y": 52, "x": 31, "name": "mouseBox" }, "child": [{ "type": "Box", "props": { "y": 140, "x": 126, "name": "item0" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-01.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 139, "x": 313, "name": "item1" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-02.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 145, "x": 511, "name": "item2" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-03.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 230, "x": 97, "name": "item3" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-04.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 233, "x": 314, "name": "item4" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-05.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 231, "x": 514, "name": "item5" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-06.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 328, "x": 91, "name": "item6" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-07.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 333, "x": 314, "name": "item7" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-08.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 336, "x": 536, "name": "item8" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 14, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 86, "skin": "ui/mask-09.png" } }, { "type": "Image", "props": { "y": 24, "x": 57, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "ProgressBar", "props": { "y": 9, "x": 13, "var": "timeBar", "value": 1, "skin": "ui/progress_time.png" } }, { "type": "Box", "props": { "y": 52, "x": 31, "var": "scoreBox" }, "child": [{ "type": "Clip", "props": { "skin": "ui/clip_number.png", "name": "item0", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 18, "skin": "ui/clip_number.png", "name": "item1", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 36, "skin": "ui/clip_number.png", "name": "item2", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 54, "skin": "ui/clip_number.png", "name": "item3", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 72, "skin": "ui/clip_number.png", "name": "item4", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 90, "skin": "ui/clip_number.png", "name": "item5", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 108, "skin": "ui/clip_number.png", "name": "item6", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 126, "skin": "ui/clip_number.png", "name": "item7", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 144, "skin": "ui/clip_number.png", "name": "item8", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }, { "type": "Clip", "props": { "x": 162, "skin": "ui/clip_number.png", "name": "item9", "index": 0, "clipX": 10, "autoPlay": false, "alpha": 0 } }] }] };
        return mainUI;
    }(View));
    ui.mainUI = mainUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map