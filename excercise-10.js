//Logic Challenge - Change Me!

function changeMe(arr) {
    // you can only write your code here!

// jika array tidak ada isinya atau kosong maka hasilnya string ""
if(!arr[0]){
    return ""
}

// buat variable untuk nomor urut
var noUrut = 0;
//buat variable untuk nama lengkap
var namaLengkap = '';

//buat objek baru untuk ditampilkan di output
var objInitial = {};

//buat looping
for(var i=0; i < arr.length; i++){
    //untuk membuat nomor urut
    noUrut++;
    // console.log(noUrut);
    // untuk menginisiasi namaLengkap sesuai dengan otuput
    namaLengkap = arr[i][0] + ' ' + arr[i][1];
    // console.log(namaLengkap);
    //buat iterasi objek
    objInitial.firstName = arr[i][0];
    objInitial.lastName = arr[i][1];
    objInitial.gender = arr[i][2];
    //buat kondisi jika isi objek age hasilnya undefined
    if(arr[i][3] === undefined){
    // console.log(arr[i][3]);
        //untuk objek age hasilnya 'Invalid Birth Year' 
        objInitial.age = 'Invalid Birth Year';
    } else {
        //selain itu hasil objek age hasilnya adalah 2019 - tahun
        objInitial.age = 2019 - arr[i][3];
    }
    //untuk menampilkan output
    console.log(noUrut + '.' + namaLengkap);
    console.log(objInitial);
}

}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""