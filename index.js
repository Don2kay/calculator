function display(val){

    document.getElementById("screen").value += val;
    return val
}

function solve(){
    if(document.getElementById("screen").value === ""){
        alert("Type a number")
    } else{
    let input = document.getElementById("screen").value;
    let output = eval(input);
    document.getElementById("screen").value = output;
    return output}
}

const clear = document.querySelector(".btn-clear")

clear.addEventListener("click", function(){
    document.getElementById("screen").value = ""
})