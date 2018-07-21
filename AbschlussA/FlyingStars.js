/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Hei� erarbeitet */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var FlyingStars = (function (_super) {
        __extends(FlyingStars, _super);
        function FlyingStars() {
            _super.call(this);
            this.huntspeed = 0.1;
            this.distanceToEat = 5;
        }
        FlyingStars.prototype.draw = function () {
            L11_SeaworldInheritance.crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            L11_SeaworldInheritance.crc2.lineWidth = 0.5;
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.fill();
        };
        return FlyingStars;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.FlyingStars = FlyingStars;
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //class fish zu
//namespace zu} //namespace zu 
//# sourceMappingURL=FlyingStars.js.map