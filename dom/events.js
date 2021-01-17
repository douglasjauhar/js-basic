var bil1 = ""
var bil2 = ""
var oper = ""
function bilanganSatu(){
    bil1 = document.getElementById("bil1").value
}
function bilanganDua(){
    bil2 = document.getElementById("bil2").value
}
function operators(){
    oper = document.getElementById("operator").value
}

function hitung(){

var hasil = ""
    if(oper === "null"){
        alert("Pilih Operator")
    }else if(oper === "+"){
     hasil = Number(bil1) + Number(bil2)
     bil2
     bil1
    }else if(oper === "-"){
     hasil = Number(bil1) - Number(bil2)
    }else if(oper === "*"){
     hasil = Number(bil1) * Number(bil2)
    }else if(oper === "/"){
     hasil = Number(bil1) + Number(bil2)
    }

    document.getElementById("hasil").innerHTML = hasil.toString()
    console.log(hasil)
}