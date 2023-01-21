let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Calculate() {
     try{
        outputScreen.value= eval(outputScreen.value);
     }
     catch(err){
        alert("invalid")
     }
}

function Clear(){
    outputScreen.value=" ";
}
function Delete(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}