console.log("Soal 1 ");
console.log("Loop Pertama ");
var nilai = 1;
var akhir = 20;
while (nilai <= akhir) {
  if (nilai % 2 == 0) {
    console.log(nilai + " - I love coding");
  }
  //   else {
  //     console.log(nilai + " adalah bilangan ganjil <br>");
  //   }
  nilai++;
}

console.log("Loop Kedua ");
var back = 1;
var counter = 20;

while (counter >= back) {
  if (counter % 2 == 0) {
    console.log(counter + " - I will become a frontend developer");
  }
  //   else {
  //     console.log(nilai + " adalah bilangan ganjil <br>");
  //   }
  counter--;
}

console.log("Soal 2 ");
var nilais = 1;
var akhirs = 20;
while (nilais <= akhirs) {
  if (nilais % 2 == 0) {
    console.log(nilais + " - Berkualitas");
  } else if (nilais % 3 == 0) {
    console.log(nilais + " - I love coding");
  } else if (nilais % 2 == 1) {
    console.log(nilais + " - Santai");
  }
  nilais++;
}

console.log("Soal 3");
function generatePyramid() {
  var totalNumberofRows = 5;
  var output = "";
  for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += "*" + "  ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid();

console.log("Soal 4");
var kalimat = "saya sangat senang belajar javascript";
var array = kalimat.split(" ");
console.log(array);

console.log("Soal 5");
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
console.log(daftarBuah.sort());
