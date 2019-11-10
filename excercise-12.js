//Logic Challenge - Toko X

function countProfit(shoppers) {
let listBarang = [ 
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];
// you can only write your code here!
    
//jika shoopers isinya kosong maka hasilnya []
if(!shoppers[0]){
    return '[]'
}

// buat variable jumlah barang
var jumlahSepatu = listBarang[0][2];
var jumlahZoro = listBarang[1][2];
var jumlahUniklooh = listBarang[2][2];
  
//buat variabel pembeli dan sisa
var pembeli;
var sisa;

// tampung ke varibel masing2 *push
var pembeliSepatu = [];
var pembeliZoro = [];
var pembeliUniklooh = [];

//buat variable untuk mengetahui hasil profit
var hasilProfit = [];
  
//buat looping
for(var i=0; i<shoppers.length; i++){
    //kondisi jika jumlah barang masih ada untuk Sepatu Stacattu
    if(shoppers[i].product === 'Sepatu Stacattu'){
        if(jumlahSepatu >= shoppers[i].amount){ 
            pembeliSepatu.push(shoppers[i].name);
            jumlahSepatu -= shoppers[i].amount;
        }
    //kondisi jika jumlah barang masih ada untuk Baju Zoro
    } else if (shoppers[i].product === 'Baju Zoro'){
        if(jumlahZoro >= shoppers[i].amount){
            pembeliZoro.push(shoppers[i].name);
            jumlahZoro -= shoppers[i].amount;
        }
    //kondisi jika jumlah barang masih ada untuk Sweater Uniklooh
    } else if (shoppers[i].product === 'Sweater Uniklooh'){
        if (jumlahUniklooh >= shoppers[i].amount){
            pembeliUniklooh.push(shoppers[i].name);
            jumlahUniklooh -= shoppers[i].amount;
        } 
    }
}
  
//buat looping  
for(var j=0; j<listBarang.length; j++){
    if(listBarang[j][0] === 'Sepatu Stacattu'){
        pembeli = pembeliSepatu;
        sisa = jumlahSepatu;
        totProfit = (listBarang[j][2]- jumlahSepatu) * listBarang[j][1];
    } else if (listBarang[j][0] === 'Baju Zoro'){
        pembeli = pembeliZoro;
        sisa = jumlahZoro;
        totProfit = (listBarang[j][2] - jumlahZoro) * listBarang[j][1];
    } else if (listBarang[j][0] === 'Sweater Uniklooh'){
        pembeli = pembeliUniklooh;
        sisa = jumlahUniklooh;
        totProfit = (listBarang[j][2] - jumlahUniklooh) * listBarang[j][1];
    }
    
    
    var objectProduct = {};
    objectProduct.product = listBarang[j][0];
    objectProduct.shoppers = pembeli;
    objectProduct.leftOver = sisa;
    objectProduct.totalProfit = totProfit;
    hasilProfit.push(objectProduct);

    
}

  return hasilProfit;
  

}
  
// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
  
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
