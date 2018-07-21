var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aqua;
(function (aqua) {
    var Bubble = (function (_super) {
        __extends(Bubble, _super);
        function Bubble(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
        }
        Bubble.prototype.move = function () {
            this.y += -15;
            if (this.y < 0) {
                this.y = 1200;
            }
        };
        return Bubble;
    }(aqua.MovingObjects));
    aqua.Bubble = Bubble;
})(aqua || (aqua = {}));
//# sourceMappingURL=Bubbles.js.map