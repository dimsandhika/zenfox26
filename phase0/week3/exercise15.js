// Logic Challenge - Mengelompokan Hewan
// Algorithma :
// 1. default saya sedang mencari apa?kalo masih sama dengan yang saya cari saya akan masukan direkanjang yang sama.
// 2. kalo udah beda saya akan memasukan keranjang kecil sebelumnya ke keranjang besar kemudian akan membuat keranjang kecil baru lagi kemudian masukan buah yang baru, kemudian default buah yang saya cari akan berubah juga sesuai dengan buah yang terakhir.
function groupAnimals(animals) {
    animals.sort()
    var result = [];
    var hurufCari = animals[0][0];
    var keranjangKecil = [];

    for (var i = 0; i < animals.length; i++) {
        if (animals[i][0] === hurufCari) {
            keranjangKecil.push(animals[i])
        } else {
            result.push(keranjangKecil);
            keranjangKecil = [];
            keranjangKecil.push(animals[i]);
            hurufCari = animals[i][0]
        }
    }
    result.push(keranjangKecil)
    return result
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]