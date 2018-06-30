var aquaworld;
(function (aquaworld) {
    var MovingObjects = (function () {
        function MovingObjects(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        MovingObjects.prototype.move = function () {
            ;
        };
        MovingObjects.prototype.draw = function () {
            ;
        };
        return MovingObjects;
    }());
    aquaworld.MovingObjects = MovingObjects;
})(aquaworld || (aquaworld = {}));
//# sourceMappingURL=MovingObjects.js.map