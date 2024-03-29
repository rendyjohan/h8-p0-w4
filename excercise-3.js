//Logic Challenge - Mencari Median

function cariMedian(arr) {
    // you can only write your code here!
    var hasil = 0;
    for (var i=0; i < arr.length; i++){
        var rumus = arr.length/2
        // console.log(rumus)
        if (arr.length %2 !==0){
            hasil = arr[rumus-0.5];
            // console.log(hasil)
        } else {
            hasil = (arr[rumus-1]+arr[rumus])/2
            // console.log(hasil)
        }
    }
    return hasil
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5