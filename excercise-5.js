//Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    // you can only write your code here!

// buat variable menyimpan hasilKata
var hasilKata ='' ;
// buat variable ejaan huruf alfabet
var ejaan = [
    'a','b','c','d','e','f','g','h',
    'i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','w','x','y','z'
];

//buat looping isi value kata
for (var i=0; i<kata.length; i++) {
    // console.log(i)
    // buat looping isi value array ejaan
    for(var j=0; j<ejaan.length; j++){
        // console.log(j)
        // buat kondisi jika value kata ke-i sama dengan value yang ada di array ejaan
        if(kata[i]===ejaan[j]){
            // buat kondisi bercabang jika ditemukan huruf 'z' pada value array ejaan
            if (ejaan[j]==='z'){
                //maka huruf 'z' tersebut diubah menjadi huruf 'a'
                hasilKata += 'a'; 
            } else {
                // jika sama maka hasil adalah value ejaan ke-j + 1 
                hasilKata += ejaan[j+1];
            }
        }
    }
}
//simpan dan kembali ke variable hasilKata
return hasilKata;
}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu