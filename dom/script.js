//Document Object Model (DOM)

// -> document.getElementById()
// const desc = document.getElementById("desc")
// desc.style.color = "red"
// desc.style.backgroundColor = "blue"

// const a = {
//     nama : "Edo",
//     umur : 25,
// }

// --> document.getElementsByClassName

// const name = document.getElementsByClassName("title")[0]
// name.style.color = "red"
// console.log(name)


// --> document.getElementByTagname 



// console.log(tag.length)
function nyala(){
// const tag = document.getElementsByTagName("p")
// tag[0].style.color ="red"
// for(let i = 0; i < tag.length; i ++){
//     if(i%2 == 0){
//         setInterval(function (){
//             tag[i].style.color = "red"
//             tag[i].style.backgroundColor = "black"
//             setTimeout(function (){
//                 tag[i].style.color = "black"
//             })
//         }, 3000)
//     }else{
//         tag[i].style.color = "blue"
//     }
// }
let user = "alex"
const name = document.getElementById("user").value
// console.log(name)
if(name == user){
    alert("user benar")
}else{
    alert("salah user")
}
}
