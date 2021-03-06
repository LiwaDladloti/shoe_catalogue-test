var stock = [
    {
        shoeType: 'Monk Strap',
        shoeColour: 'Brown',
        shoeSize: '6',
        quantityInStock: '7',
        shoePrice: '1 200'
    },
    {
        shoeType: 'Loafer',
        shoeColour: 'Maroon',
        shoeSize: '8',
        quantityInStock: '2',
        shoePrice: '650'
    },
    {
        shoeType: 'Wingtips',
        shoeColour: 'Brown',
        shoeSize: '6',
        quantityInStock: '4',
        shoePrice: '849'
    },
    {
        shoeType: 'Monk Strap',
        shoeColour: 'Black',
        shoeSize: '7',
        quantityInStock: '5',
        shoePrice: '1 200'
    }
]

var add = document.querySelector('.addButton');

var template = document.querySelector('.shoeOptions').innerHTML;
var temp = Handlebars.compile(template);

var tableTemplate = document.querySelector('.tableTemp').innerHTML;
var tableTemp = Handlebars.compile(tableTemplate);

var slider = 0;

function imgSlide() {
    'use strict';
    var mySlides = document.getElementsByClassName('slides');
    for (var i = 0; i < mySlides.length; i++){
        mySlides[i].style.display = 'none';
    }
    slider++;
    if (slider > mySlides.length) {
        slider = 1;
    }
    mySlides[slider - 1].style.display = 'inline-block';
    setTimeout(imgSlide, 4000);
}
imgSlide();

function uniqueType() {
    var uniqType = []
    var typeMap = {}
    for (var i = 0; i < stock.length; i++){
        var types = stock[i]
        if (typeMap[types.shoeType] === undefined){
            typeMap[types.shoeType] = types.shoeType;
            uniqType.push(types.shoeType)
        }
    }
    document.querySelector('.types').innerHTML = temp({stockType: uniqType});
}

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


function uniqueSizes() {
    var uniqSize = [];
    var sizeMap = {};
    for (var i=0;i<stock.length;i++){
        var sizes = stock[i];
        if (sizeMap[sizes.shoeSize] === undefined){
            sizeMap[sizes.shoeSize] =  sizes.shoeSize;
            uniqSize.push(sizes.shoeSize)
        }
    }
    console.log(uniqSize);
    document.querySelector('.sizes').innerHTML = temp({stockSizes: uniqSize});
}

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
    
    newShoe.value = '';
    newColour.value = '';
    newSize.value = '';
    newQuantity.value = '';
    newPrice.value = '';  
    document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: stock})
    }
    myFunctions();
});

var updateStock = document.querySelector('.updateStock')
updateStock.addEventListener('click', function() {
    var stockDiv = document.getElementById('addingStock');       stockDiv.style.display = 'block';
    alert('You must be a staff member to enter this section!')
})

var checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function() {
var typeDrop = document.querySelector('.types').value;
var colorDrop = document.querySelector('.colors').value;
var sizeDrop = document.querySelector('.sizes').value;
  
var pushToThis = [];

for(var i = 0; i < stock.length; i++) {
    var shoeValue = stock[i];
    if(typeDrop === shoeValue.shoeType && colorDrop === shoeValue.shoeColour && sizeDrop === shoeValue.shoeSize) {
        pushToThis.push(shoeValue);
        }
    }
    document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: pushToThis})
});

var showAll = document.querySelector('.showAllStock');
showAll.addEventListener('click', function() {
document.querySelector('.tableDisplay').innerHTML = tableTemp({stock: stock})
});