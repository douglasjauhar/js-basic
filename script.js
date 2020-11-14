// Variable
// Deklarasi Variable
// Nama bisa dimulai dengan huruf atau $ atau _ 
// Nama didalam nama variable bisa kita isi angka _ $
//  Variable Case Sensitive
// Ada "reserved words" yang tidak bisa dipakai 


//Tipe Data Number
// Tipe data number itu harus berupa angka tidak boleh hutuf
var angka = 1000.23333334;
var angka2 = 70000;
angka = Number(angka.toFixed(2));
// cek dia type apa
console.log(typeof angka)


// Variable itu type nya bukan hanya var, tapi bisa juga dengan let, const

var hitungan =  angka + angka2 
//Tipe data String
var nama = "";


document.getElementById("wrap").innerHTML = hitungan;