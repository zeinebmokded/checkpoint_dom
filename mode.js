var btnvar= document.getElementsByClassName("fa-heart");
console.log(btnvar)
for(let i=0 ; i<btnvar.length ;i++){
btnvar[i].addEventListener ('click',function(){
    if (btnvar[i].style.color == "rgb(158, 158, 158)"){
        btnvar[i].style.color= "red"
    } else{btnvar[i].style.color="rgb(158, 158, 158)" }
    
})}


let plusBtns=document.querySelectorAll('.plus-btn')
console.log (plusBtns)
for (let i=0; i<plusBtns.length ; i++){
    plusBtns[i].addEventListener ('click',function(){
        plusBtns[i].previousElementSibling.value++
        totalPrice()
    })
}
let minusBtns=document.querySelectorAll('.minus-btn')
for (let i=0; i<minusBtns.length ; i++){
    minusBtns[i].addEventListener ('click',function(){
        minusBtns[i].nextElementSibling.value --
        totalPrice()
    })
}
function totalPrice(){
    let sum=0
    let Qts=document.querySelectorAll('.QNT')
    let Prices =document.querySelectorAll('.price')
    for (let i=0 ;i<Qts.length;i++) {
        sum+=Qts[i].value*Prices[i].innerHTML
    }
    document.querySelector('#finalPrice').value = sum
}
/**let delBtns=document.querySelectorAll('.delete')
for (let i=0; i<delBtns.length ; i++){
    delBtns[i].addEventListener ('click',function(){
        delBtns[i].element.classList.remove(".item")
    })
}/** */
function del() {
    var element = document.getElementById("myDIV");
    element.remove("div");
    totalPrice()
}