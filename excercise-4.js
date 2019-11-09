//Logic Challenge - Mencari Modus

function cariModus(arr) {
    // you can only write your code here!
var hasilModus = 0;
var muncul = 0;
var seringMuncul =0;
var nilaiIdentik = 0;


for (var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length; j++){
        //untuk mencari deret angka yang sama  yang muncul, jika isi value arr ke-i sama dengan isi value arr ke-j dan i tidak sama dengan j
        if (arr[i]===arr[j] && i!==j){
            muncul++;
            // console.log(arr[i])
            // console.log(arr[j])
            if(muncul>seringMuncul){
                seringMuncul = muncul;
                hasilModus = i;
                // console.log(hasilModus)
            }

        }
    }
}

//karena ada value array tidak terdapat angka yang sama yang muncul, maka dibuat kondisi, jika hasilModus 0 maka akan menyimpan nilai -1
if (hasilModus === 0){
    return -1;
}

// untuk kondisi yang nilai value nya semuanya identik dengan nilai value yang sama, akan menyimpan nilai -1
for (var k=0; k<arr.length;k++){
    nilaiIdentik += arr[k];
    if (nilaiIdentik/arr.length=== arr[k]){
        return -1;
    }
}



return arr[hasilModus];
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1