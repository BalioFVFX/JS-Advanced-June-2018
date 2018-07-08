let data = require('./data.js');


function sort(property){
    let sorted = [];
    sorted = data.sort(function (a, b) {
        return a[property].localeCompare(b[property]);
    });
    console.log(sorted);
    return sorted;
}

function filter(property, value){
    let shippedProducts = [];
    for (let i = 0; i < data.length; i++) {
        if(data[i][property] === value){
            shippedProducts.push(data[i]);
        }
    }
    return shippedProducts;
}

result.sort = sort;
result.filter = filter;