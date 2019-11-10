//Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
   rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

//jika arrPenumpang isinya kosong maka hasilnya []
if(!arrPenumpang[0]){
    return '[]'
}

// variabel angkot sebagai penampung hasil
var angkot = [{},{}];
// variabel asal akan menampung value asal  dari input yang diberikan
var asal = '';
// variabel tujuan akan menampung value tujuan dari input yang diberikan
var tujuan = '';


// looping index i
for (var i=0; i<arrPenumpang.length; i++) {
    // looping iterasi index j untuk mengambil value pada array indxex i 
        for (var j=0; j<arrPenumpang[i].length; j++) {
            // kondisi pada j dengan switch
            switch (j) {
                case 0: {
                    angkot[i].penumpang = arrPenumpang[i][j];
                    break;
                } case 1: {
                    angkot[i].naikDari = arrPenumpang[i][j];
                    angkot[i].tujuan = arrPenumpang[i][j+1];
                    break;
                } case 2: {
                    // kalkulasi bayar angkot
                    asal = arrPenumpang[i][j-1];
                    // console.log(asal);
                    tujuan = arrPenumpang[i][j];
                    // console.log(tujuan);
                    var jarak = 0;
                    for (var k=0; k<rute.length; k++) {
                        if (rute[k] === asal) {
                            for (var l=k+1; l<rute.length; l++) {
                                jarak += 1;
                                if (rute[l] === tujuan) {
                                var bayar = 0;
                                bayar = jarak * 2000;
                                angkot[i].bayar = bayar;
                                // console.log(bayar);
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
}
// mengembalikan hasil melalui variabel angkot
return angkot;
}



  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]