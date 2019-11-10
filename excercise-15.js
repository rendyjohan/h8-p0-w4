//Logic Challenge: Highest Score

function highestScore (students) {
    // Code disini

//jika array students isinya kosong maka hasilnya {}
if(!students[0]){
    return '{}'
}

//buat variable untuk menyimpang objek hasil
var hasil = {};
// buat variable listClass untuk menyimpan array
var listClass = [];

    
// looping untuk menentukan class
for (var i = 0; i < students.length; i++) {
var className = students[i].class;
    if (listClass.includes(className)) {
       continue;
    } else {
       listClass.push(className);
    }
}
    
    
// looping untu menentukan Ranking
for (var j=0; j<listClass.length; j++) {      
var objStudents = {};
var highest = 0;
    for (let k=0; k<students.length; k++) {
        if (listClass[j] === students[k].class && students[k].score>highest) {
            highest = students[k].score;
            objStudents.name = students[k].name;
            objStudents.score = students[k].score;
        }
        hasil[listClass[j]] = objStudents;
    }
}
    
console.log('');
return hasil;
}
  

  
// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
  
  
console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
  
  
console.log(highestScore([])); //{}