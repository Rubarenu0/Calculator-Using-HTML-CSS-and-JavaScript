var result=document.getElementById('result');
function display(val){
    document.getElementById("result").value+=val;
}
function myFunction(event){
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 
var cal=document.getElementById("calculator");
cal.onkeyup=function(event){
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = result.value 
        console.log(x); 
        solve(); 
    } 
}
function solve(){
    let x = result.value;
    let y = math.evaluate(x) 
    document.getElementById("result").value = y;
}
function clear(){
    result.remove();
}