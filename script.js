// Variable
// Deklarasi Variable
// Nama bisa dimulai dengan huruf atau $ atau _ 
// Nama didalam nama variable bisa kita isi angka _ $
//  Variable Case Sensitive
// Ada "reserved words" yang tidak bisa dipakai 


//Tipe Data Number
// Tipe data number itu harus berupa angka tidak boleh hutuf
// var angka = 1000;
// var angka2 = 70000;
// angka = Number(angka.toFixed(2));




// cek dia type apa
// console.log(typeof angka)


// Variable itu type nya bukan hanya var, tapi bisa juga dengan let, const
//Operater Matematika JavaScript
// var hitungan =  angka + angka2 
// var hitungan2 = angka * angka2
// var hitungan3 = angka2 / angka
// var hitungan4 = angka - angka2
// var hitungan5 = angka2 % angka
// alert(hitungan4)
// console.log("tambah",hitungan)
// console.log("kali",hitungan2)
// console.log("bagi",hitungan3)
// console.log("kurang",hitungan4)
// console.log("modulus", hitungan5)
//Tipe data String
// var nama = "";
// var hasil = angka2 + angka

// var namaDepan = "Douglas"
// var namaBelakang = "Jauhar"

// Tipe data Float
// var floatNumber = 37.43
// console.log(typeof floatNumber)
// Tipe data boolean 
// True / False
// var benar = true
// benar = false
// console.log(benar)
// console.log(typeof benasal)
// Tipe data object
// var object = {nama : "alex", age : "14"}
//Tipe data object pada script pasti mengandung { key : value }
// object = 2 parameter, key value
// console.log(object)
// console.log(typeof object)
//Tipe data Array
// var arrayX = ["hijau", "orange", "blue"]
// console.log(arrayX)

// console.log(typeof arrayX)

// document.write(`namaDepan + namaBelakang`)
// document.write(`<h3>Nama Saya ${arrayX[0]} Umur Saya ${arrayX[2]} Tahun</h3>`)
// document.write(arrayX[2])

//Fungsi Padaa Javascript



//Lingkup Variabel .
// Variabel dikelompokan Scope, yang pertama lokal var, sama global

var text = "Belajar Variabel Global"
// function hitungTambah(angka, angka2, angka3, angka4)
// {
//     var b = angka + angka2 + angka3 + angka4
//     document.getElementById("wrap").innerHTML = b;
// }

// function biodata(data)
// {
// document.write(`<div style="background : black;color : white";>
// <h3> Namas Saya ${data.nama}</h3>
// <h3>Umur Saya ${data.umur}</h3>
// <h3>Saya Kelas ${data.kelas}</h3>
// </div>`
// )
// }


//Parameter Pada Javascript.
// ("Bisa lempa nilai atau angka", "kirim ke 2")
// var data = {nama : "Alex", umur : "14 tahun", kelas : "3 SMP"}
// hitungTambah(7, 4, 5, 7 );
// biodata(data);

// Return Pada Js, Mengambilakan nilai bukan print nilai, cara manggil dengan dengan getElementById

function scopeVar(a, b, c) {
    return a * b + c;
}


// Manipusi Array.
// Push, Splice, Pop, Shift

var a = [40, 30, 20]

var bio = [{ nama: "Edo" }, { nama: "Alex" }]

// let appendData = {}
// bio.push({nama : "Tio"})
// Push
// a.push(10, 20) // Untuk Append (Menambahkan) Kedalam Arrray dengan melanjutkan index terakhirnya

//Splice
// Punya Parameter bisa 3 (Statt, Yangmau diapus, Yang mau diappend) dengan indeks arraynya
// a.splice(1, 1 , 78)
// a.splice(2, 2)

// Pop
// Hapus Indeks Terakhir dari Array
// a.pop()
// bio.pop()

//Shift
//Hapus Indeks Pertamanya
// a.shift()
// bio.shift()

// let b = [1,2,4,5,6]

// b.splice(3 , 1, 7)

// console.log(b)


// console.log(bio)

// scopeVar(text)


// Conditonal
// function basicConditional(){
//     var hargaEs = 3000
//     var duit = 4000
//     var dibayar = true
//     const password = "123"
//     const input = 123
//     //Operater Mtk Js , + , - , /, *


//     if(password === input){
//         console.log("boleh masuk")
//     }else{
//         console.log("tisdak boleh masuk")
//     }


//     // If Biasa
//     // if(duit >= hargaEs){
//     //     // kondisi jika terprnuhi
//     //     return  `Duitnya Kurang ${hargaEs + duit}`
//     //     // console.log("duitnya cukup")
//     // }else{
//     //     // kondisi jika tidak terpenuhi
//     //     return  `Duitnya Kurang ${hargaEs - duit}`
//     //     // console.log("duitnya tidak cukup")
//     // }

//     // Nested If
//     // if yang bercabang

//     // if(dibayar){
//     //     if(duit >= hargaEs){
//     //         console.log("Sudah dibayar dan uangnya cukup!")
//     //     }else{
//     //         console.log("Sudah dibayar dan uangnya tidak cukup!")
//     //     }
//     // }else{
//     //     console.log("Belum Dibayar!")
//     // }

//     // Ternary Legend
//     // 1.bikin var = kondisinya "?" else "":"" 
//     // var hasil = duit > hargaEs ? "Uang Cukup" : "Uang Tidak Cukup"

//     console.log(hasil)



// }

// function switchCase() {
//     var a = "Alex"
//     switch (a) {
//         case "Alex":
//             console.log("Benar namanya Alex")
//             break;
//         case "Edo" :
//             console.log("Namanya edo")
//             break;
//         default:
//         console.log("tidak ada nama")
//     }
// }
function forLoop(data){
    console.log(data)

    // For Loop = Perulangan
    // for(variable mulai, variabel batas, variabel perubahan){
    //     mau diapain
    // }
    // var i = 0
    // var b = [4,5,6]
    // console.log(b.length)
    // for(i = 0; b.length ; i++){
    //     // alert(i)
    // }
    data.forEach(e => {
        // console.log(`Namanya ${e.nama} Umurnya ${e.umur}`)
        document.write(`<p style="color : red; background : black;"><br/>Namanya ${e.nama} Umurnya ${e.umur}</p>`)
      
    })

}



// document.getElementById("wrap").innerHTML = basicConditional;
// switchCase()
var json = [{nama : "Alex", umur : 20}, {nama : "Edo", umur : 10}]
forLoop(json)
// document.getElementById("wrap").innerHTML = `` ;

// basicConditional()
// console.log(text2)