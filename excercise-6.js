//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    // you can only write your code here!

//buat variable baru untuk looping
var tempAngka= [];
var hasilAngka=[];

//looping untuk menyimpan dengan push angka yang baru
for(var i=0; i<angka; i++){
    if(angka %i === 0){
        tempAngka.push(String(i) + String(angka/i));
    }
}
//console.log(tempAngka);

//Looping untuk menyimpan dengan push ke variabel hasil
for (var j=0; j<tempAngka.length; j++){
    hasilAngka.push(Number(tempAngka[j]));
}
//buat kondisi dengan sorting hasilAngka apabila undefined hasilnya adalah 2
//console.log(hasilAngka.sort(function(a,b){return a-b}));
if(hasilAngka.sort(function(a,b){return a-b})[0] === undefined){
return 2;
} else {
    return String(hasilAngka.sort(function(a,b){return a-b})[0]).length;
}

}
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2