var orginal_val=getRandomInteger(1,9999)
var ov=orginal_val/2
var one_divide=getRandomInteger(1,ov)
var on=ov/2
var two_divide=getRandomInteger(1,on)
var balance=orginal_val-one_divide-two_divide
console.log(orginal_val)
console.log(one_divide)
console.log(two_divide)
console.log(balance)
var moneys=document.getElementsByClassName('money')
var color=()=>{
    for (var i=0;i<moneys.length;i++){
        var cl=parseInt(moneys[i].style.left)||0
        moneys[i].style.left=(cl+100)+"px";
    }
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var box=document.getElementById("boxel")
box.addEventListener("click", () => {
    cll=parseInt(box.style.left)||0
    if(cll<800){
        box.style.left = (cll+300)+"px";
    }
    else{
        box.style.left = 0+"px";
    }
});