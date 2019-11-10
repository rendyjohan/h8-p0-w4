//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!

//buat variable splitStr dengan fungsi untuk memisahkan huruf yang ada di str
var splitStr = '';
  splitStr = str.split('')

//buat variable hasilUrut dengan fungsi untuk mensort abjad terlebih dahulu kemudian join
var hasilUrut = ''; 
  hasilUrut = splitStr.sort().join('');
  
//simpan hasilUrut dan kembali ke function
return hasilUrut;
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'