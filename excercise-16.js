//Logic Challenge: Graduates
function graduates (students) {
    // Code disini

// jika array students isinya kosong maka hasilnya {}
if(!students[0]){
    return '{}'
}

var listKelas = [];
var hasil = {};
  
// buat looping untuk menentukan kelas pelajar
for (var i=0; i<students.length; i++) {
    //untuk menentukan variabel kelas awal pelajar
    var kelasAwal = students[i].class;
    // console.log(kelasAwal);
    if (listKelas.includes(kelasAwal)) {
      continue;
    } else {
      listKelas.push(kelasAwal);
    }
}
  
// buat looping untuk menentukan kelulusan para pelajar
for (var j=0; j<listKelas.length; j++) {
    //buat array kelas untuk menyimpan hasil array
    var arrKelas = [];
    //buat looping
    for (var k=0; k<students.length; k++) {
        //buat objek baru untuk menyimpan hasil objek
        var objStudent = {};
        //buat kondisi untuk nilai pelajar
        if (listKelas[j] === students[k].class && students[k].score>75) {
        //buat iterasi objek nama
        objStudent.name = students[k].name;
        //buat iterasi objek nilai
        objStudent.score = students[k].score;
        //lakukan push untuk menyimpan array kelas
        arrKelas.push(objStudent);
        }
    }
    hasil[listKelas[j]] = arrKelas;
    // console.log(hasil[listKelas[j]]);
}
  
console.log('');
//menyimpan hasil
return hasil;

}
  

console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
]));
  
// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
  
console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
]));
  
// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }
  
  
console.log(graduates([])); //{}