//function for displaying value
function dis(val){
document.getElementById('edu').value+=val;
}

//function for evaluation
function solve(){
let x = document.getElementById('edu').value
let y = eval(x)
document.getElementById('edu').value = y
}

//function for clearing display

function clr(){
document.getElementById('edu').value =""
}