//Logic Challenge - Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    // you can only write your code here!
    // console.log(angka1, angka2)
    for (var i=1; i<=angka1; i++){
      var hasilBagi1 = angka1 % i
      var hasilBagi2 = angka2 % i
      if (hasilBagi1 === hasilBagi2 && hasilBagi2 === 0){
        var hasilFpb = i
        // console.log('******')
        // console.log(hasilFpb)
        // console.log('******88')
      }
    }
    return hasilFpb


}
  
// TEST CASES
console.log(fpb(12, 16)); // 4
// console.log('hasil ke1')
console.log(fpb(50, 40)); // 10
// console.log('hasil ke2')
console.log(fpb(22, 99)); // 11
// console.log('hasil ke3')
console.log(fpb(24, 36)); // 12
// console.log('hasil ke4')
console.log(fpb(17, 23)); // 1
// console.log('hasil ke5')