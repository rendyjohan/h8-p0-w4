//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    // you can only write your code here!

//buat variabel yang isinya array sesuai dengan permintaan soal
var jenisBarang = [
  ['Sepatu Stacattu', 15000000], 
  ['Baju Zoro', 500000], 
  ['Baju H&M', 250000], 
  ['Sweater Unikloh', 175000], 
  ['Casing Handphone', 50000]
];
//buat variabel tampung
var temp = [];
//buat variable untuk menyimpan hasil
var hasil = {};
//buat variable uang untuk kembalian
var kembalian = money;

//buat looping
for (var i = 0; i < jenisBarang.length; i++) {
  //buat kondisi uang kembalian dengan yang ada di harga jenis barang
  if (kembalian >= jenisBarang[i][1]) {
    //kembalian diperoleh dengan mengurangi harga jenis barang yang dibeli
    kembalian -= jenisBarang[i][1];
    //simpan hasilnya ke variable temp
    temp.push(jenisBarang[i][0]);
    // console.log(jenisBarang[i][0]);
  }
  //iterasi objek array
  hasil.memberId = memberId;
  hasil.money = money;
  hasil.listPurchased = temp;
  hasil.changeMoney = kembalian;
  
  //jika kondisi memberId undefined atau ''
  if (memberId === undefined || memberId === '') {
    //simpan dengan return
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
      //kondisi jika money lebihkecil daripada barang yang dibeli
      } if (money < jenisBarang[4][1]) {
        //simpan dengan return
        return 'Mohon maaf, uang tidak cukup';
      } 
}
//simpan dengan return
return hasil;
}

  
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
 // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
