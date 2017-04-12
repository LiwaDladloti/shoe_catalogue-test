var stock = [
    {
        shoeType: 'Monk Strap',
        shoeColour: 'Brown',
        shoeSize: '6',
        quantityInStock: '7',
        shoePrice: 'R1 200.00'
    },
    {
        shoeType: 'Loafer',
        shoeColour: 'Maroon',
        shoeSize: '8',
        quantityInStock: '2',
        shoePrice: 'R650.00'
    },
    {
        shoeType: 'Wingtips',
        shoeColour: 'Brown',
        shoeSize: '6',
        quantityInStock: '4',
        shoePrice: 'R849.99'
    },
    {
        shoeType: 'Monk Strap',
        shoeColour: 'Black',
        shoeSize: '7',
        quantityInStock: '5',
        shoePrice: 'R1 200.00'
    }
]

var add = document.querySelector('.addButton');
//drop down
var template = document.querySelector('.shoeOptions').innerHTML;
var temp = Handlebars.compile(template);
//table
var tableTemplate = document.querySelector('.tableTemp').innerHTML;
var tableTemp = Handlebars.compile(tableTemplate);
document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: stock});

function uniqueType() {
    var uniqType = []
    var typeMap = {}
    for (var y = 0; y < stock.length; y++){
        var types = stock[y]
        if (typeMap[types.shoeType] === undefined){
            typeMap[types.shoeType] = types.shoeType;
            uniqType.push(types.shoeType)
        }
    }
    document.querySelector('.types').innerHTML = temp({stockType: uniqType});
}
uniqueType();

function uniqueColours() {
    var uniqColors = [];
    var colorMap = {};
    for (var i=0;i<stock.length;i++){
        var shoes = stock[i];
        if (colorMap[shoes.shoeColour] === undefined){
            colorMap[shoes.shoeColour] =  shoes.shoeColour;
            uniqColors.push(shoes.shoeColour)
        }
    }
    document.querySelector('.colors').innerHTML = temp({stockColours: uniqColors});
}
uniqueColours();

function uniqueSizes() {
    var uniqSize = [];
    var sizeMap = {};
    for (var x=0;x<stock.length;x++){
        var sizes = stock[x];
        if (sizeMap[sizes.shoeSize] === undefined){
            sizeMap[sizes.shoeSize] =  sizes.shoeSize;
            uniqSize.push(sizes.shoeSize)
        }
    }
    console.log(uniqSize);
    document.querySelector('.sizes').innerHTML = temp({stockSizes: uniqSize});
}
uniqueSizes();

function myFunctions() {
    uniqueType();
    uniqueColours();
    uniqueSizes();
}
myFunctions();
add.addEventListener('click', function() {
    var newShoe = document.getElementById('newShoe');
    var newColour = document.getElementById('newColour');
    var newSize = document.getElementById('newSize');
    var newQuantity = document.getElementById('newQuantity');
    var newPrice = document.getElementById('newPrice');
    
    if (newShoe.value !== '' && newColour.value !== '' && newSize.value !== '' && newQuantity.value !== '' && newPrice.value !== ''){
        var newStock = {
            shoeType: newShoe.value,
            shoeColour: newColour.value,
            shoeSize: Number(newSize.value),
            quantityInStock: Number(newQuantity.value),
            shoePrice: newPrice.value
            };
    stock.push(newStock);
    
    document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: stock});
    
    newShoe.value = '';
    newColour.value = '';
    newSize.value = '';
    newQuantity.value = '';
    newPrice.value = '';  
    }
    myFunctions();
});


