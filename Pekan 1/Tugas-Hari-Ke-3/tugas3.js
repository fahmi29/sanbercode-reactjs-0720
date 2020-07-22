// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log("Soal 1 => " + kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + " " + kataKetiga + " " + kataKeempat.toUpperCase());

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var jum = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat)

console.log("Soal 2 => " + jum);

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,25); // do your own! 
var kataKelima = kalimat.substring(25,31); // do your own! 

console.log("Soal 3 => " + 'Kata Pertama: ' + kataPertama); 
console.log("Soal 3 => " + 'Kata Kedua: ' + kataKedua); 
console.log("Soal 3 => " + 'Kata Ketiga: ' + kataKetiga); 
console.log("Soal 3 => " + 'Kata Keempat: ' + kataKeempat); 
console.log("Soal 3 => " + 'Kata Kelima: ' + kataKelima);

// Soal 4
var nilai = 70;
if (parseInt(nilai) >= 80) {
    console.log("Soal 4 => " + 'indeksnya A');
}else if (parseInt(nilai) < 80 && parseInt(nilai) >= 70) {
    console.log("Soal 4 => " + 'indeksnya B');
}else if (parseInt(nilai) < 70 && parseInt(nilai) >= 60) {
    console.log("Soal 4 => " + 'indeksnya C');
}else if (parseInt(nilai) < 60 && parseInt(nilai) >= 50) {
    console.log("Soal 4 => " + 'indeksnya D');
}else if (parseInt(nilai) < 50){ 
    console.log("Soal 4 => " + 'indeksnya E');
}

// Soal 5
var tanggal = 29;
var bulan = 1;
var tahun = 2000;

var bulanstring = "";

switch (bulan) {
    case 1: bulanstring = "January";break;
    case 2: bulanstring = "Februari";break;
    case 3: bulanstring = "Maret";break;
    case 4: bulanstring = "Appril";break;
    case 5: bulanstring = "Mei";break;
    case 6: bulanstring = "Juni";break;
    case 7: bulanstring = "Juli";break;
    case 8: bulanstring = "Agustus";break;
    case 9: bulanstring = "September";break;
    case 10: bulanstring = "Oktober";break;
    case 11: bulanstring = "November";break;
    case 12: bulanstring = "Desember";break;
    default:break;
}
console.log("Soal 5 => " + tanggal + " " +bulanstring + " " + tahun);