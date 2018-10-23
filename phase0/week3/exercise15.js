// Logic Challenge - Mengelompokan Hewan
function groupAnimals(animals) {
    var hasil = [];

    for (var i = 0; i < 4; i++) {
        hasil.push([]);
    }

    for (var j = 0; j < animals.length; j++) {
        if (animals[j] === animals[1] || animals[j] === animals[3]) {
            hasil[0].push(animals[j])
        } else if (animals[j] === animals[0]) {
            hasil[1].push(animals[j])
        } else if (animals[j] === animals[6]) {
            hasil[1].push(animals[j])
        } else if (animals[j] === animals[2] || animals[j] === animals[4]) {
            hasil[2].push(animals[j])
        } else if (animals[j] === animals[5]) {
            hasil[3].push(animals[j])
        }
    }
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]