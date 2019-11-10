//Logic Challenge - Check AB

function checkAB(num) {
// you can only write your code here!  

//buat variabel untuk mensplit num huruf demi huruf
var splitNum = num.split('') 
//console.log(splitNum)
//buat variabel hasil
var hasilCheck=[];

//buat looping untuk menghilangkan tanda spasi (' ') dalam kata
for (var i=0; i<splitNum.length; i++){
    //kondisi jika bila ada spasi
    if (splitNum[i] !== ' '){
        //simpan dengan cara push huruf yang sdh di split tanpa ada spasi (' ")
        hasilCheck.push(splitNum[i]);
        // console.log(hasilCheck)
    }
}

// buat looping untuk jarak huruf inisiasi dengan huruf tujuan dengan 3 jarak antara huruf a ke b
for (var j=0; j<hasilCheck.length; j++){
    //jika huruf ke j adalah huruf a
    if (hasilCheck[j] === 'a'){
        //looping untuk jarak 3 karakter
        for (var k=j; k<=(j+3); k++){
            //jika huruf ke k adalah huruf b
            if(hasilCheck[k]==='b'){
            //simpan hasilnya boolean true
            return true
            }
        }
    }
}
//simpan hasilnya boolean false
return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false