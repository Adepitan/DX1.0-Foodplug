// basic ES5 function diclearation
var myname="Mayorkeyz"
function popsomething(){
    alert(myname +" has been coding since 12")
}
console.log(document)
var ourbody = document.querySelector(".ourpagebody")
// ourbody.style.background = "orange"

var harmburger =document.querySelector(".harmburger-container")
console.log(harmburger)
var mobilelinkscontainer = document.querySelector(".mobile-links-container")

function addandremove(){
    harmburger.classList.toggle("showburgar")
    mobilelinkscontainer.classList.toggle("showmobilelinks")
}