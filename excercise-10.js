//Logic Challenge - Change Me!

function changeMe(arr) {
    // you can only write your code here!

//buat variabel untuk menyimpan nama lengkap
var namaLengkap = '';
//buat variable untuk menyimpan nomor urut
var noUrut = 0;
//buat variable untuk membuat objek di dalam array
var objInitial ={}; 

//buar looping sebagai berikut
for(var i=0; i < arr.length; i++){
  // looping nomor urut
  noUrut++;
  //console.log(noUrut)
  //buatkan value untuk variabel namaLengkap yang ada di array
  namaLengkap = arr[i][0] + ' ' + arr[i][1];
  // console.log(namaLengkap)
  //buat objek array dengan nama firstName dan tentukan lokasi array nya
  objInitial.firstName = arr[i][0];
  // console.log(arr[i][0])
  //buat objek array dengan nama lastName dan tentukan lokasi array nya
  objInitial.lastName = arr[i][1];
  // console.log(arr[i][1])
  //buat objek array dengan gender dan tentukan lokasi array nya
  objInitial.gender = arr[i][2];
  // console.log(arr[i][2])
  //buat objek array dengan age dan tentukan lokasi array nya
  objInitial.age = arr[i][3];
  // console.log(arr[i][3])
    //buat kondisi jika objek age hasilnya undefined
    if(arr[i][3] === undefined){
      //maka objek age adalah 'Invalid Birth Year'
      objInitial.age = 'Invalid Birth Year';
    }
  
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