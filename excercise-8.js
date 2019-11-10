// Logic Challenge - Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
    // you can only write your code here!

//buat variabel hasilTukar
var hasilTukar =[];

//buat looping perulangan sebanyak panjang kalimat
for (var i=0; i<kalimat.length; i++){
    // console.log(i)
    //buat kondisi bilamana kalimat tersebut identik dengan huruf besar
    if (kalimat[i]===kalimat[i].toUpperCase()){
        //simpan dengan cara push dari huruf besar ke huruf kecil
        hasilTukar.push(kalimat[i].toLowerCase());
        //console.log(kalimat[i])
    //buat kondisi bilamana kalimat tersebut identik dengan huruf kecil
    } else if (kalimat[i]===kalimat[i].toLowerCase()){
        //simpan dengan cara push dari huruf kecil ke huruf besar
        hasilTukar.push(kalimat[i].toUpperCase());
        //console.log(kalimat[i])
    }
}
// simpan hasilTukar dan gunakan method join untuk menampung string baru yang didapat
return hasilTukar.join('')
}
  
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
