// Variable
// Deklarasi Variable
// Nama bisa dimulai dengan huruf atau $ atau _ 
// Nama didalam nama variable bisa kita isi angka _ $
//  Variable Case Sensitive
// Ada "reserved words" yang tidak bisa dipakai 


//Tipe Data Number
// Tipe data number itu harus berupa angka tidak boleh hutuf
var angka = 1000;
var angka2 = 70000;
// angka = Number(angka.toFixed(2));




// cek dia type apa
// console.log(typeof angka)


// Variable itu type nya bukan hanya var, tapi bisa juga dengan let, const
//Operater Matematika JavaScript
var hitungan =  angka + angka2 
var hitungan2 = angka * angka2
var hitungan3 = angka2 / angka
var hitungan4 = angka - angka2
var hitungan5 = angka2 % angka
// alert(hitungan4)
// console.log("tambah",hitungan)
// console.log("kali",hitungan2)
// console.log("bagi",hitungan3)
// console.log("kurang",hitungan4)
// console.log("modulus", hitungan5)
//Tipe data String
var nama = "";
var hasil = angka2 + angka

var namaDepan = "Douglas"
var namaBelakang = "Jauhar"

// Tipe data Float
var floatNumber = 37.43
console.log(typeof floatNumber)
// Tipe data boolean 
// True / False
var benar = true
benar = false
console.log(benar)
console.log(typeof benar)
// Tipe data object
var object = {nama : "alex", age : "14"}
// object = 2 parameter, key value
// console.log(object)
// console.log(typeof object)
//Tipe data Array
var arrayX = ["hijau", "orange", "blue"]
console.log(arrayX)
console.log(typeof arrayX)

document.write(`namaDepan + namaBelakang`)
document.write(`<h3>Nama Saya ${arrayX[0]} Umur Saya ${arrayX[2]} Tahun</h3>`)
document.write(arrayX[2])

document.getElementById("wrap").innerHTML = hitungan;