/// <reference path="app.js" />

//Common for all products
var products = function () {
    this.call = function (size, color, design) {
        this._size = size;
        this._color = color;
        this._design = design;
        return this;
    };
    var _size, _color, _design;
};
//End

//Category: Clothings
var clothings = function () {
    this.products = new products();
    this.type = function (types) {
        this._types = types;
        return this;
    };
    var _types;
};

//Category: Mugs
var mugs = function () {
    this.products = new products();
    return this;
};

//Category: Trophys
var trophys = function () {
    this.products = new products();
    this.base = function (bases) {
        this._bases = bases;
        return this;
    };
    var _bases;
};


function extractProduct(category, product) {
    if (category == 'clothings') {
        if (product == 'tshirt') {
            var tshirt = new clothings();
            tshirt.products.call(["small", "medium", "large"], ["red", "white", "blue", "green"], ["img1", "img2", "img3"]);
            tshirt.type(["roundNeck","vNeck"]);
            return tshirt;
        }
        //Todo::// Rests can be handled here
    }
    if (category == 'mugs') { //Todo::
        var mug = new mugs();
        mug.products.call(["small", "medium", "large"], ["red", "white", "blue", "green"], ["img1", "img2", "img3"]);
        return mug;
    }
    if (category == 'trophys') {
        var trophy = new trophys();
        trophys.products.call(["small", "medium", "large"], ["red", "white", "blue", "green"], ["img1", "img2", "img3"]);
    }
    
}
function customPlugin(product,productCategory) {
    var thing = extractProduct(product, productCategory);
    return thing;
};


