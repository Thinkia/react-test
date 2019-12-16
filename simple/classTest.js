var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('classTest');
    };
    return Site;
}());
var obj = new Site();
obj.name();
