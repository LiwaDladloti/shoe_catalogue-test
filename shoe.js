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
//drop down
var template = document.querySelector('.shoeOptions').innerHTML;
var temp = Handlebars.compile(template);
document.querySelector('.dropDown').innerHTML = temp({stock: stock});
//table
var tableTemplate = document.querySelector('.tableTemp').innerHTML;
var tableTemp = Handlebars.compile(tableTemplate);
document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: stock});

function addStock() {
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
    
    var uniqColors = [];
    var colorMap = {};
    for (var i=0;i<stock.length;i++){
        var shoes = stock[i];
        if (colorMap[shoes.shoeColour] === undefined){
            colorMap[shoes.shoeColour] =  shoes.shoeColour;
            uniqColors.push(shoes.shoeColour)
        }
    }
    
    document.querySelector('.dropDown').innerHTML = temp({stock: stock});
    
    document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: stock});
    
    newShoe.value = '';
    newColour.value = '';
    newSize.value = '';
    newQuantity.value = '';
    newPrice.value = '';
    }
}