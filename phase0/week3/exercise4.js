// Menggunakan Built-in Function pada Array
function dataHandling2(input) {
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    input.splice(2, 1, 'Provinsi Bandar Lampung');
    input.splice(4, 0, 'Pria');
    input.splice(5, 1, 'SMA Internasional Metro')
    console.log(input);

    var bulan = input[3].split('/');
    switch (bulan[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
    }

    var bulan = input[3].split('/')
    var arrBaru = [];
    for (var i = 0; i < bulan.length; i++) {
        arrBaru.push(Number(bulan[i]))
        arrBaru.sort()
    }
    console.log(arrBaru);

    var bulan = input[3].split('/')
    var arrSpasi = [];
    for (var i = 0; i <= bulan.length - 1; i++) {
        arrSpasi.push(Number(bulan[i]));
    }
    console.log(arrSpasi.join("-"))

    var nama = input.slice(1, 2);
    console.log(nama)

}
console.log(dataHandling2());